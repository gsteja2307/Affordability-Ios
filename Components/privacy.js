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
    this.props.navigationProps.navigate('Page1');
  };
  render() {
    return (
      <View style={{ flexDirection: 'row', backgroundColor: "white" }}>
        <TouchableOpacity onPress={this.BackButn.bind(this)} style={{ justifyContent: "center" }}  >
          <Text style={{ color: "black", fontSize: 40 }}> &#8249;</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)} style={{ justifyContent: "center", marginLeft: "3%" }} >
          <Image
            source={require('./image/drawer.png')}
            style={{ width: 30, height: 30 }}
          />
        </TouchableOpacity>

        <DrawerNavigation />
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
    marginTop: Platform.OS === "android" ? 24 : 40,
  },
  topbar: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#103047",
  }
});
