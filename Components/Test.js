/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Alert, ScrollView, Image,TouchableOpacity,TextInput  } from 'react-native';
import PropTypes from 'prop-types';
import Toast, { DURATION } from 'react-native-easy-toast'
import {
    ImageBackground,
    Dimensions,
    LayoutAnimation,
    UIManager,
    KeyboardAvoidingView,
} from 'react-native';
import { Input, Button, Icon, SocialIcon } from 'react-native-elements';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
// Enable LayoutAnimation on Android
UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);

const TabSelector = ({ selected }) => {
    return (
        <View style={styles.selectorContainer}>
            <View style={selected && styles.selected} />
        </View>
    );
};
TabSelector.propTypes = {
    selected: PropTypes.bool.isRequired,
};
export default class Loginpage extends React.Component{
    constructor(){
        super();
        this.state={
            email:"",
            password:""
        }
    }
    
    render(){
        return(
                
            <ImageBackground style={{marginTop:20,flex:1}} source={require('../assets/getstartedbg.jpg')}>
                <View style={{ marginTop:"15%",margin:"5%",borderRadius:5,backgroundColor:"white",alignItems:"center"}}> 
                    <Image style={{marginTop:"2%"}}
                     source={require("../assets/main2x.png")}/>
                    <View style={{flexDirection:"row",margin:"5%"}}>
                        <TouchableOpacity style={{ marginRight: "10%" }}><Text style={{fontSize:20, color:"#40b049",fontWeight:"bold",textDecorationLine:"underline"}}>Login</Text></TouchableOpacity>
                        <TouchableOpacity style={{ marginLeft: "10%" }}><Text style={{ fontSize: 20,color:"#2959a7",fontWeight:"bold",textDecorationLine:"underline"}}>Signup</Text></TouchableOpacity>
                    </View>
                    <View style={{ width: "100%",paddingLeft:"3%",paddingRight:"3%",paddingBottom:"3%"}}>
                        <Text style={{ color: "grey" }}>Email</Text>
                        <TextInput
                            // style={{ fontSize: "2px", maxHeight: "15px", width: "50px", height: "15px",borderTopWidth:0,borderLeftWidth:0,borderRightWidth:0 }}
                            style={{width:"100%",height:40,borderBottomWidth:1,borderColor:"black"}}
                            // placeholder={"Email"}
                            placeholderTextColor={'black'}
                            inputStyle={{ fontFamily: 'Impact', fontSize: 5 }}
                            autoFocus={true}
                            // onFocus={this.setState.borderBottomColor=}
                            // style={this.state.formstyle1}
                            // onBlur={this.onBlur1.bind(this)}
                            // onFocus={this.onFocus1.bind(this)}
                            // returnKeyType={"next"}
                            // onSubmitEditing={(event) => {
                            //     this.refs.currentZip.focus();
                            // }}
                            // underlineColorAndroid='transparent'
                            // onChangeText={this.Address.bind(this)}
                            value={this.state.email}>
                        </TextInput>
                        <Text style={{color:"grey"}}>Password</Text>
                            <TextInput
                            style={{ width: "100%", height: 40, borderBottomWidth: 1, borderColor: "black" }}
                            // placeholder={"Password"}
                            placeholderTextColor={'black'}
                            inputStyle={{ fontFamily: 'Impact', fontSize: 5 }}
                            autoFocus={true} 
                            value={this.state.password} >
                            
                            </TextInput>
                   </View>
                </View>
            </ImageBackground>
                
        )
    }
}  