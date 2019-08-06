import React, { Component } from 'react';
import {
  StyleSheet,
  ActivityIndicator,
  Text,
  View,
  TouchableOpacity,
  Platform,
  Image,

} from 'react-native';
import { Footer, Container, Header, Button } from "native-base";
import { WebView } from 'react-native-webview';
import DrawerNavigation from './DrawerNavigation';
import { DrawerActions } from 'react-navigation';
import Icon from 'react-native-ionicons'
 
export default class LogoutIcon extends Component {

   

  render() {
    return (
        <View style={{ marginRight: 10, marginLeft: 20 }}>
        <Icon name="log-out"  size={25} color="#808080" />
          </View>
 
     );
  }
}
 
