/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
//test git
//fixed git user name
import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Alert,
  async,
  AppState,
  Image,
  BackHandler
} from "react-native";
import firebase from "react-native-firebase";
import DeviceInfo from "react-native-device-info";
import NetInfo from "@react-native-community/netinfo";
import AsyncStorage from "@react-native-community/async-storage";
// import Main from './Components/Main'
import {createStackNavigator, createAppContainer} from 'react-navigation';
// import Afford from './Components/Afford';
import WelcomePage from './Components/WelcomePage';
const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu",
});

export default class App extends Component {
  deviceInfo1 = [];

  constructor(props) {
    super(props);
    this.state = {
      // appState: AppState.currentState,
      deviceInfo: {},
      fcmToken: "",
      isLoading: true,
      isOnline: false,
    };
  }
  performTimeConsumingTask = () => {
    return new Promise(resolve =>
      setTimeout(() => {
        resolve("result");
      }, 5000)
    );
  };
  async componentWillMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
    await this.CheckConnectivity();
  }
  CheckConnectivity = () => {
    // For Android devices
    if (Platform.OS === "android") {
      NetInfo.isConnected.fetch().then(isConnected => {
        if (isConnected) {
          const data = this.performTimeConsumingTask();

          if (data !== null) {
            this.setState({ isLoading: false });
          }
          // Alert.alert("You are online!");
        } else {
          Alert.alert(
            "No Connectivity",
            "Please check your internet connection",
            [{ text: "Try Again", onPress: () => this.CheckConnectivity() }],
            { cancelable: false }
          );
        }
      });
    } else {
      // For iOS devices
      NetInfo.isConnected.addEventListener(
        "connectionChange",
        this.handleFirstConnectivityChange
      );
    }
  };

  handleFirstConnectivityChange = isConnected => {
    NetInfo.isConnected.removeEventListener(
      "connectionChange",
      this.handleFirstConnectivityChange
    );

    if (isConnected === false) {
      Alert.alert(
        "No Connectivity",
        "Please check your internet connection",
        [{ text: "Try Again", onPress: () => this.CheckConnectivity() }],
        { cancelable: false }
      );
    } else {
      
        this.setState({ isLoading: false });
    
          // Alert.alert("You are online!");
    }
  };

  async componentDidMount() {
    this.CheckConnectivity();

    var deviceInfo = {
      getDeviceId: DeviceInfo.getDeviceId(),
      getModel: DeviceInfo.getModel(),
      getSerialNumber: 'qwertyuiop',
      getUniqueID: DeviceInfo.getUniqueID()
    };

    this.setState({ deviceInfo: deviceInfo });
    console.log("deviceInfo", deviceInfo);
    this.checkPermission();
    this.createNotificationListeners(); //add this line
    console.log("HI");
    // this.postFcmToken();
    // AppState.addEventListener('change', this._handleAppStateChange);
    this.onTokenRefreshListener = firebase
      .messaging()
      .onTokenRefresh(fcmToken => {
        // Process your token as required
        this.setState({ fcmToken });
        this.postFcmToken();
        console.log("Updated Token=" + fcmToken);
      });
  }

  async postFcmToken() {
    var data = {
      deviceSerialNumber: this.state.deviceInfo.getSerialNumber,
      deviceId: this.state.deviceInfo.getDeviceId,
      deviceModel: this.state.deviceInfo.getModel,
      deviceUniqueID: this.state.deviceInfo.getUniqueID,
      fcmToken: this.state.fcmToken
    };

    fetch("http://69.55.49.121:3001/v1/notifications/post-fcm-token", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(responseData => {
        console.log(responseData);
      })
      .catch(error => {
        console.log("Error fcm");
      });
    // console.log("after fetch call");
  }

  componentWillUnmount() {
    this.onTokenRefreshListener();
    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
    this.notificationListener;
    this.notificationOpenedListener;
    this.notificationDisplayedListener();
    // AppState.removeEventListener('change', this._handleAppStateChange);
  }
  onBackPress = () => {
    //Code to display alert message when use click on android device back button.
    Alert.alert(
      " Exit From App ",
      " Do you want to exit From App ?",
      [
        { text: "Yes", onPress: () => BackHandler.exitApp() },
        { text: "No", onPress: () => console.log("NO Pressed") }
      ],
      { cancelable: false }
    );

    // Return true to enable back button over ride.
    return true;
  };
  // _handleAppStateChange = (nextAppState) => {
  //   if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
  //     console.log('App has come to the foreground!')
  //   }
  //   else
  //   console.log('app is closed')
  //   this.setState({ appState: nextAppState });
  // }

  //1
  async checkPermission() {
    const enabled = await firebase.messaging().hasPermission();
    if (enabled) {
      this.getToken();
    } else {
      this.requestPermission();
    }
  }

  async createNotificationListeners() {
    /*
     * Triggered when a particular notification has been received in foreground
     * */
    this.notificationListener = firebase
      .notifications()
      .onNotification(notification => {
        const { title, body } = notification;
        // console.log('onNotification:');
        // this.showAlert(title, body);
        // alert('message');
        notification.setSound("default");

        const localNotification = new firebase.notifications.Notification({
          sound: "default",
          show_in_foreground: true
        })
          .setNotificationId(notification.notificationId)
          .setTitle(notification.title)
          // .setSubtitle(notification.subtitle)
          .setBody(notification.body)
          .setSound("default")
          // .setData(notification.data)
          .android.setChannelId("fcm_default_channel") // e.g. the id you chose above
          .android.setSmallIcon("@drawable/ic_launcher") // create this icon in Android Studio
          .android.setColor("#0088E8") // you can set a color here
          .android.setPriority(firebase.notifications.Android.Priority.High)
          .android.setAutoCancel(true);

        firebase
          .notifications()
          .displayNotification(localNotification)
          .catch(err => console.error(err));
      });

    const channel = new firebase.notifications.Android.Channel(
      "fcm_default_channel",
      "Demo app name",
      firebase.notifications.Android.Importance.High
    )
      .setDescription("Demo app description")
      .setSound("default");
    firebase.notifications().android.createChannel(channel);

    /*
     * If your app is in background, you can listen for when a notification is clicked / tapped / opened as follows:
     * */
    this.notificationOpenedListener = await firebase
      .notifications()
      .onNotificationOpened(notificationOpen => {
        const { title, body } = notificationOpen.notification;
        // console.log('onNotificationOpened:');
        // this.showAlert(title, body);
        // console.log('hello');
      });

    this.notificationDisplayedListener = firebase
      .notifications()
      .onNotificationDisplayed((notificationDisplay: notification) => {
        // Process your notification as required
        // console.log('DisplayedListener: ', notificationDisplay);
      });
    // this.notificationListener = firebase.notifications().onNotification((notification: Notification) => {
    //   console.log('notificationListener: ', notification);
    // });

    /*
     * If your app is closed, you can check if it was opened by a notification being clicked / tapped / opened as follows:
     * */
    const notificationOpen = await firebase
      .notifications()
      .getInitialNotification();
    if (notificationOpen) {
      const { title, body } = notificationOpen.notification;
      //console.log('getInitialNotification:');

      this.showAlert(title, body);
    }
    /*
     * Triggered for data only payload in foreground
     * */
    this.messageListener = firebase.messaging().onMessage(message => {
      //process data message
      console.log(JSON.stringify(message));
    });
  }

  //3
  async getToken() {
    let fcmToken = await AsyncStorage.getItem("fcmToken");
    if (!fcmToken) {
      fcmToken = await firebase.messaging().getToken();
      console.log("if cond fcmToken:", fcmToken);
      if (fcmToken) {
        // user has a device token
        console.log("nestedif cond fcmToken:", fcmToken);
        AsyncStorage.setItem("fcmToken", fcmToken);
        this.setState({ fcmToken: fcmToken });
      }
    } else {
      this.setState({ fcmToken: fcmToken });
    }
    console.log("fcmToken:", fcmToken);
    this.postFcmToken();
  }

  //2
  async requestPermission() {
    try {
      await firebase.messaging().requestPermission();
      // User has authorised
      this.getToken();
    } catch (error) {
      // User has rejected permissions
      console.log("permission rejected");
    }
  }

  render() {
    if (this.state.isLoading==true) {
    return <View 
            style={styles.container2}
            > 
              <View style={{justifyContent:"center",backgroundColor:"#dde3ed",alignItems:"center",height:120,width:120,borderRadius:15,borderColor:"#FFF",imageAlign:"center",elevation:2}}>
                <Image
                style={{height:100,width:100}}
                source={require('./ic_launcher.png')}
                />
            </View>
        </View>
        ;
  }
    return (
      <WelcomePage screenProps={{CheckConnectivity:this.CheckConnectivity}}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  container2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },

  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
