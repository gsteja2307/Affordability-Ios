/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
console.log("global", global.userinfo2)
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Alert, ScrollView, StatusBar, Image, TouchableOpacity, AsyncStorage } from 'react-native';
import { GoogleSignin, statusCodes, GoogleSigninButton } from 'react-native-google-signin';
import { LoginManager, LoginButton, AccessToken, GraphRequest, GraphRequestManager } from "react-native-fbsdk";
import PropTypes from 'prop-types';
import axios from 'axios';
import Toast, { DURATION } from 'react-native-easy-toast';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    ImageBackground,
    Dimensions,
    LayoutAnimation,
    UIManager,
    KeyboardAvoidingView,
} from 'react-native';
import { Input, Button, SocialIcon } from 'react-native-elements';
// import OtpInputs from 'react-native-otp-inputs';


import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';

const BG_IMAGE = require('../assets/getstartedbg.jpg');



// const BG_IMAGE = require('../assets/loginback.jpg');


removeItemValue = async (key) => {
    try {
        AsyncStorage.setItem(key, {});
        // await AsyncStorage.removeItem(key);
        console.log("removing item", key);
        return true;
    }
    catch (exception) {
        AsyncStorage.setItem(key, {});
    }
}

// global.success=false;
global.logout = async () => {
    await this.removeItemValue('user')
    console.log("i am in global function");
    if (global.loginType == "google") {
        console.log("if condition");
        (signOut = async () => {
            try {
                console.log("inside try")
                await GoogleSignin.revokeAccess();
                console.log("revoke access is working")
                await GoogleSignin.signOut();
                console.log("hellooooooo")
                global.data = {
                    "firstName": "",
                    "lastName": "",
                    "emailId": "",
                    "phoneNumber": ""
                };
                global.loginType = "";
                console.log("data", global.data);
                console.log("logintype", global.loginType);
                // Remember to remove the user from your app's state as well
                console.log("logout");
                return true;

            } catch (error) {
                console.error(error);
                return false;
            }
        })();
    }
    else if (global.loginType == "login") {
        (logout = async () => {
            console.log("acess", global.Accesstoken);
            if (global.Accesstoken != "") {
                global.data = {
                    "firstName": "",
                    "lastName": "",
                    "emailId": "",
                    "phoneNumber": ""
                };
                global.loginType = "";
                global.Accesstoken = "";
                console.log("data", global.data);
                console.log("logintype", global.loginType);
                console.log("acess", global.Accesstoken);
                // Remember to remove the user from your app's state as well
                console.log("logout");
                return true;

            }
            else {
                return false;
            }
        })();
    }
    else if (global.loginType == "facebook") {
        (customFacebookLogout = () => {
            var current_access_token = '';
            AccessToken.getCurrentAccessToken().then((data) => {
                current_access_token = data.accessToken.toString();
            }).then(() => {
                let logout =
                    new GraphRequest(
                        "me/permissions/",
                        {
                            accessToken: current_access_token,
                            httpMethod: 'DELETE'
                        },
                        (error, result) => {
                            if (error) {
                                console.log('Error fetching data: ' + error.toString());
                            } else {
                                console.log("logintype", global.loginType);
                                LoginManager.logOut();
                                global.data = {
                                    "firstName": "",
                                    "lastName": "",
                                    "emailId": "",
                                    "phoneNumber": ""
                                };
                                global.loginType = "";
                                console.log("data", global.data);
                                console.log("logintype", global.loginType);
                                // Remember to remove the user from your app's state as well
                                console.log("logout");
                                return true;
                            }
                        });
                new GraphRequestManager().addRequest(logout).start();
            })
                .catch(error => {
                    console.log(error)
                    return false;
                });
        })();
    }
}

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});
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

class Loginpage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            color: "red",
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            phonenumber: '',
            fontLoaded: false,
            selectedCategory: 0,
            isLoading: false,
            isEmailValid: true,
            isPasswordValid: true,
            isConfirmationValid: true,
            validfirstname: true,
            validlastname: true,
            validphone: true,
            userid: ""
        };

        this.selectCategory = this.selectCategory.bind(this);
        this.login = this.login.bind(this);
        this.signUp = this.signUp.bind(this);
    }



    selectCategory(selectedCategory) {
        console.log("test..:", this.state.email)
        LayoutAnimation.easeInEaseOut();
        this.setState({
            selectedCategory,
            isLoading: false,
        });
    }

    validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        return re.test(email);
    };

    // login() {
    //   const { email, password } = this.state;
    //   this.setState({ isLoading: true });
    //   // Simulate an API call
    //   setTimeout(() => {
    //     LayoutAnimation.easeInEaseOut();
    //     this.setState({
    //       isLoading: false,
    //       isEmailValid: this.validateEmail(email) || this.emailInput.shake(),
    //       isPasswordValid: password.length >= 5 || this.passwordInput.shake(),
    //     });
    //   }, 1500);
    // }

    login() {
        const { email, password } = this.state;

        this.setState({
            isLoading: false,
            isEmailValid: this.validateEmail(email),
            isPasswordValid: password.length >= 8,
        });

        global.data = {
            "firstName": "",
            "lastName": "",
            "emailId": "",

            "phoneNumber": ""
        }
        login = {
            "emailId": this.state.email,
            "password": this.state.password
        }
        console.log(login)
        const self = this;
        const config = {
            url: 'http://69.55.49.121:3001/v1/mobile-users/login',
            data: login,
            method: 'post'

        };

        axios(config).then((response) => {
            //this.props.navigation.navigate("Googlefblogin" )
            global.data = {
                "firstName": response.data.result.firstName,
                "lastName": response.data.result.lastName,
                "emailId": response.data.result.emailId,
                "userid": response.data.result._id,
                "phoneNumber": response.data.result.phoneNumber
            }
            let obj = {
                "firstName": response.data.result.firstName,
                "lastName": response.data.result.lastName,
                "emailId": response.data.result.emailId,
                "phoneNumber": response.data.result.phoneNumber,
                "userid": response.data.result._id
            }
            AsyncStorage.setItem('user', JSON.stringify(obj));
            global.Accesstoken = response.data.result.access_token;

            global.loginType = "login";

            console.log("sending this data", global.data);
            console.log('success', response.data.result);
            this.props.navigation.navigate("Afford");


        }).catch((error) => {

            if (this.state.email == '' && this.state.password == '') {
                var emailErr = error.response.data.result.error_message.emailId;
                var passwordErr = error.response.data.result.error_message.password;
                this.refs.toast.show(emailErr + ' and ' + passwordErr, 5000);

                console.log(emailErr + ' and ' + passwordErr);
            } else {
                this.refs.toast.show(error.response.data.result.error_message.error, 5000);

                console.log(error.response.data.result.error_message.error);
            }
        })

    }

    // signUp() {
    //   const { firstname,lastname,email, password, phonenumber } = this.state;
    //   this.setState({ isLoading: true });
    //   // Simulate an API call
    //   setTimeout(() => {
    //     LayoutAnimation.easeInEaseOut();
    //     this.setState({
    //       isLoading: false,
    //       isEmailValid: this.validateEmail(email) || this.emailInput.shake(),
    //       isPasswordValid: password.length >= 8 || this.passwordInput.shake(),
    //     });
    //   }, 1500);
    // }

    signUp() {
        // global.signup=true;
        const { firstname, lastname, email, password, phonenumber } = this.state;
        this.setState({
            isLoading: false,
            isEmailValid: this.validateEmail(email),
            isPasswordValid: password.length >= 8,
        });

        global.data = {
            "firstName": this.state.firstname,
            "lastName": this.state.lastname,
            "emailId": this.state.email,
            "password": this.state.password,
            "phoneNumber": this.state.phonenumber
        }

        if (this.state.firstname == "" || this.state.lastname == "" || this.state.email == "" || this.state.password == "" || this.state.phonenumber == "") {
            if (this.state.firstname == "")
                this.setState({ validfirstname: false })
            else
                this.setState({ validfirstname: true })
            if (this.state.lastname == "")
                this.setState({ validlastname: false })
            else
                this.setState({ validlastname: true })
            if (this.state.phonenumber == "")
                this.setState({ validphone: false })
            else
                this.setState({ validphone: true })
            this.refs.toast.show('enter valid Input', 5000);
        }
        else {
            this.setState({ validfirstname: true, validlastname: true, validphone: true })
        }

        const self = this;
        const config = {
            url: 'http://69.55.49.121:3001/v1/mobile-users/register-user',

            data: global.data,
            method: 'post'
        }
        axios(config).then((response) => {
            console.log(data["firstName"])
            this.setState({ color: "green" });
            this.refs.toast.show("sucessfully registered please login to continue", 5000);
            this.props.navigation.navigate(" Loginpage");



            console.log('successully registered');

        }).catch((error) => {
            if (this.state.firstname == "" || this.state.lastname == "" || this.state.email == "" || this.state.password == "" || this.state.phonenumber == "") {
                this.refs.toast.show('enter all Input', 5000);
            }
            else {
                this.refs.toast.show(error.response.data.result.error_message.error, 5000);
            }

            console.log(error);
        })

    }

    //googlelogin
    async componentDidMount() {
        this._configureGoogleSignIn();
    }

    _configureGoogleSignIn() {
        GoogleSignin.configure({
            webClientId: '685490266582-kme9phetflvug5dg5h8ks5proeg9bbh0.apps.googleusercontent.com',  //Replace with your own client id
            offlineAccess: false,
        });
    }

    _signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            // await GoogleSignin.revokeAccess();
            console.log('Success:', userInfo.user);
            global.loginType = "google";

            this.setState({ firstname: userInfo.user.givenName, lastname: userInfo.user.familyName, email: userInfo.user.email });
            this.postSocialMediaData();



        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // sign in was cancelled
                console.log('cancelled');
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation in progress already
                console.log('in progress');
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {

                console.log('play services not available or outdated');
            } else {
                console.log('Something went wrong:', error.toString());

                this.setState({
                    error,
                });
            }
        }
    };

    //fblogin
    _fblogin = async () => {
        let self = this;
        LoginManager.logInWithPermissions(["public_profile", "email"]).then(
            function (result) {
                if (result.isCancelled) {
                    console.log("Login cancelled");
                } else {
                    AccessToken.getCurrentAccessToken().then(
                        (data) => {
                            const infoRequest = new GraphRequest(
                                '/me?fields=name,first_name,last_name,email',
                                null,
                                //Create response callback.
                                _responseInfoCallback = (error, result) => {
                                    if (error) {
                                        console.log('Error fetching data: ' + error.toString());
                                    } else {
                                        console.log('Result Name: ' + result.name);
                                        console.log('result', result);
                                        self.setState({ firstname: result.first_name, lastname: result.last_name, email: result.email });
                                        global.loginType = "facebook";
                                        self.postSocialMediaData();

                                    }
                                }
                            );
                            // Start the graph request.
                            new GraphRequestManager().addRequest(infoRequest).start();
                        }
                    )



                }

            },




        );

    };

    render() {


        const {
            selectedCategory,
            isLoading,
            isEmailValid,
            isPasswordValid,

            firstname,
            lastname,
            phonenumber,
            email,
            password,

        } = this.state;
        const isLoginPage = selectedCategory === 0;//parent
        const isSignUpPage = selectedCategory === 1;//child
        // console.log("render..:", isLoginPage, isSignUpPage)
        return (
            <View style={styles.container}>
                <ImageBackground source={BG_IMAGE} style={styles.bgImage}>

                    <View style={{}}>
                        <ScrollView>
                            <KeyboardAvoidingView
                                contentContainerStyle={styles.loginContainer}
                                behavior="absolute"
                            >

                                <View style={{ flexDirection: 'row' }}>
                                    <Button
                                        disabled={isLoading}
                                        type="clear"
                                        activeOpacity={0.7}
                                        onPress={() => this.selectCategory(0)}
                                        containerStyle={{ flex: 1 }}
                                        titleStyle={[
                                            styles.categoryText,
                                            isLoginPage && styles.selectedCategoryText,
                                        ]}
                                        title={'Login'}
                                    />
                                    <Button
                                        disabled={isLoading}
                                        type="clear"
                                        activeOpacity={0.7}
                                        onPress={() => this.selectCategory(1)}
                                        containerStyle={{ flex: 1 }}
                                        titleStyle={[
                                            styles.categoryText,
                                            isSignUpPage && styles.selectedCategoryText,
                                        ]}
                                        title={'Sign up'}
                                    />
                                </View>
                                <View style={styles.rowSelector}>
                                    <TabSelector selected={isLoginPage} />
                                    <TabSelector selected={isSignUpPage} />
                                </View>
                                <View style={styles.formContainer}>

                                    {isSignUpPage && (
                                        <View style={styles.formsignup}>
                                            <Input
                                                value={firstname}
                                                autoFocus={true}
                                                secureTextEntry={false}
                                                keyboardAppearance="light"
                                                autoCapitalize="none"
                                                autoCorrect={false}
                                                keyboardType="default"
                                                returnKeyType={'next'}
                                                onSubmitEditing={(event) => {
                                                    this.refs.lastname.focus();
                                                }}
                                                blurOnSubmit={true}
                                                containerStyle={{
                                                    marginTop: 16,
                                                    borderBottomColor: 'rgba(0, 0, 0, 0.38)',
                                                }}
                                                inputStyle={{ marginLeft: 10 }}
                                                placeholder={'Firstname'}
                                                ref={input => (this.confirmationInput = input)}

                                                onChangeText={firstname => { 

                                                    var regex = new RegExp("^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$");
                                                        let res=false;
                                                            if (regex.test(firstname)) {
                                                                 res=true;
                                                            }
                                                            else{
                                                                 res=false;
                                                            }
                                                        // let res = this.checkString(str);
                                                        // console.log(res);
                                                        if (res == false) {
                                                            this.setState({
                                                                
                                                                validfirstname: res,
                                                            });
                                                        }
                                                        else {
                                                            this.setState({
                                                                
                                                                validfirstname: res,
                                                            });
                                                        }
                                                    
                                                                                                        
                                                    this.setState({ firstname })}}
                                            />
                                            {
                                                this.state.validfirstname ? <Text></Text> : <Text style={{ color: "red" }}>enter a valid fname</Text>
                                            }
                                            <Input
                                                value={lastname}
                                                secureTextEntry={false}
                                                keyboardAppearance="light"
                                                autoCapitalize="none"
                                                autoCorrect={false}
                                                keyboardType="default"
                                                returnKeyType={'next'}
                                                blurOnSubmit={true}
                                                containerStyle={{
                                                    marginTop: 16,
                                                    borderBottomColor: 'rgba(0, 0, 0, 0.38)',
                                                }}
                                                inputStyle={{ marginLeft: 10 }}
                                                placeholder={'Lastname'}
                                                ref='lastname'
                                                onSubmitEditing={(event) => {
                                                    this.refs.email.focus();
                                                }}

                                                // onChangeText={lastname => this.setState({ lastname })}
                                                onChangeText={lastname => {

                                                    var regex = new RegExp("^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$");
                                                    let res = false;
                                                    if (regex.test(lastname)) {
                                                        res = true;
                                                    }
                                                    else {
                                                        res = false;
                                                    }
                                                    // let res = this.checkString(str);
                                                    // console.log(res);
                                                    if (res == false) {
                                                        this.setState({

                                                            validlastname: res,
                                                        });
                                                    }
                                                    else {
                                                        this.setState({

                                                            validlastname: res,
                                                        });
                                                    }


                                                    this.setState({ lastname })
                                                }}
                                            />

                                            
                                            {
                                                this.state.validlastname ? <Text></Text> : <Text style={{ justifyContent: 'flex-start', color: "red" }}>Please enter lastname</Text>
                                            }
                                            <Input

                                                value={email}
                                                keyboardAppearance="light"
                                                autoFocus={false}
                                                autoCapitalize="none"
                                                autoCorrect={false}
                                                keyboardType="email-address"
                                                returnKeyType="next"
                                                inputStyle={{ marginLeft: 10 }}
                                                placeholder={'Email'}
                                                containerStyle={{
                                                    borderBottomColor: 'rgba(0, 0, 0, 0.38)',
                                                }}
                                                ref='email'
                                                onSubmitEditing={(event) => {
                                                    this.refs.phone.focus();
                                                }}
                                                onChangeText={email => this.setState({ email })}

                                            />
                                            {
                                                isEmailValid ? <Text></Text> : <Text style={{ justifyContent: 'flex-start', color: "red" }}>Please enter a valid email address</Text>
                                            }

                                            <Input
                                                value={phonenumber}
                                                secureTextEntry={false}
                                                keyboardAppearance="light"
                                                autoCapitalize="none"
                                                autoCorrect={false}
                                                keyboardType="numeric"
                                                returnKeyType="next"
                                                blurOnSubmit={true}
                                                containerStyle={{
                                                    marginTop: 16,
                                                    borderBottomColor: 'rgba(0, 0, 0, 0.38)',
                                                }}
                                                inputStyle={{ marginLeft: 10 }}
                                                placeholder={'Phone number'}
                                                ref="phone"
                                                onSubmitEditing={(event) => {
                                                    this.refs.password.focus();
                                                }}
                                                onChangeText={phonenumber => this.setState({ phonenumber })}
                                            />
                                            {
                                                this.state.validphone ? <Text></Text> : <Text style={{ justifyContent: 'flex-start', color: "red" }}>Please enter phoneNumber</Text>
                                            }
                                            <Input
                                                value={password}
                                                keyboardAppearance="light"
                                                autoCapitalize="none"
                                                autoCorrect={false}
                                                secureTextEntry={true}
                                                returnKeyType={isSignUpPage ? 'next' : 'done'}
                                                blurOnSubmit={true}
                                                containerStyle={{
                                                    marginTop: 16,
                                                    borderBottomColor: 'rgba(0, 0, 0, 0.38)',
                                                }}
                                                inputStyle={{ marginLeft: 10 }}
                                                placeholder={'Password'}
                                                ref="password"
                                                onSubmitEditing={this.signUp
                                                    // () =>
                                                    // isSignUpPage
                                                    //   ? this.confirmationInput.focus()
                                                    //   : this.login()
                                                }
                                                onChangeText={password => this.setState({ password })}

                                            />
                                            {
                                                isPasswordValid ? <Text></Text> : <Text style={{ justifyContent: 'flex-start', left: 0, color: "red" }}>Please enter a valid email address</Text>
                                            }

                                        </View>
                                    )}






                                    {isLoginPage && (
                                        <View style={styles.formsignup2}>
                                            <Input

                                                value={email}
                                                keyboardAppearance="light"
                                                autoFocus={false}
                                                autoCapitalize="none"
                                                autoCorrect={false}
                                                keyboardType="email-address"
                                                returnKeyType="next"
                                                inputStyle={{ marginLeft: 10 }}
                                                placeholder={'Email'}
                                                containerStyle={{
                                                    borderBottomColor: 'rgba(0, 0, 0, 0.38)',
                                                }}
                                                ref={input => (this.emailInput = input)}
                                                onSubmitEditing={() => this.passwordInput.focus()}
                                                onChangeText={email => this.setState({ email })}
                                                errorMessage={
                                                    isEmailValid ? null : 'Please enter a valid email address'
                                                }
                                            />


                                            <Input
                                                value={password}
                                                keyboardAppearance="light"
                                                autoCapitalize="none"
                                                autoCorrect={false}
                                                secureTextEntry={true}
                                                returnKeyType={isSignUpPage ? 'next' : 'done'}
                                                blurOnSubmit={true}
                                                containerStyle={{
                                                    marginTop: 16,
                                                    borderBottomColor: 'rgba(0, 0, 0, 0.38)',
                                                }}
                                                inputStyle={{ marginLeft: 10 }}
                                                placeholder={'Password'}
                                                ref={input => (this.passwordInput = input)}
                                                onSubmitEditing={() =>
                                                    isSignUpPage
                                                        ? this.confirmationInput.focus()
                                                        : this.login()
                                                }
                                                onChangeText={password => this.setState({ password })}
                                                errorMessage={
                                                    isPasswordValid
                                                        ? null
                                                        : 'Please enter at least 8 characters'
                                                }
                                            />

                                            <Text style={{ color: '#314E99', paddingTop: 5, alignSelf: 'flex-end', paddingRight: 5, }}
                                                //details is forgotpage in navigation
                                                onPress={() => {
                                                   

                                                    this.props.navigation.navigate("Details")
                                                }}>
                                                Forgot Passsword ?
   </Text>




                                        </View>
                                    )}










                                    <Button
                                        buttonStyle={styles.loginButton}
                                        containerStyle={{ marginTop: 15, flex: 0 }}
                                        activeOpacity={0.8}
                                        title={isLoginPage ? 'LOGIN' : 'SIGN UP'}
                                        onPress={isLoginPage ? this.login : this.signUp}
                                        titleStyle={styles.loginTextButton}
                                        loading={isLoading}
                                        disabled={isLoading}
                                    />
                               {/* fb and google button  */}
                                    <View style={{ alignItems: 'center', paddingTop: 10 }}>
                                        <View style={{ paddingBottom: 5 }}>
                                            <Icon.Button
                                                name="facebook"
                                                backgroundColor="#3b5998"
                                                onPress={this._fblogin}
                                                {...iconStyles}
                                            >
                                                Login with Facebook
                    </Icon.Button>
                                        </View>
                                        <View style={{ paddingTop: 5 ,marginBottom:5}}>
                                            <Icon.Button
                                                name="google"
                                                backgroundColor="#DD4B39"
                                                onPress={this._signIn}
                                                {...iconStyles}
                                            >
                                                Login with Google
                     </Icon.Button>
                                        </View>
                                    </View>

                                </View>
                            </KeyboardAvoidingView>
                        </ScrollView>


                        {/* <View style={{ alignItems: 'center' }}>
              <LoginButton
                publishPermissions={["publish_actions"]}
                onLoginFinished={
                  (error, result) => {
                    if (error) {
                      console.log("login has error: " + result.error);
                    } else if (result.isCancelled) {
                      console.log("login is cancelled.");
                    } else {
                      AccessToken.getCurrentAccessToken().then(
                        (data) => {
                          const infoRequest = new GraphRequest(
                            '/me?fields=name,first_name,last_name,email',
                            null,
                            //Create response callback.
                            _responseInfoCallback = (error, result) => {
                              if (error) {
                                console.log('Error fetching data: ' + error.toString());
                              } else {
                                // console.log('Result Name: ' + result.name);
                                // console.log('result', result);
                                this.setState({ firstname: result.first_name, lastname: result.last_name, email: result.email });

                                this.postSocialMediaData();

                              }
                            }
                          );
                          // Start the graph request.
                          new GraphRequestManager().addRequest(infoRequest).start();
                        }
                      )
                    }
                  }
                }
                onLogoutFinished={() => console.log("logout.")} />


              <GoogleSigninButton
                style={{ width: 198, height: 35 }}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={this._signIn}
              />
            </View> */}
                    </View>
                </ImageBackground>

                <Toast
                    ref="toast"
                    style={{ backgroundColor: this.state.color }}
                    position='top'
                    positionValue={200}
                    fadeInDuration={750}
                    fadeOutDuration={1000}
                    opacity={0.8}
                    textStyle={{ color: 'white' }}
                />

            </View>



        );
    }
    postSocialMediaData() {
        global.data = {
            "firstName": this.state.firstname,
            "lastName": this.state.lastname,
            "emailId": this.state.email
        };
        const self = this;
        const config = {
            url: 'http://69.55.49.121:3001/v1/mobile-users/social-media-user',

            data: global.data,
            method: 'post'
        }
        console.log(config);

        axios(config).then((response) => {
            //this.props.navigation.navigate("LoginPage" )
            //this.props.navigation.navigate("LoginPage" )
            let obj = {
                "firstName": response.data.result.firstName,
                "lastName": response.data.result.lastName,
                "emailId": response.data.result.emailId,
                "phoneNumber": ""
            }
            AsyncStorage.setItem('user', JSON.stringify(obj));






            global.Accesstoken = response.data.result.access_token;
            console.log("sending this data", global.data);
            console.log('success', response.data.result);
            this.props.navigation.navigate("Afford");


            console.log('successully posted user details');

        }).catch((error) => {
            this.refs.toast.show(error.response.data.result.error_message.error, 5000);

            console.log(error);
        });

    }
}


////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////forgot password pagee ///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////

class Forgotpassword extends React.Component {
    constructor(props) {

        super(props);

        this.state = {
            color: "red",
            email: '',
            otp: '',
            password: '',
            status: false,

        };
        // this.selectCategory = this.selectCategory.bind(this);
        // this.forgotpasssword = this.forgotpasssword.bind(this);
    }
    rundelay = (x) => {
        setTimeout(() => x(), 3000)
    }

    validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    }

    ShowHideTextComponentView = () => {
        console.log(this.state.email);

        if (this.state.email == '') {
            this.refs.toast.show('enter email id ', 2000);


        } else {
            if (this.state.status == false) {
                if (this.state.otp == '' && this.state.password == '') {
                    this.forgotpasssword();
                }
            }
            if (this.state.otp != '' && this.state.password != '') {
                this.resetPassword();
            }



        }
    }


    forgotpasssword() {
        console.log('hi');

        var data = {
            "emailId": this.state.email

        }

        const self = this;
        const config = {
            url: 'http://69.55.49.121:3001/v1/mobile-users/forgot-password',
            data: data,
            method: 'post'

        };

        axios(config).then((response) => {
            //this.props.navigation.navigate("Googlefblogin" )
            this.setState({ status: true })
            this.setState({ color: "green" });

            this.refs.toast.show('successfully sent email', 2000);

            console.log('successfully sent email');


        }).catch((error) => {
            this.setState({ status: false });
            this.refs.toast.show(error.response.data.result.error_message.error, 2000);

            console.log(error);
        })

    }
    nav() {
        this.props.navigation.navigate("Home");
    }
    resetPassword() {
        const { email, password } = this.state;




        var data = {
            "emailId": this.state.email,
            "otp": this.state.otp,
            "password": this.state.password

        }

        const self = this;
        const config = {
            url: 'http://69.55.49.121:3001/v1/mobile-users/reset-password',
            data: data,
            method: 'post'

        };

        axios(config).then((response) => {
            //this.props.navigation.navigate("Googlefblogin" )
            this.setState({ color: "green" });
            this.refs.toast.show('successfully Password Changed try login again', 10000);

            console.log('successfully Password Changed');
            this.rundelay(this.nav.bind(this))




        }).catch((error) => {
            this.refs.toast.show(error.response.data.result.error_message.error, 2000);

            console.log(error);
        })

    }



    render() {
        return (

            <View style={{ flex: 1, marginTop: 30 }}>
                <ImageBackground source={BG_IMAGE} style={styles.bgImage}>
                    <View style={{ alignItems: 'center', marginTop: '10%', backgroundColor: 'white', height: '45%', borderRadius: 10, justifyContent: 'flex-start' }}>
                        <View style={styles.formsignup2}>

                            <Input

                                keyboardAppearance="light"
                                autoFocus={false}
                                autoCapitalize="none"
                                value={this.email}
                                onChangeText={email => this.setState({ email })}
                                autoCorrect={false}
                                keyboardType="email-address" s
                                returnKeyType="next"
                                inputStyle={{ marginLeft: 10 }}
                                placeholder={'Email'}
                                containerStyle={{
                                    borderBottomColor: 'rgba(0, 0, 0, 0.38)'
                                }}
                            />
                        </View>
                        {
                            this.state.status ? (
                                <View style={styles.formsignup3}>

                                    <Input

                                        secureTextEntry={false}
                                        keyboardAppearance="light"
                                        autoCapitalize="none"
                                        autoCorrect={false}
                                        value={this.otp}
                                        onChangeText={otp => this.setState({ otp })}
                                        keyboardType="numeric"
                                        returnKeyType={'done'}
                                        blurOnSubmit={true}
                                        placeholder={'Verification Code'}
                                        containerStyle={{
                                            marginTop: 16,
                                            borderBottomColor: 'rgba(0, 0, 0, 0.38)',
                                        }}

                                    />
                                    {/* <OtpInputs handleChange={code => console.log(code)} numberOfInputs={6} /> */}


                                    <Input
                                        keyboardAppearance="light"
                                        autoFocus={false}
                                        autoCapitalize="none"
                                        autoCorrect={false}
                                        value={this.password}
                                        onChangeText={password => this.setState({ password })}
                                        keyboardType="email-address" s
                                        returnKeyType="next"
                                        inputStyle={{ marginLeft: 10 }}
                                        placeholder={' New Password'}
                                        containerStyle={{
                                            borderBottomColor: 'rgba(0, 0, 0, 0.38)',
                                        }}
                                    />
                                </View>

                            ) : null
                        }
                        <View style={{ marginBottom: '10%' }}></View>
                        <View style={{ flexDirection: 'row' }}>
                            <Button

                                buttonStyle={styles.submitbutton}
                                type="clear"
                                containerStyle={{ marginTop: 15, flex: 0 }}
                                activeOpacity={0.8}

                                activeOpacity={0.7}
                                // onPress={() => this.selectCategory(1)}
                                onPress={this.ShowHideTextComponentView}

                                titleStyle={[
                                    styles.loginTextButton,
                                ]}
                                title={'Submit'}
                            />
                            <Button
                                buttonStyle={styles.submitbutton2}
                                type="clear"
                                containerStyle={{ marginTop: 15, flex: 0 }}
                                activeOpacity={0.8}

                                activeOpacity={0.7}
                                // onPress={() => this.selectCategory(1)}
                                onPress={() => this.props.navigation.navigate("Home")}

                                titleStyle={[
                                    styles.loginTextButton,
                                ]}
                                title={'Back'}
                            />
                        </View>
                        <Toast
                            ref="toast"
                            style={{ backgroundColor: this.state.color }}
                            position='top'
                            positionValue={200}
                            fadeInDuration={750}
                            fadeOutDuration={1000}
                            opacity={0.8}
                            textStyle={{ color: 'white' }}
                        />
                    </View>
                </ImageBackground>
            </View>
        );
    }
}
const iconStyles = {
    justifyContent: "center",
    borderRadius: 10,
    width: 200,

};

const AppNavigator = createStackNavigator({
    Home: {
        screen: Loginpage,
    },
    Details: {
        screen: Forgotpassword,
    },

}, {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    });
const Page = createAppContainer(AppNavigator);
export default Page;


const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        flex: 1,
        fontFamily: 'open sans',

    },
    rowSelector: {
        height: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    selectorContainer: {
        flex: 1,
        alignItems: 'center',
    },
    selected: {
        position: 'absolute',
        borderRadius: 50,
        height: 0,
        width: 0,
        top: -5,
        borderRightWidth: 60,
        borderBottomWidth: 60,
        borderColor: 'white',
        backgroundColor: 'white',
    },
    loginContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginTextButton: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
    },
    loginButton: {
        backgroundColor: '#3FB149',
        borderRadius: 10,
        height: 50,
        width: 200,
    },
    formsignup3: {
        backgroundColor: 'white',
        width: SCREEN_WIDTH - 30,
        borderRadius: 10,
        // paddingTop: 20,
        alignItems: 'center',


    },

    submitbutton: {
        backgroundColor: '#3FB149',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        height: 45,
        width: 150,
        marginRight: 5
        // marginTop:'10%',
    },
    submitbutton2: {
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        height: 50,
        width: 150,

        // marginTop:'10%',
    },
    titleContainer: {
        height: 150,
        backgroundColor: 'transparent',
        justifyContent: 'center',
    },
    formContainer: {
        backgroundColor: 'white',
        width: SCREEN_WIDTH - 30,
        borderRadius: 10,

        // paddingBottom: 32,
        alignItems: 'center',
    },
    formsignup: {
        backgroundColor: 'white',
        width: SCREEN_WIDTH - 30,
        borderRadius: 10,
        paddingBottom: 8,
        alignItems: 'flex-start',
    },
    //// login form css
    formsignup2: {
        backgroundColor: 'white',
        width: SCREEN_WIDTH - 30,
        borderRadius: 10,
        paddingTop: 20,
        alignItems: 'center',


    },
    loginText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
    bgImage: {
        flex: 1,
        top: 0,
        left: 0,
        backgroundColor: 'white',
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center',
    },




    categoryText: {
        textAlign: 'center',
        color: '#314E99',
        fontSize: 30,
        // fontFamily: 'open sans',
        fontWeight: 'bold',
        backgroundColor: 'transparent',
        // opacity: 0.54,
    },
    selectedCategoryText: {
        color: '#559D63',
    },
    submittext: {
        alignSelf: 'center',
        textAlign: 'center',
        color: 'white',
        fontSize: 25,
        paddingTop: 6,
        // fontFamily: 'open sans',
    },
    titleText: {
        color: 'white',
        fontSize: 30,
        // fontFamily: 'open sans',
    },

});