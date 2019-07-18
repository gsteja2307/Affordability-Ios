import React, { Component } from 'react';
import {
StyleSheet,
Text,
View,
Platform,
Image
} from 'react-native';

export default class Submit extends Component {
  // static navigationOptions = {
  //   header: null
  // }
  render() {
    return (
      <View style={styles.container}>
        <View  style={{marginTop:70,marginLeft:40}}>
          <Image
            source={require('../assets/main.png')}
          />
        </View>
        <View  style={{marginTop:70}}>
            <Text style={{fontWeight:"bold",fontsize:32, justifyContent:"center",margin:10}}>
              When it comes to buying a house most buyer fail to see if they qualify based on there credit score. We have arranged a free credit score offers from our partners for you.
            </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
container: {
flex: 1,
marginTop:Platform.OS=== "android"?24:40,
},
topbar: {
height: 50,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: "#103047",
},

});
