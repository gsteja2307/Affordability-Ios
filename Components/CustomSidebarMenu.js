import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { Button } from 'native-base';
import LogoutIcon from './LogoutIcon';


export default class CustomSidebarMenu extends Component {
  constructor() {
    super();
    this.state={
      dummy:false,
     }
     this.proileImage =
      'https://aboutreact.com/wp-content/uploads/2018/07/sample_img.png';
    
    this.items = [
      {
        navOptionThumb: 'camera',
        navOptionName: 'Home',
        screenToNavigate: 'Page1',
      },
      {
        navOptionThumb: 'build',
        navOptionName: 'Privacy',
        screenToNavigate: 'Privacy',
      },
      {
        navOptionThumb: 'image',
        navOptionName: 'Terms',
        screenToNavigate: 'Terms',
      },

    ];
  }
  logmeout = async () => {
    if (global.logout()) {
      console.log("i am done");
      this.props.navigation.navigate("GetStarted");

    }
    else {
      console.log("fail");
    }
  }
componentDidMount(){
  console.log("items...",this.items)
}
  render() {
    console.log("render....:",this.items, global.currentScreenIndex)
    return (
      <View style={styles.sideMenuContainer}>
        {/*Top Large Image */}


        <Image
          resizeMode='contain'
          source={require('../assets/main.png')}
          style={styles.sideMenuProfileIcon}
        />
        <Text> {global.data.firstName + " " + global.data.lastName}  </Text>

        {/*Divider between Top Image and Sidebar Option*/}
        <View
          style={{
            width: '100%',
            height: 1,
            backgroundColor: '#e2e2e2',
            marginTop: 15,
          }}
        />
         <View style={{ width: '100%' }}>
          {this.items.map((item, key) => (
            
            <View
              key={key}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingTop: 5,
                paddingBottom: 5,
                 backgroundColor : item.navOptionName == "Home" && !this.state.dummy ?'#e0dbdb' : this.state.dummy && global.currentScreenIndex === key?'#e0dbdb': '#ffffff'
              }}>
              <View style={{ marginRight: 10, marginLeft: 20 }}>
                <Icon name={item.navOptionThumb} size={25} color="#808080" />
              </View>
              <Text
                style={{
                  fontSize: 15,
                   color : (item.navOptionName == "Home" ) && !this.state.dummy ?'#2959a7' : this.state.dummy && global.currentScreenIndex === key?'#2959a7': 'black'
                }}
                onPress={() => {
                  global.currentScreenIndex = key;
                  this.props.navigation.navigate(item.screenToNavigate);
                  this.setState({
                    dummy :true,
                   })
                }}>
                {item.navOptionName}
              </Text>
            </View>
          ))}
        </View>
        <View style={{ width: '100%' }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              // paddingTop: 5,
              paddingBottom: 5
            }}>
           <LogoutIcon />

            <Button transparent onPress={this.logmeout} ><Text style={{
              fontSize: 15,
              color: "black"
            }}>Logout</Text></Button>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  sideMenuContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 20,
  },
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: "100%",
    height: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
    //marginTop: 20,
    borderRadius: 150 / 2,
  },
});