import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  Image,
  ImageBackground,
  AsyncStorage
} from 'react-native';

global.data = {
  "firstName": "",
  "lastName": "",
  "emailId": "",
  "phoneNumber": ""

}

export default class GetStarted extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      phonenumber: '',
      userid: "",

    };
  }
  static navigationOptions = {
    header: null,
  }
  componentDidMount() {
    displayData = () => {

    }
  }
  // console.log("suchith",logindetails);

  usercheck = async function () {


    try {
      console.log("async data", AsyncStorage.getItem('user'));
      await AsyncStorage.getItem('user').then(user => {
        console.log("user", user)
        let parsed = JSON.parse(user)
        console.log("parsed", parsed)
        global.data = {
          "firstName": (parsed.firstName) ? parsed.firstName : null,
          "lastName": (parsed.lastName) ? parsed.lastName : null,
          "emailId": (parsed.emailId) ? parsed.emailId : null,
          "phoneNumber": (parsed.phoneNumber) ? parsed.phoneNumber : null

        }


      })
    }
    catch (error) {
      global.data = {
        "firstName": null,
        "lastName": null,
        "emailId": null,
        "phoneNumber": null

      }
      console.log("usercheck fucntion in getstarted");
    }

    if (global.data.firstName !== null && global.data.firstName !== undefined && global.data.firstName !== "") {
      console.log("globaldata", global.data);
      this.props.navigation.navigate("Afford");
    }
    else {
      this.props.navigation.navigate("Loginpage");
    }


    // catch(error){ 
    // console.log(error);

    // } 


  }


  render() {
    const { navigate } = this.props.navigation;
    return (
      <ImageBackground source={require('../assets/getstartedbg.jpg')} style={styles.container}>
        <View style={{ alignItems: 'center', }}>
          <Image
            style={{ marginTop: "37%", marginBottom: "15%" }}
            source={require('../assets/main.png')}>

          </Image>
        </View>
        <View style={{}}>

          <Text style={styles.hdng_styls}>CONTROL OF YOUR FINANCES AGAIN</Text>


          <Text style={styles.sub_hdng_styls}>We Are Ex Bankers And We Can Show You </Text>
          <Text style={styles.sub_hdng_styls}>How To Play This Game</Text>

        </View>
        <View style={{ marginTop: "16%" }}>
          <TouchableOpacity style={{ justifyContent: "center", backgroundColor: "green", borderRadius: 30, height: 60, width: 150, alignItems: "center" }} onPress={this.usercheck.bind(this)} >
            <Text style={{ fontSize: 16, padding: "3%", color: "white" }} > Get Started</Text>
          </TouchableOpacity>
        </View>

      </ImageBackground>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop:Platform.OS== "android"?"": 20,
    flex: 1,
    // justifyContent:'center',
    alignItems: 'center',
  },
  hdng_styls: {
    marginBottom: "5%",
    // fontFamily: "Open Sans",
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',

  },
  sub_hdng_styls: {
    // fontFamily: "Open Sans",
    color: 'white',
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center'
  }

});