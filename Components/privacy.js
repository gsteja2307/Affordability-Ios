import React, { Component } from 'react';
import {
  StyleSheet,
  ActivityIndicator,
  Text,
  View,
  TouchableOpacity,
  Platform, Image
} from 'react-native';
import { WebView } from 'react-native-webview';
import axios from 'axios';
import DrawerNavigation from './DrawerNavigation';
import { DrawerActions } from 'react-navigation';

class NavigationDrawerStructure extends React.Component {
  toggleDrawer = () => {
    //this.props.navigationProps.toggleDrawer();
    this.props.navigationProps.dispatch(DrawerActions.toggleDrawer())
  };
  BackButn = () => {
    global.currentScreenIndex = 0;
    this.props.navigationProps.navigate('Page1');
  };
  render() {
    return (
      <View style={{ flexDirection: 'row', backgroundColor: "white", backgroundColor: "red" }}>
        {/* <TouchableOpacity onPress={this.BackButn.bind(this)} style={{ justifyContent: "center" }}  >
          <Text style={{ color: "black", fontSize: 40 }}> &#8249;</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)} style={{ justifyContent: "center", marginLeft: "3%" }} >
          <Image
            source={require('./image/drawer.png')}
            style={{ width: 30, height: 30 }}
          />
        </TouchableOpacity>

        <DrawerNavigation />
        <View style={{ width: 60 }}></View> */}


        <View style={{ flexDirection: 'row', backgroundColor: "white", flex: 1, justifyContent: "center", alignItems: "center" }}>
          <View style={{ flexDirection: "row", width: 60, flexWrap: "wrap", alignItems: "center", backgroundColor: "white", justifyContent: "space-between" }}>
            <TouchableOpacity onPress={this.BackButn.bind(this)} style={{ marginLeft: "5%", height: 25, width: 25, justifyContent: "center", alignItems: "center" }}  >
              <Image
                source={require('../assets/backarrow.png')}
                style={{ marginLeft: "5%", width: "100%", height: "100%" }}
              />
            </TouchableOpacity>



            <TouchableOpacity onPress={this.toggleDrawer.bind(this)} style={{ justifyContent: "center", marginLeft: "3%" }} >
              <Image
                source={require('./image/drawer.png')}
                style={{ width: 25, height: 25 }}
              />
            </TouchableOpacity>
          </View>

          <DrawerNavigation />
          <View style={{ width: 60 }}></View>
        </View>
      </View>
    );
  }
}


export default class Privacy extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: <NavigationDrawerStructure navigationProps={navigation} />,
  })

  render() {
    let jsCode = `document.querySelector('.logo-div').style.display = 'none'; `;
    return (
      <View style={styles.container}>
        <WebView
          renderLoading={() => { return (<ActivityIndicator style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, alignItems: 'center', justifyContent: 'center' }} />) }}
          //startInLoadingState
          //javaScriptEnabled={true}
          injectedJavaScript={jsCode}
          source={{ uri: 'http://affordability.io/mortgage/lander3/privacy_policy.html' }}
        />

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? 24 : 20,
  },
  topbar: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#103047",
  }
});
