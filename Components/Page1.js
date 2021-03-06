import React from 'react';
import { View, Image, TextInput, TouchableOpacity, Alert, Animated, ActivityIndicator, BackHandler } from 'react-native';
import Display from 'react-native-display';
import MarkSlider from 'react-native-mark-slider';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styled from 'styled-components';
import {
  Button,
  Text,
  Fonts,
  Container,
  Header,
  Content,
  Footer,

} from "native-base";
import Toast, { DURATION } from 'react-native-easy-toast'

import { Dropdown } from 'react-native-material-dropdown'; // 0.7.2
import Modal from "react-native-modal";
import Slider from 'react-native-slider';
import axios from 'axios';
import styles from '../css/afford';
import { Dimensions, StatusBar, Platform } from 'react-native';
import CDD from './CustomDropdown';
import { DrawerActions } from 'react-navigation';
import DrawerNavigation from './DrawerNavigation';
var deviceHeight = Platform.OS === 'android' ? Dimensions.get('screen').height - StatusBar.currentHeight : Dimensions.get('window').height;
var width = Platform.OS === 'android' ? Dimensions.get('screen').width : Dimensions.get('window').width;

export default class Page1 extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    // headerTitle: <NavigationDrawerStructure navigationProps={navigation} />
    header: null
  })
  constructor(props) {
    super(props);
    global.c1 = 0
    global.c2 = 0
    // global.c3=0
    this.state = {
      //quesetions being fetched from server
      //ques label is for questions
      //text label is for options for that question
      formstyle1: styles.password,
      formstyle2: styles.password,
      formstyle3: styles.password,
      formstyle4: styles.password,
      formstyle5: styles.password,
      formstyle6: styles.password,
      formstyle7: styles.password,
      formstyle8: styles.password,

      nxt_btn1: false,
      nxt_btn2: false,
      nxt_btn3: false,
      nxt_btn4: false,
      nxt_btn5: false,
      nxt_btn6: false,
      nxt_btn7: false,
      nxt_btn8: false,
      nxt_btn9: false,
      nxt_btn10: false,
      nxt_btn11: false,
      nxt_btn12: false,
      nxt_btn13: false,
      nxt_btn14: false,
      nxt_btn15: false,
      nxt_btn16: false,
      yes1: "#ECE9E9",
      yes2: "#ECE9E9",
      yes3: "#ECE9E9",
      no1: "#ECE9E9",
      no2: "#ECE9E9",
      no3: "#ECE9E9",
      yesno1: "#ECE9E9",
      yesno2: "#ECE9E9",
      yesno3: "#ECE9E9",
      yesno4: "#ECE9E9",
      yesno5: "#ECE9E9",
      yesno6: "#ECE9E9",
      yesno7: "#ECE9E9",
      yesno8: "#ECE9E9",
      yesno9: "#ECE9E9",
      yesno10: "#ECE9E9",
      yesno11: "#ECE9E9",
      yesno12: "#ECE9E9",
      yesno13: "#ECE9E9",
      yesno14: "#ECE9E9",
      yesno15: "#ECE9E9",
      yesno16: "#ECE9E9",
      //question1
      ques1_ques: "",
      ques1_text1: "",
      ques1_text2: "",
      yesnoques0: "",
      yesnoques1: "",
      yesnoques2: "",
      yesnoques3: "",
      yesnoques4: "",
      yesnoques5: "",
      yesnoques6: "",
      yesnoques7: "",
      yesnoques0text1: "",
      yesnoques1text1: "",
      yesnoques2text1: "",
      yesnoques3text1: "",
      yesnoques4text1: "",
      yesnoques5text1: "",
      yesnoques6text1: "",
      yesnoques7text1: "",
      yesnoques0text2: "",
      yesnoques1text2: "",
      yesnoques2text2: "",
      yesnoques3text2: "",
      yesnoques4text2: "",
      yesnoques5text2: "",
      yesnoques6text2: "",
      yesnoques7text2: "",
      //question2
      ques2_ques: "",
      ques2_text1: "",
      ques2_text2: "",
      ques2_text3: "",
      ques2_text4: "",
      //question3
      ques3_ques: "",
      ques3_text1: "",
      ques3_text2: "",
      ques3_text3: "",
      ques3_text4: "",
      isSubmitting: true,
      //question4
      ques4_ques: "",
      //question5
      ques5_ques: "",
      //question6
      ques6_ques: "",
      //question7
      ques7_ques: "",

      //question8
      ques8_ques: "",
      ques8_text1: "",
      ques8_text2: "",

      //question9
      ques9_ques: "",

      //question10
      ques10_ques: "",
      ques10_text1: "",
      ques10_text2: "",

      //question11
      ques11_ques: "",

      //question12
      ques12_ques: "",
      ques12_text1: "",
      ques12_text2: "",

      //question13
      ques13_ques: "",
      ques13_text1: "",
      ques13_text2: "",
      ques13_text3: "",
      ques13_text4: "",

      //question14
      ques14_ques: "",
      ques14_text1: "",
      ques14_text2: "",
      ques14_text3: "",
      ques14_text4: "",

      //validation for proper names

      validcity: false,
      validfname: (global.data.firstName) ? true : false,
      validlname: (global.data.lastName) ? true : false,
      validZipCode: false, //! valid zipcode is not functioning as of now, need to implement the checkzip function with client api and then get back to this
      //errormessages

      //error message for question 1
      errorvalue: "",
      //error message for question 2
      errorvalue1: "",
      //error message for question 3
      errorvalue2: "",
      //error message for question 8
      errorvalue3: "",
      //error message for question 9
      errorvalue4: "",
      //error message for question 10
      errorvalue5: "",
      //error message for question 11
      errorvalue6: "",
      //error message for question 12
      errorvalue7: "",
      //error message for question 13
      errorvalue8: "",
      errorvalue9: "",
      stateerrorvalue8: "",
      cityerrorvalue: "",
      //error message for question 14
      errorvalue10: "",
      errorvalue11: "",
      errorvalue13: "",
      errorvalue21: "",
      //error message
      errorvalue12: "",
      //called by a function, need to write a proper comment for these
      //are stored are data variable
      payCarInsurance_data: "",
      fastAndEasyFindout_data: "",
      buyingHouse: "",
      creditReportFirst: "",
      haveKids: "",
      familyProtection: "",
      haveMortgage: "",
      hugeSavings: "",
      loanType_data: "",
      propertyType_data: "",
      credit_data: "",
      propertyValue_data: "",
      mortageBal_data: "",
      currIntRate_data: "",
      downPayament_data: "",
      bankrupt_data: "No",
      desireLoanType_data: "",
      isVeteran_data: "No",
      borrowAddCash_data: "No",
      address_data: "",
      city_data: "",
      zip_data: "",
      fName_data: "",
      lName_data: "",
      email_data: "",
      phoneNumber_data: "",
      mortageRates_data: "",
      //back button , next button and submit button
      enable_back: false,
      enable_next: false,
      enable_submit: false,
      index: "1a",
      privacy_enable: false,
      value: 75000,
      value2: 75000,
      mortage_value: 50000,
      mortage_value2: 50000,
      current_interest_value: 75.5,
      current_interest_value2: 75.5,
      down_payment_value: 15.0,
      down_payment_value2: 15.0,
      mainModal: false,
      isReady: false,
      loan_type: "",
      mortage_late: "",
      address: "",
      city: "",
      zip: "",
      property: "",
      fname: global.data.firstName,
      lname: global.data.lastName,
      phone: (global.data.phoneNumber) ? global.data.phoneNumber : "",
      email: global.data.emailId,
      submitting: false,
      showimage1: false,
      showimage2: false,
      showimage3: false,
      showimage4: false,
      showimage5: false,
      showimage6: false,
      showimage7: false,
      showimage8: false,
      showimage9: false,
      showimage10: false,
      showimage11: false,
      showimage12: false,
      showimage13: false,
      showimage14: false,
      showimage15: false,
      showimage16: false
    };
  }
  onFocus1() {
    this.setState({ formstyle1: styles.password2 })
  }
  onBlur1() {
    this.setState({ formstyle1: styles.password })
  }
  onFocus2() {
    this.setState({ formstyle2: styles.password2 })
  }
  onBlur8() {
    this.setState({ formstyle8: styles.password })
  }
  onFocus8() {
    this.setState({ formstyle8: styles.password2 })
  }
  onBlur2() {
    this.setState({ formstyle2: styles.password })
  }
  onFocus3() {
    this.setState({ formstyle3: styles.password2 })
  }
  onBlur3() {
    this.setState({ formstyle3: styles.password })
  }
  onFocus4() {
    this.setState({ formstyle4: styles.password2 })
  }
  onBlur4() {
    this.setState({ formstyle4: styles.password })
  }
  onFocus5() {
    this.setState({ formstyle5: styles.password2 })
  }
  onBlur5() {
    // console.log(styles.password)
    this.setState({ formstyle5: styles.password })
    // console.log("state", this.state.formstyle)
  }
  onFocus6() {
    // console.log(styles.password2)
    this.setState({ formstyle6: styles.password2 })
    // console.log("state", this.state.formstyle)
  }
  onBlur6() {
    // console.log(styles.password)
    this.setState({ formstyle6: styles.password })
    // console.log("state", this.state.formstyle)
  }
  onFocus7() {
    // console.log(styles.password2)
    this.setState({ formstyle7: styles.password2 })
    // console.log("state", this.state.formstyle)
  }
  onBlur7() {
    // console.log(styles.password)
    this.setState({ formstyle7: styles.password })
    // console.log("state", this.state.formstyle)
  }
  Terms() {
    this.props.navigation.navigate("Terms")
  }
  Privacy() {
    this.setState({
      privacy_enable: true
    })
  }
  change(value) {
    // console.log("inside change func", value)
    this.setState({
      value: parseFloat(value),
      propertyValue_data: value
    });
  }
  checkValidCity(str) {
    let res = this.checkString(str);
    // console.log(res);
    if (res == false) {
      this.setState({
        cityerrorvalue: "Please Enter Valid City Name",
        validcity: res,
      });
    }
    else {
      this.setState({
        cityerrorvalue: "",
        validcity: res,
      });
    }
  }
  checkValidfname(str) {
    let res = this.checkString(str);
    // console.log(res);
    if (res == false) {
      this.setState({
        errorvalue10: "Please Enter a Valid Name",
        validfname: res,
      });
    }
    else {
      this.setState({
        errorvalue10: "",
        validfname: res,
      });
    }
  }
  checkValidlname(str) {
    let res = this.checkString(str);
    // console.log(res);
    if (res == false) {
      this.setState({
        errorvalue11: "Please Enter a Valid Name",
        validlname: res,
      });
    }
    else {
      this.setState({
        errorvalue11: "",
        validlname: res,
      });
    }
  }
  checkString(str) {
    var regex = new RegExp("^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$");

    if (regex.test(str)) {
      return true;
    }

    return false;
  }
  Mortage(value) {
    // console.log("inside mortage func", value)
    this.setState({
      mortage_value: parseFloat(value),
      mortageBal_data: value
    });
  }
  CurrentInterest(value) {
    // console.log("inside currentinterest func", value)
    this.setState({
      current_interest_value: value,
      currIntRate_data: value
    });
  }
  DownPayment(value) {
    // console.log("inside downpayment func", value)
    this.setState({
      down_payment_value: value,
      downPayament_data: value
    });
  }
  SubmitButton() {
    console.log("submit button is clicked , first log")
    this.props.screenProps.CheckConnectivity();
    if (!this.state.email.includes("@") || !this.state.email.includes(".")) {
      this.setState({
        errorvalue21: "Enter valid Email.",

        //index:0,
        //enable_back:false
      })
    }
    if (this.state.index == 13 && !this.state.fname) {
      this.setState({
        errorvalue10: "Please enter the First name.",
        //index:0,
        //enable_back:false
      })
    }
    if (this.state.index == 13 && this.state.validfname == false) {
      this.setState({
        errorvalue10: "Please Enter a Valid Name",
        //index:0,
        //enable_back:false
      })
    }
    if (this.state.index == 13 && !this.state.lname) {
      this.setState({
        errorvalue11: "Please enter the Last name.",
        //index:0,
        //enable_back:false
      })
    }
    if (this.state.index == 13 && this.state.validlname == false) {
      this.setState({
        errorvalue11: "Please Enter a Valid Name",
        //index:0,
        //enable_back:false
      })
    }
    if (this.state.index == 13 && !this.state.email.includes("@") && !this.state.email.includes(".")) {
      this.setState({
        errorvalue12: "This field is required.",
        //index:0,
        //enable_back:false
      })
    }
    if (this.state.index == 13 && !this.state.phone) {
      this.setState({
        errorvalue13: "Please enter the phone number.",
        //index:0,
        //enable_back:false
      })
    }
    if (this.state.index == 13 && (this.state.fname && this.state.validfname && this.state.lname && this.state.validlname && this.state.email.includes("@") && this.state.email.includes(".") && this.state.phone)) {
      this.setState({
        errorvalue10: "",
        errorvalue11: "",
        errorvalue12: "",
        errorvalue13: "",

        //  index:13,
        //  enable_next: false,
        enable_submit: true
      })
      console.log('submit is clicked , second log')
      var data = {
        "payCarInsurance": this.state.payCarInsurance_data,
        "fastAndEasyFindout": this.state.fastAndEasyFindout_data,
        "buyingHouse": this.state.buyingHouse,
        "creditReportFirst": this.state.creditReportFirst,
        "haveKids": this.state.haveKids,
        "familyProtection": this.state.familyProtection,
        "haveMortgage": this.state.haveMortgage,
        "hugeSavings": this.state.hugeSavings,
        "loanType": this.state.loanType_data,
        "propertyType": this.state.propertyType_data,
        "credit": this.state.credit_data,
        "propertyValue": this.state.propertyValue_data,
        "mortageBalance": this.state.mortageBal_data,
        "currentInterestRate": this.state.currIntRate_data,
        "downPayament": this.state.downPayament_data,
        "bankruptcy": this.state.bankrupt_data,
        "desireLoanType": this.state.desireLoanType_data,
        "isVeteran": this.state.isVeteran_data,
        "mortageRates": this.state.mortageRates_data,
        "borrowAddCash": this.state.borrowAddCash_data,
        "propertyInfo": {
          "address": this.state.address_data,
          "city": this.state.city_data,
          "zip": this.state.zip_data,
          "state": this.state.property
        },

        "firstName": (global.data.firstName) ? global.data.firstName : this.state.fName_data,
        "lastName": (global.data.lastName) ? global.data.lastName : this.state.lName_data,
        "emailId": (global.data.emailId) ? global.data.emailId : this.state.email_data,
        "phoneNumber": (global.data.phoneNumber) ? global.data.phoneNumber : this.state.phoneNumber_data
      }
      console.log(data);
      const self = this;
      const config = {
        url: 'http://69.55.49.121:3001/v1/userTemplates/register',


        data: data,
        method: 'post',

      };
      this.setState({ isReady: false, isSubmitting: true });
      console.log('submit is pressed , 3rd log ')
      // console.log(this.state.city_data, this.state.property, this.state.address_data)
      axios(config).then((response) => {
        this.props.navigation.navigate("Submit")
        console.log(response);
        this.setState({
          submitting: true,
          index: '1a',
          enable_back: false,
          enable_next: false,
          enable_submit: false,
          showimage1: false,
          nxt_btn1: false,
          nxt_btn2: false,
          nxt_btn3: false,
          nxt_btn4: false,
          nxt_btn5: false,
          nxt_btn6: false,
          nxt_btn7: false,
          nxt_btn8: false,
          nxt_btn9: false,
          nxt_btn10: false,
          nxt_btn11: false,
          nxt_btn12: false,
          nxt_btn13: false,
          nxt_btn14: false,
          nxt_btn15: false,
          nxt_btn16: false,
          showimage2: false,
          showimage3: false,
          showimage4: false,
          showimage5: false,
          showimage6: false,
          showimage7: false,
          showimage8: false,
          showimage9: false,
          showimage10: false,
          showimage11: false,
          showimage12: false,
          showimage13: false,
          showimage14: false,
          showimage15: false,
          showimage16: false,
          value: 75000,
          value2: 75000,
          mortage_value: 50000,
          mortage_value2: 50000,
          current_interest_value: 75.50,
          down_payment_value: 15.00,
          current_interest_value2: 75.5,
          down_payment_value2: 15.0,
          bankrupt_data: "No",
          loan_type: '',
          mortage_late: '',
          // value2: 75000,
          // mortage_value2: 50000,
          // mainModal:false,
          // isReady: false,
          address: '',
          // yes1: "green",
          // yes2: "green",
          // yes3: "green",
          // no1: "red",
          // no2: "red",
          // no3: "red",

          yes1: "#ECE9E9",
          yes2: "#ECE9E9",
          yes3: "#ECE9E9",
          no1: "#ECE9E9",
          no2: "#ECE9E9",
          no3: "#ECE9E9",
          yesno1: "#ECE9E9",
          yesno2: "#ECE9E9",
          yesno3: "#ECE9E9",
          yesno4: "#ECE9E9",
          yesno5: "#ECE9E9",
          yesno6: "#ECE9E9",
          yesno7: "#ECE9E9",
          yesno8: "#ECE9E9",
          yesno9: "#ECE9E9",
          yesno10: "#ECE9E9",
          yesno11: "#ECE9E9",
          yesno12: "#ECE9E9",
          yesno13: "#ECE9E9",
          yesno14: "#ECE9E9",
          yesno15: "#ECE9E9",
          yesno16: "#ECE9E9",
          city: '',
          zip: '',
          property: '',
          fname: "",
          lname: "",
          phone: "",
          email: "",

          errorvalue: "",
          errorvalue1: "",
          errorvalue2: "",
          errorvalue3: "",
          errorvalue4: "",
          errorvalue5: "",
          errorvalue6: "",
          errorvalue7: "",
          errorvalue8: "",
          errorvalue21: "",
          stateerrorvalue8: "",
          cityerrorvalue: "",
          errorvalue9: "",
          errorvalue10: "",
          errorvalue11: "",
          errorvalue12: "",
          errorvalue13: "",
          validcity: false,
          validfname: false,
          validlname: false,
          validZipCode: false,
        });
      }).catch((error) => {
        Alert.alert("you already submitted the details");
        this.refs.toast.show(error.response.data.result.error_message.error, 5000);

        console.log(error.response.data.result.error_message.error);
      })
      // fetch('http://69.55.49.121:3001/v1/userTemplates/register', {
      //   method: 'POST', // *GET, POST, PUT, DELETE, etc.
      //   // mode: 'cors', // no-cors, cors, *same-origin
      //   // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      //   // credentials: 'same-origin', // include, *same-origin, omit
      //   headers: {
      //     'Content-Type': 'application/json',
      //     // 'Content-Type': 'application/x-www-form-urlencoded',
      //   },
      //   // redirect: 'follow', // manual, *follow, error
      //   // referrer: 'no-referrer', // no-referrer, *client
      //   body:data, // body data type must match "Content-Type" header
      // })
      //   .then(response => console.log(response))
      //   .catch((error) => {
      //     console.log(error);
      //   });

      setTimeout(() => {
        this.setState({ isReady: true, isSubmitting: false, submitting: false })

      }, 8000);

    }
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }
  onBackPress = () => {

    //Code to display alert message when use click on android device back button.
    Alert.alert(
      ' Exit From App ',
      ' Do you want to exit From App ?',
      [
        { text: 'Yes', onPress: () => BackHandler.exitApp() },
        { text: 'No', onPress: () => console.log('NO Pressed') }
      ],
      { cancelable: false },
    );

    // Return true to enable back button over ride.
    return true;
  }
  Dismiss() {
    this.setState({ mainModal: !this.state.mainModal });
  }
  async componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);

    this.setState({ isReady: false });
  }
  PrivacyPolicy() {
    this.props.navigation.navigate("Privacy")

  }
  changeMortageLates(value) {
    this.setState({
      mortage_late: value
    })
  }
  Address(text) {
    this.setState({
      address: text,
      address_data: text.toString()
    })
  }
  City(text) {
    this.checkValidCity(text);
    this.setState({
      city: text,
      city_data: text.toString()
    })
  }
  Property(text) {
    this.setState({
      property: text
    })
  }
  Zip(text) {
    let len = 0;
    if ((text.toString().length) == 5) {
      len = 5;
    }
    if (len == 5) {
      this.checkZip(text)
      if (this.state.validZipCode) {
        this.setState({
          zip: text,
          zip_data: text.toString(),
          errorvalue9: ""
        })
      }
      else {
        this.setState({
          zip: text,
          zip_data: text.toString(),
          errorvalue9: "Invalid ZipCode"
        })
      }
    }
    else {
      this.setState({
        zip: text,
        zip_data: text.toString(),
        errorvalue9: "Invalid! a zipcode must be 5 characters long"
      })
    }
  }
  checkZip = async (zip) => { // * key has to be updated with client's key
    let fetchedData = 0;
    let checkResponse = 0;
    await fetch(`https://maps.googleapis.com/maps/api/geocode/json?components=postal_code:${zip}&key=AIzaSyC-jI6r-CfVn9xwu1YTyqhRDVp9B7RtAMw`)
      .then((resp) => {
        console.log("resp", resp);
        return resp.json();
      })
      .then(response => {
        console.log("check", response.results[0])
        checkResponse = response.results[0];
        return response.results[0];
      }).then(data => {
        fetchedData = (data["address_components"])
        // return data["address_components"]
      })
      .catch((err) => {
        console.log("err", err)
        checkResponse = undefined;
      });
    if (checkResponse == undefined) {
      console.log("ok i am being spooked by the FBI");
      this.setState({ validZipCode: false, errorvalue9: "Invalid ZipCode" })
      console.log(this.state.validZipCode);
    }
    else {
      this.setState({ errorvalue9: "", property: fetchedData[fetchedData.length - 2]["long_name"], validZipCode: true })
      console.log("city", this.state.city,
        "state", this.state.property);
    }
    console.log(fetchedData)
  }
  FName(text) {
    this.checkValidfname(text);
    this.setState({
      fname: text,
      fName_data: text.toString()
    })
  }
  LName(text) {
    this.checkValidlname(text);
    this.setState({
      lname: text,
      lName_data: text.toString()
    })
  }
  Phone(text) {
    this.setState({
      phone: text,
      phoneNumber_data: text
    })
  }
  Email(text) {
    if (!text.includes("@") || !text.includes(".")) {
      this.setState({
        errorvalue21: "Enter valid Email.",

        //index:0,
        //enable_back:false
      })
    }
    else {
      this.setState({
        errorvalue21: "",

        //index:0,
        //enable_back:false
      })
    }
    this.setState({
      email: text,
      email_data: text.toString()
    })

  }
  backButtonQuick() {
    if (this.state.index < 15) {
      this.setState({
        index: this.state.index - 1,
        // enable_next: true,
        enable_back: true,
        enable_submit: false
      });
    }
    if (this.state.index == 0) {
      this.setState({
        index: this.state.index,
        // enable_next: true,
        enable_back: false,
        enable_submit: false
      });
    }
    if (this.state.index == 1) {
      this.setState({
        //index: this.state.index,
        // enable_next: true,
        enable_submit: false,
        enable_back: false
      });
    }
  }
  nextButtonQuick() {

    if (this.state.index < 13) {
      if (this.state.index == 0 && this.state.showimage1 == false && this.state.showimage2 == false) {
        this.setState({
          errorvalue: "Please select an option to continue...",
          //index:0,
          //enable_back:false
        })
      }
      if (this.state.index == 0 && (this.state.showimage1 == true || this.state.showimage2 == true)) {
        this.setState({
          errorvalue: "",
          index: 1,
          enable_back: true
        })
      }
      if (this.state.index == 1 && this.state.showimage3 == false && this.state.showimage4 == false && this.state.showimage5 == false && this.state.showimage6 == false) {
        this.setState({
          errorvalue1: "Please select an option to continue...",
          //index:0,
          // enable_back:true
        })
      }
      if (this.state.index == 1 && (this.state.showimage3 == true || this.state.showimage4 == true || this.state.showimage5 == true || this.state.showimage6 == true)) {
        this.setState({
          errorvalue1: "",
          index: 2
        })
      }
      if (this.state.index == 2 && this.state.showimage7 == false && this.state.showimage8 == false && this.state.showimage9 == false && this.state.showimage10 == false) {
        this.setState({
          errorvalue2: "Please select an option to continue...",
          //index:0,
          // enable_back:true
        })
      }
      if (this.state.index == 2 && (this.state.showimage7 == true || this.state.showimage8 == true || this.state.showimage9 == true || this.state.showimage10 == true)) {
        this.setState({
          errorvalue2: "",
          index: 3
        })
      }
      if (this.state.index == 3 && this.state.value) {
        this.setState({
          propertyValue_data: this.state.value,
          index: 4
        })
      }
      if (this.state.index == 4 && this.state.mortage_value) {
        this.setState({
          mortageBal_data: this.state.mortage_value,
          index: 5
        })
      }
      if (this.state.index == 5 && this.state.current_interest_value) {
        this.setState({
          currIntRate_data: this.state.current_interest_value,
          index: 6
        })
      }
      if (this.state.index == 6 && this.state.down_payment_value) {
        this.setState({
          downPayament_data: this.state.down_payment_value,
          index: 7
        })
      }
      if (this.state.index == 7 && this.state.showimage11 == false && this.state.showimage12 == false) {
        this.setState({
          errorvalue3: "Please select an option to continue...",
          //index:0,
          //enable_back:false
        })
      }
      if (this.state.index == 7 && (this.state.showimage11 == true || this.state.showimage12 == true)) {
        this.setState({
          errorvalue3: "",
          index: 8
        })
      }
      if (this.state.index == 8 && this.state.loan_type) {
        this.setState({
          errorvalue4: "",
          index: 9
        })
      }
      if (this.state.index == 8 && !this.state.loan_type) {
        this.setState({
          errorvalue4: "Please select an option to continue...",

        })
      }
      if (this.state.index == 9 && this.state.showimage13 == false && this.state.showimage14 == false) {
        this.setState({
          errorvalue5: "Please select an option to continue...",
          //index:0,
          //enable_back:false
        })
      }
      if (this.state.index == 9 && (this.state.showimage13 == true || this.state.showimage14 == true)) {
        this.setState({
          errorvalue5: "",
          index: 10
        })
      }
      if (this.state.index == 10 && this.state.mortage_late) {
        this.setState({
          errorvalue6: "",
          index: 11
        })
      }
      if (this.state.index == 10 && !this.state.mortage_late) {
        this.setState({
          errorvalue6: "Please select an option to continue...",

        })
      }
      if (this.state.index == 11 && this.state.showimage15 == false && this.state.showimage16 == false) {
        this.setState({
          errorvalue7: "Please select an option to continue...",
          //index:0,
          //enable_back:false
        })
      }
      if (this.state.index == 11 && (this.state.showimage15 == true || this.state.showimage16 == true)) {
        this.setState({
          errorvalue7: "",
          index: 12
        })
      }
      if (this.state.index == 12 && !this.state.address) {
        this.setState({
          errorvalue8: "Please Enter Your Address",
          //index:0,
          //enable_back:false
        })
      }
      if (this.state.index == 12 && !this.state.property) {
        this.setState({
          stateerrorvalue8: "Please Select Your State",
          //index:0,
          //enable_back:false
        })
      }
      if (this.state.index == 12 && !this.state.city) {
        this.setState({
          cityerrorvalue: "Please Enter Valid City Name",
          //index:0,
          //enable_back:false
        })
      }
      if (this.state.index == 12 && !this.state.zip) {
        this.setState({
          errorvalue9: "Please Enter Your Current Zip Code",
          //index:0,
          //enable_back:false
        })
      }//
      if (this.state.index == 12 && this.state.validZipCode == false && ((this.state.zip).toString().length) < 5) {
        this.setState({
          errorvalue9: "Enter Valid Zip Code",
          //index:0,
          //enable_back:false
        })
      }//
      if (this.state.index == 12 && this.state.validZipCode && (this.state.address && this.state.zip && this.state.validcity && ((this.state.zip.toString().length) < 5) == false)) {
        this.setState({
          errorvalue8: "",
          cityerrorvalue: "",
          errorvalue9: "",
          index: 13,
          enable_next: false,
          enable_submit: true
        })
      }
    }
    if (this.state.index == 1) {
      this.setState({
        // enable_next: true,
        // enable_back: true
      });
    }
  }
  handleChangeRefinance() {
    console.log(this.state.showimage1, this.state.showimage2);
    this.setState({
      showimage1: true,
      showimage2: false,
      loanType_data: "Refinance",
      index: 1,
      enable_back: true
    })
    global.c1 = global.c1 + 1
    if (global.c1 > 1) {
      this.setState({
        showimage3: false,
        showimage4: false,
        showimage5: false,
        showimage6: false,
        showimage7: false,
        showimage8: false,
        showimage9: false,
        showimage10: false
      })
    }
  }
  handleChangePurchase() {
    console.log(this.state.showimage1, this.state.showimage2);
    this.setState({
      showimage2: true,
      showimage1: false,
      loanType_data: "Purchase",
      index: 1,
      enable_back: true
    })
    global.c1 = global.c1 + 1
    if (global.c1 > 1) {
      this.setState({
        showimage3: false,
        showimage4: false,
        showimage5: false,
        showimage6: false,
        showimage7: false,
        showimage8: false,
        showimage9: false,
        showimage10: false
      })
    }

  }
  handleChangeSingle() {
    this.setState({
      showimage3: true,
      showimage4: false,
      showimage5: false,
      showimage6: false,
      propertyType_data: "Single Family",
      index: 2,
      // enable_back:true
    })
    global.c2 = global.c2 + 1
    if (global.c2 > 1) {
      this.setState({
        showimage7: false,
        showimage8: false,
        showimage9: false,
        showimage10: false
      })
    }
  }
  handleChangeMulti() {
    this.setState({
      showimage4: true,
      showimage3: false,
      showimage5: false,
      showimage6: false,
      propertyType_data: "Multi Family",
      index: 2,
      // enable_back:true
    })
    global.c2 = global.c2 + 1
    if (global.c2 > 1) {
      this.setState({
        showimage7: false,
        showimage8: false,
        showimage9: false,
        showimage10: false
      })
    }
  }
  handleChangeCando() {
    this.setState({
      showimage4: false,
      showimage3: false,
      showimage5: true,
      showimage6: false,
      propertyType_data: "Cando Family",
      index: 2,
      // enable_back:true
    })
    global.c2 = global.c2 + 1
    if (global.c2 > 1) {
      this.setState({
        showimage7: false,
        showimage8: false,
        showimage9: false,
        showimage10: false
      })
    }
  }
  handleChangeTownHouse() {
    this.setState({
      showimage4: false,
      showimage3: false,
      showimage5: false,
      showimage6: true,
      propertyType_data: "Townhouse Family",
      index: 2,
      // enable_back:true
    })
    global.c2 = global.c2 + 1
    if (global.c2 > 1) {
      this.setState({
        showimage7: false,
        showimage8: false,
        showimage9: false,
        showimage10: false
      })
    }
  }
  handleChangeExcellent() {
    this.setState({
      showimage8: false,
      showimage9: false,
      showimage10: false,
      showimage7: true,
      credit_data: "Excellent",
      index: 3,
      // enable_back:true
    })
  }
  handleChangeGood() {
    this.setState({
      showimage8: true,
      showimage9: false,
      showimage10: false,
      showimage7: false,
      credit_data: "Good",
      index: 3,
      // enable_back:true
    })
  }
  handleChangeFair() {
    this.setState({
      showimage8: false,
      showimage9: true,
      showimage10: false,
      showimage7: false,
      credit_data: "Fair",
      index: 3,
      // enable_back:true
    })
  }
  handleChangePoor() {
    this.setState({
      showimage8: false,
      showimage9: false,
      showimage10: true,
      showimage7: false,
      credit_data: "Poor",
      index: 3,
      // enable_back:true
    })
  }
  handleChangeBankruptcyYes() {
    this.setState({
      yes1: "green",
      no1: "#ECE9E9",
      bankrupt_data: "Yes",
      showimage11: true,
      index: 8,

    })
  }
  handleChangeBankruptcyNo() {
    this.setState({
      yes1: "#ECE9E9",
      no1: "red",
      bankrupt_data: "No",
      showimage12: true,
      index: 8,

    })
  }
  handleChangeLoanType(value) {
    this.setState({
      loan_type: value,
      index: 9,
      desireLoanType_data: value.toString()
    })
  }
  handleChangeVeteranYes() {
    this.setState({
      yes2: "green",
      no2: "#ECE9E9",
      showimage13: true,
      index: 10,
      isVeteran_data: "Yes"
    })
  }
  rundelay = (x) => {
    setTimeout(() => x(), 300)
  }
  handleChangeVeteranNo() {
    this.setState({
      yes2: "#ECE9E9",
      no2: "red",
      showimage14: true,
      index: 10,
      isVeteran_data: "No"
    })
  }
  handleChangeMortageLates(value) {
    this.setState({
      mortage_late: value,
      mortageRates_data: value.toString(),
      index: 11
    })
  }
  handleChangeBorrowYes() {
    this.setState({
      yes3: "green",
      no3: "#ECE9E9",
      showimage15: true,
      index: 12,
      borrowAddCash_data: "Yes"
    })
  }
  handleChangeBorrowNo() {
    this.setState({
      yes3: "#ECE9E9",
      no3: "red",
      showimage16: true,
      index: 12,
      borrowAddCash_data: "No"
    })
  }


  componentDidMount() {

    const self = this;

    const config = {
      url: "http://69.55.49.121:3001/v1/userTemplates/get-questions-list",

      method: 'post',

    };
    axios(config).then((res) => {

      console.log("test..", res.data.result)
      this.setState({
        ques1_text1: res.data.result[8].Answers[0],
        ques1_text2: res.data.result[8].Answers[1],
        ques1_ques: res.data.result[8].QuestionText,
        yesnoques0: res.data.result[0].QuestionText,
        yesnoques1: res.data.result[1].QuestionText,
        yesnoques2: res.data.result[2].QuestionText,
        yesnoques3: res.data.result[3].QuestionText,
        yesnoques4: res.data.result[4].QuestionText,
        yesnoques5: res.data.result[5].QuestionText,
        yesnoques6: res.data.result[6].QuestionText,
        yesnoques7: res.data.result[7].QuestionText,
        yesnoques0text1: res.data.result[0].Answers[0],
        yesnoques1text1: res.data.result[1].Answers[0],
        yesnoques2text1: res.data.result[2].Answers[0],
        yesnoques3text1: res.data.result[3].Answers[0],
        yesnoques4text1: res.data.result[4].Answers[0],
        yesnoques5text1: res.data.result[5].Answers[0],
        yesnoques6text1: res.data.result[6].Answers[0],
        yesnoques7text1: res.data.result[7].Answers[0],
        yesnoques0text2: res.data.result[0].Answers[1],
        yesnoques1text2: res.data.result[1].Answers[1],
        yesnoques2text2: res.data.result[2].Answers[1],
        yesnoques3text2: res.data.result[3].Answers[1],
        yesnoques4text2: res.data.result[4].Answers[1],
        yesnoques5text2: res.data.result[5].Answers[1],
        yesnoques6text2: res.data.result[6].Answers[1],
        yesnoques7text2: res.data.result[7].Answers[1],
        ques2_text1: res.data.result[9].Answers[0],
        ques2_text2: res.data.result[9].Answers[1],
        ques2_text3: res.data.result[9].Answers[2],
        ques2_text4: res.data.result[9].Answers[3],
        ques2_ques: res.data.result[9].QuestionText,

        ques3_text1: res.data.result[10].Answers[0],
        ques3_text2: res.data.result[10].Answers[1],
        ques3_text3: res.data.result[10].Answers[2],
        ques3_text4: res.data.result[10].Answers[3],
        ques3_ques: res.data.result[10].QuestionText,

        ques4_ques: res.data.result[11].QuestionText,
        ques5_ques: res.data.result[12].QuestionText,
        ques6_ques: res.data.result[13].QuestionText,
        ques7_ques: res.data.result[14].QuestionText,

        ques8_text1: res.data.result[15].Answers[0],
        ques8_text2: res.data.result[15].Answers[1],
        ques8_ques: res.data.result[15].QuestionText,

        ques9_ques: res.data.result[16].QuestionText,

        ques10_text1: res.data.result[17].Answers[0],
        ques10_text2: res.data.result[17].Answers[1],
        ques10_ques: res.data.result[17].QuestionText,

        ques11_ques: res.data.result[18].QuestionText,

        ques12_text1: res.data.result[19].Answers[0],
        ques12_text2: res.data.result[19].Answers[1],
        ques12_ques: res.data.result[19].QuestionText,

        ques13_text1: res.data.result[20].Labels[0],
        ques13_text2: res.data.result[20].Labels[1],
        ques13_text3: res.data.result[20].Labels[2],
        ques13_text4: res.data.result[20].Labels[3],
        ques13_ques: res.data.result[20].QuestionText,

        ques14_text1: res.data.result[21].Labels[0],
        ques14_text2: res.data.result[21].Labels[1],
        ques14_text3: res.data.result[21].Labels[2],
        ques14_text4: res.data.result[21].Labels[3],
        ques14_ques: res.data.result[21].QuestionText,
        isReady: true
      });

      console.log("fgt...:", res.data.result[20])
    }).catch((error) => {
      console.log(error.message);
    });
  }
  toggleDrawer123 = () => {
    //this.props.navigationProps.toggleDrawer();
    this.props.navigation.dispatch(DrawerActions.toggleDrawer())

  };
  backButtonQuick123() {
    if (this.state.index == '2a') {
      this.setState({
        index: '1a'
      })
    }
    if (this.state.index == '3a') {
      this.setState({
        index: '2a'
      })
    }
    if (this.state.index == '4a') {
      this.setState({
        index: '3a'
      })
    }
    if (this.state.index == '5a') {
      this.setState({
        index: '4a'
      })
    }
    if (this.state.index == '6a') {
      this.setState({
        index: '5a'
      })
    }
    if (this.state.index == '7a') {
      this.setState({
        index: '6a'
      })
    }
    if (this.state.index == '8a') {
      this.setState({
        index: '7a'
      })
    }
    if (this.state.index == 0) {
      this.setState({
        index: '8a'
      })
    }
    if (this.state.index > 0) {
      //this.backButtonQuick();
      this.setState({
        index: this.state.index - 1,
        // enable_next: true,
        enable_back: true,
        enable_submit: false
      });
    }

  }
  nextButtonQuick9() {
    if (this.state.index >= 0) {

      if (this.state.index == 3 && this.state.value) {
        console.log("ok the property value is set in next butt")
        this.setState({
          propertyValue_data: this.state.value,
          index: 4
        })
      }
      if (this.state.index == 4 && this.state.mortage_value) {
        console.log("ok the mortage value is set in next butt")
        this.setState({
          mortageBal_data: this.state.mortage_value,
          index: 5
        })
      }
      if (this.state.index == 5 && this.state.current_interest_value) {
        console.log("ok the CIR value is set in next butt")
        this.setState({
          currIntRate_data: this.state.current_interest_value,
          index: 6
        })
      }
      if (this.state.index == 6 && this.state.down_payment_value) {
        console.log("ok the down_payment value is set in bext butt")
        this.setState({
          downPayament_data: this.state.down_payment_value,
          index: 7
        })
      }
      if (this.state.index != 12) {
        this.setState({
          index: this.state.index + 1
        })
      }
      if (this.state.index == 12 && !this.state.address) {
        this.setState({
          errorvalue8: "Please Enter Your Address",
          //index:0,
          //enable_back:false
        })
      }
      if (this.state.index == 12 && !this.state.property) {
        this.setState({
          stateerrorvalue8: "Please Select Your State",
          //index:0,
          //enable_back:false
        })
      }
      if (this.state.index == 12 && !this.state.city) {
        this.setState({
          cityerrorvalue: "Please Enter Valid City Name",
          //index:0,
          //enable_back:false
        })
      }
      if (this.state.index == 12 && !this.state.zip) {
        this.setState({
          errorvalue9: "Please Enter Your Current Zip Code",
          //index:0,
          //enable_back:false
        })
      }//
      if (this.state.index == 12 && this.state.validZipCode == false && ((this.state.zip).toString().length) < 5) {
        this.setState({
          errorvalue9: "Enter Valid Zip Code",
          //index:0,
          //enable_back:false
        })
      }//
      if (this.state.index == 12 && this.state.validZipCode && (this.state.address && this.state.zip && this.state.validcity && ((this.state.zip.toString().length) < 5) == false)) {
        this.setState({
          errorvalue8: "",
          cityerrorvalue: "",
          errorvalue9: "",
          index: 13,
          enable_next: false,
          enable_submit: true
        })
      }
    }
  }
  nextButtonQuick12() {
    if (this.state.index == 12 && !this.state.address) {
      this.setState({
        errorvalue8: "Please Enter Your Address",
        //index:0,
        //enable_back:false
      })
    }
    if (this.state.index == 12 && !this.state.property) {
      this.setState({
        stateerrorvalue8: "Please Select Your State",
        //index:0,
        //enable_back:false
      })
    }
    if (this.state.index == 12 && !this.state.city) {
      this.setState({
        cityerrorvalue: "Please Enter Valid City Name",
        //index:0,
        //enable_back:false
      })
    }
    if (this.state.index == 12 && !this.state.zip) {
      this.setState({
        errorvalue9: "Please Enter Your Current Zip Code",
        //index:0,
        //enable_back:false
      })
    }//
    if (this.state.index == 12 && this.state.validZipCode == false && ((this.state.zip).toString().length) < 5) {
      this.setState({
        errorvalue9: "Enter Valid Zip Code",
        //index:0,
        //enable_back:false
      })
    }//
    if (this.state.index == 12 && this.state.validZipCode && (this.state.address && this.state.zip && this.state.validcity && ((this.state.zip.toString().length) < 5) == false)) {
      this.setState({
        errorvalue8: "",
        cityerrorvalue: "",
        errorvalue9: "",
        index: 13,
        enable_next: false,
        enable_submit: true
      })
    }
  }
  nextButtonQuick10() {
    if (this.state.index == '1a') {
      this.setState({
        index: '2a'
      })
    }
    if (this.state.index == '2a') {
      this.setState({
        index: '3a'
      })
    }
    if (this.state.index == '3a') {
      this.setState({
        index: '4a'
      })
    }
    if (this.state.index == '4a') {
      this.setState({
        index: '5a'
      })
    }
    if (this.state.index == '5a') {
      this.setState({
        index: '6a'
      })
    }
    if (this.state.index == '6a') {
      this.setState({
        index: '7a'
      })
    }
    if (this.state.index == '7a') {
      this.setState({
        index: '8a'
      })
    }
    if (this.state.index == '8a') {
      this.setState({
        index: 0
      })
    }

  }
  render() {
    // console.log("details",this.props.screenProps.details)
    // console.log("data", global.data)
    const marks = [
      { name: '0', value: 0 },
      // { name: '250K', value: 250000 },
      { name: '500K', value: 500000 },
      // { name: '750K', value: 750000 },
      { name: '1M', value: 1000000 },
      // { name: '1.25M', value: 1250000 },
      { name: '1.5M', value: 1500000 },
      // { name: '1.75M', value: 1750000 },
      { name: '2M', value: 2000000 },


    ];
    const marks2 = [
      { name: '0', value: 0 },
      // { name: '250K', value: 250000 },
      { name: '500K', value: 500000 },
      // { name: '750K', value: 750000 },
      { name: '1M', value: 1000000 },
      // { name: '1.25M', value: 1250000 },
      { name: '1.5M', value: 1500000 },
      // { name: '1.75M', value: 1750000 },
      { name: '2M', value: 2000000 },


    ];
    const marks3 = [
      { name: '0', value: 0 },

      { name: '25', value: 25 },

      { name: '50', value: 50 },

      { name: '75', value: 75 },

      { name: '100', value: 100 },


    ];
    const marks4 = [
      { name: '0', value: 0 },

      { name: '25', value: 25 },

      { name: '50', value: 50 },

      { name: '75', value: 75 },

      { name: '100', value: 100 },


    ];

    let loan_type_data = [{
      value: "Fixed",
    }, {
      value: 'Adjustable',
    }
    ];
    let mortage_late_data = [{
      value: "I'm not behind",
    }, {
      value: 'One',
    },
    {
      value: "One or Two",
    }, {
      value: 'Two or More',
    }, {
      value: 'Three or More',
    }
    ];
    //let mortage_late_data = [{"I'm not behind", 'One', "One or Two", 'Two or More', "Three or More"}];
    let property_data2 = [{
      value: "Alabama",
    }, {
      value: 'Alaska',
    }, {
      value: "Arizona",
    }, {
      value: 'Arkansas',
    },
    {
      value: "California",
    }, {
      value: "Colorado",
    }, {
      value: 'Connecticut',
    },
    {
      value: "Delaware",
    }, {
      value: 'Florida',
    }, {
      value: "Georgia",
    }, {
      value: 'Hawaii',
    },
    {
      value: "Idaho",
    }, {
      value: "Illinois",
    }, {
      value: 'Indiana',
    },
    {
      value: "Iowa",
    }, {
      value: 'Kansas',
    }, {
      value: "Kentucky",
    }, {
      value: 'Louisiana',
    },
    {
      value: "Maine",
    }, {
      value: "Maryland",
    }, {
      value: 'Massachusetts',
    },
    {
      value: "Michigan",
    }, {
      value: 'Minnesota',
    }, {
      value: "Mississippi",
    }, {
      value: 'Missouri',
    },
    {
      value: "Montana",
    }, {
      value: "Nebraska",
    }, {
      value: 'Nevada',
    },
    {
      value: "New Hampshire",
    }, {
      value: 'New Jersey',
    }, {
      value: "New Mexico",
    }, {
      value: 'New York',
    },
    {
      value: "North Carolina",
    }, {
      value: "North Dakota",
    }, {
      value: 'Ohio',
    },
    {
      value: "Oklahoma",
    }, {
      value: 'Oregon',
    }, {
      value: "Pennsylvania",
    }, {
      value: 'Rhode Island',
    },
    {
      value: "South Carolina",
    }, {
      value: "South Dakota",
    }, {
      value: 'Tennessee',
    },
    {
      value: "Texas",
    }, {
      value: 'Utah',
    },
    {
      value: "Vermont",
    }, {
      value: "Virginia",
    }, {
      value: 'Washington',
    },
    {
      value: "West Virginia",
    }, {
      value: 'Wisconsin',
    },
    {
      value: "Wyoming",
    }
    ];
    let property_data = ["Alabama",
      'Alaska',
      "Arizona",
      'Arkansas',
      "California",
      "Colorado",
      'Connecticut',
      "Delaware",
      'Florida',
      "Georgia",
      'Hawaii',
      "Idaho",
      "Illinois",
      'Indiana',
      "Iowa",
      'Kansas',
      "Kentucky",
      'Louisiana',
      "Maine",
      "Maryland",
      'Massachusetts',
      "Michigan",
      'Minnesota',
      "Mississippi",
      'Missouri',
      "Montana",
      "Nebraska",
      'Nevada',
      "New Hampshire",
      'New Jersey',
      "New Mexico",
      'New York',
      "North Carolina",
      "North Dakota",
      'Ohio',
      "Oklahoma",
      'Oregon',
      "Pennsylvania",
      'Rhode Island',
      "South Carolina",
      "South Dakota",
      'Tennessee',
      "Texas",
      'Utah',
      "Vermont",
      "Virginia",
      'Washington',
      "West Virginia",
      'Wisconsin',
      "Wyoming",
    ];
    // let arr1 = this.state.questions_list
    //console.log("opoppppp...:",this.state.questions_list.Text)
    if (this.state.isReady) {
      return (
        <Container style={{marginTop:20}}>
          <Heading style={{
            backgroundColor: "white", justifyContent: "flex-start", shadowColor: '#000',
            shadowOffset: { width: 2, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 2, }}>
            <View style={{ flexDirection: 'row', backgroundColor: "white", flex: 1, justifyContent: "center", alignItems: "center" }}>
              <View style={{ flexDirection: "row", width: 60, flexWrap: "wrap", alignItems: "center", backgroundColor: "white", justifyContent: "space-between" }}>
                {this.state.index == '1a' ? null : <TouchableOpacity onPress={this.backButtonQuick123.bind(this)} style={{ marginLeft: "5%", height: 25, width: 25, justifyContent: "center", alignItems: "center" }}  >
                  <Image
                    source={require('../assets/backarrow.png')}
                    style={{ marginLeft: "5%", width: "100%", height: "100%" }}
                  />
                </TouchableOpacity>
                }


                <TouchableOpacity onPress={this.toggleDrawer123.bind(this)} style={{ justifyContent: "center", marginLeft: "3%" }} >
                  <Image
                    source={require('./image/drawer.png')}
                    style={{ width: 25, height: 25 }}
                  />
                </TouchableOpacity>
              </View>

              <DrawerNavigation />
              <View style={{ width: 60 }}></View>
            </View>

          </Heading>


          {/* <Header style={styles.headerstyles}>
            <View style={{alignItems: 'center',flex: 1,justifyContent: 'center'}} >
              <Image 
                source={require('../assets/main.png')}
              />
            </View>
          </Header> */}
          {/* scrollEnabled={false}*/}
          <Content contentContainerStyle={{ justifyContent: 'center' }} >
            <View style={{ flex: 1, flexDirection: 'column', justifyContent: "center" }}>
              {/***********************************************************************************/}
              {this.state.index === '1a' &&
                <Contain style={{ alignItems: "center", justifyContent: "center" }}>
                  <HeadImage2 style={{ alignItems: "center", }}>
                    <Image style={{}} source={require('../assets/car1.png')} />
                  </HeadImage2>
                  <Question>
                    <Text style={{ fontSize: wp(4), fontWeight: "bold", textAlign: "center", color: "#40b049" }} >
                      {this.state.yesnoques0}
                    </Text>
                  </Question>
                  <Options style={{ alignItems: "center", justifyContent: "center" }}>
                    <View style={{ alignItems: "center", justifyContent: "center", marginTop: deviceHeight <= 550 ? "5%" : "10%" }}>
                      <View style={{ flexDirection: "row", justifyContent: "center" }}>
                        {/* <View style={{ flexDirection: 'row' }}> */}


                        <Button style={{ minHeight: 40, height: "100%", backgroundColor: this.state.yesno2, width: "30%", justifyContent: "center", borderRadius: 5 }} onPress={() => {
                          this.setState({ yesno2: "green", yesno1: "#ECE9E9" })
                          this.rundelay(() => this.setState({ index: '2a', payCarInsurance_data: this.state.yesnoques0text1.Text, nxt_btn1: true }))

                        }}>
                          <Text style={{ color: this.state.yesno2 == "green" ? "white" : "black", fontSize: hp(1.6), textAlign: "center" }}>{this.state.yesnoques0text1.Text}</Text>
                        </Button>
                        <Text style={{ width: "10%" }}>  </Text>
                        <Button style={{ minHeight: 40, height: "100%", backgroundColor: this.state.yesno1, width: "30%", justifyContent: "center", borderRadius: 5 }} onPress={() => {
                          this.setState({ yesno1: "red", yesno2: "#ECE9E9" })
                          this.rundelay(() => this.setState({ payCarInsurance_data: this.state.yesnoques0text2.Text, index: '2a', nxt_btn2: true }))
                        }}>
                          <Text style={{ color: this.state.yesno1 == "red" ? "white" : "black", fontSize: hp(1.6), textAlign: "center" }}>{this.state.yesnoques0text2.Text}</Text>

                        </Button>


                        {/* </View> */}
                        {/* <View style={{ marginTop: 10, flexDirection: "row" }}> */}



                        {/* </View> */}
                      </View>

                    </View>
                    {this.state.nxt_btn1 == false && this.state.nxt_btn2 == false ?
                      <View>
                        <Text> </Text>

                      </View> :
                      <View style={{ flexDirection: 'row', justifyContent: "center", marginTop: deviceHeight <= 550 ? "5%" : "10%" }}>

                        <Button block
                          style={styles.next_btnstyle}

                          onPress={this.nextButtonQuick10.bind(this)}>
                          <Text style={{ fontSize: hp(1.6) }}>Next</Text>
                        </Button>

                      </View>

                    }
                  </Options>

                </Contain>

              }
              {this.state.index === '2a' &&
                <Contain style={{ alignItems: "center", justifyContent: "center" }}>
                  <HeadImage2 style={{ alignItems: "center", }}>
                    <Image style={{}} source={require('../assets/defaultqaimg.png')} />
                  </HeadImage2>
                  <Question style={{ flexDirection: "row" }}>
                    <Text style={{ fontSize: wp(4), flex: 1, flexWrap: "wrap", fontWeight: "bold", textAlign: "center", color: "#40b049" }} >
                      {this.state.yesnoques1}
                    </Text>
                  </Question>
                  <Options style={{ alignItems: "center", justifyContent: "center" }}>
                    <View style={{ alignItems: "center", justifyContent: "center", marginTop: deviceHeight <= 550 ? "5%" : "10%" }}>
                      <View style={styles.yesnobuttonview}>
                        <View style={{ flexDirection: 'row' }}>
                          <Button style={{ minHeight: 40, height: "100%", backgroundColor: this.state.yesno3, flex: 1, width: "30%", borderRadius: 5 }} block onPress={() => {
                            this.setState({ yesno3: "green", yesno4: "#ECE9E9" })
                            this.rundelay(() => { this.setState({ index: '3a', fastAndEasyFindout_data: this.state.yesnoques1text1.Text, nxt_btn3: true }) })
                          }}
                          >
                            <Text style={{ color: this.state.yesno3 == "green" ? "white" : "black", fontSize: hp(1.8), textAlign: "center" }}>{this.state.yesnoques1text1.Text}</Text>
                          </Button>


                        </View>
                        <View style={{ marginTop: 10, flexDirection: "row" }}>

                          <Button style={{ minHeight: 40, height: "100%", backgroundColor: this.state.yesno4, flex: 1, width: "30%", borderRadius: 5 }} block onPress={() => {
                            this.setState({ yesno4: "red", yesno3: "#ECE9E9" })
                            this.rundelay(() => this.setState({ index: '3a', fastAndEasyFindout_data: this.state.yesnoques1text2.Text, nxt_btn4: true }))
                          }}>
                            <Text style={{ color: this.state.yesno4 == "red" ? "white" : "black", fontSize: hp(1.8), textAlign: "center" }}>{this.state.yesnoques1text2.Text}</Text>
                          </Button>

                        </View>
                      </View>

                    </View>
                    {this.state.nxt_btn3 == false && this.state.nxt_btn4 == false ?
                      <View>
                        <Text> </Text>

                      </View> :
                      <View style={{ flexDirection: 'row', justifyContent: "center", marginTop: "10%" }}>

                        <Button block
                          style={styles.next_btnstyle}
                          onPress={this.nextButtonQuick10.bind(this)}>
                          <Text style={{ fontSize: hp(1.6) }}>Next</Text>
                        </Button>

                      </View>

                    }
                  </Options>

                </Contain>

              }
              {this.state.index === '3a' &&
                <Contain style={{ alignItems: "center", justifyContent: "center" }}>
                  <HeadImage2 style={{ alignItems: "center", }}>
                    <Image style={{}} source={require('../assets/defaultqaimg.png')} />
                  </HeadImage2>
                  <Question>
                    <Text style={{ fontSize: wp(4), fontWeight: "bold", textAlign: "center", color: "#40b049" }} >
                      {this.state.yesnoques2}
                    </Text>
                  </Question>
                  <Options style={{ alignItems: "center", justifyContent: "center" }}>
                    <View style={{ alignItems: "center", justifyContent: "center", marginTop: deviceHeight <= 550 ? "5%" : "10%" }}>
                      <View style={{ flexDirection: "row", justifyContent: "center" }}>
                        {/* <View style={{ flexDirection: 'row' }}> */}



                        <Button style={{ minHeight: 40, height: "100%", backgroundColor: this.state.yesno6, width: "30%", justifyContent: "center", borderRadius: 5 }} onPress={() => {
                          this.setState({ yesno6: "green", yesno5: "#ECE9E9" })
                          this.rundelay(() => this.setState({ index: '4a', buyingHouse: this.state.yesnoques2text1.Text, nxt_btn5: true }))
                        }}>
                          <Text style={{ color: this.state.yesno6 == "green" ? "white" : "black", fontSize: hp(1.6), textAlign: "center" }}>{this.state.yesnoques2text1.Text}</Text>
                        </Button>
                        <Text style={{ width: 50 }}>  </Text>
                        <Button style={{ minHeight: 40, height: "100%", backgroundColor: this.state.yesno5, width: "30%", justifyContent: "center", borderRadius: 5 }} onPress={() => {
                          this.setState({ yesno5: "red", yesno6: "#ECE9E9" })
                          this.rundelay(() => this.setState({ index: '4a', buyingHouse: this.state.yesnoques2text2.Text, nxt_btn6: true }))
                        }}>
                          <Text style={{ color: this.state.yesno5 == "red" ? "white" : "black", fontSize: hp(1.6), textAlign: "center" }}>{this.state.yesnoques2text2.Text}</Text>
                        </Button>
                        {/* </View> */}
                        {/* <View style={{ marginTop: 10, flexDirection: "row" }}> */}



                        {/* </View> */}
                      </View>

                    </View>
                    {this.state.nxt_btn5 == false && this.state.nxt_btn6 == false ?
                      <View>
                        <Text> </Text>

                      </View> :
                      <View style={{ flexDirection: 'row', justifyContent: "center", marginTop: "10%" }}>

                        <Button block
                          style={styles.next_btnstyle}
                          onPress={this.nextButtonQuick10.bind(this)}>
                          <Text style={{ fontSize: hp(1.6) }}>Next</Text>
                        </Button>

                      </View>

                    }
                  </Options>

                </Contain>

              }
              {this.state.index === '4a' &&
                <Contain style={{ alignItems: "center", justifyContent: "center" }}>
                  <HeadImage2 style={{ alignItems: "center", }}>
                    <Image style={{}} source={require('../assets/defaultqaimg.png')} />
                  </HeadImage2>
                  <Question>
                    <Text style={{ fontSize: wp(4), fontWeight: "bold", textAlign: "center", color: "#40b049" }} >
                      {this.state.yesnoques3}
                    </Text>
                  </Question>
                  <Options style={{ alignItems: "center", justifyContent: "center" }}>
                    <View style={{ alignItems: "center", justifyContent: "center", marginTop: deviceHeight <= 550 ? "5%" : "10%" }}>
                      <View style={styles.yesnobuttonview}>
                        <View style={{ flexDirection: 'row' }}>
                          <Button style={{ minHeight: 40, height: "100%", backgroundColor: this.state.yesno11, width: "30%", flex: 1, borderRadius: 5 }} block onPress={() => {
                            this.setState({ yesno11: "green", yesno12: "#ECE9E9" })
                            this.rundelay(() => this.setState({ index: '5a', creditReportFirst: this.state.yesnoques3text1.Text, nxt_btn7: true }))
                          }}>
                            <Text style={{ color: this.state.yesno11 == "green" ? "white" : "black", fontSize: hp(1.6), textAlign: "center" }}>{this.state.yesnoques3text1.Text}</Text>
                          </Button>


                        </View>
                        <View style={{ marginTop: 10, flexDirection: "row" }}>

                          <Button style={{ minHeight: 40, height: "100%", backgroundColor: this.state.yesno12, width: "30%", flex: 1, borderRadius: 5 }} block onPress={() => {
                            this.setState({ yesno12: "red", yesno11: "#ECE9E9" })
                            this.rundelay(() => this.setState({ index: '5a', creditReportFirst: this.state.yesnoques3text2.Text, nxt_btn8: true }))
                          }}>
                            <Text style={{ color: this.state.yesno12 == "red" ? "white" : "black", fontSize: hp(1.6), textAlign: "center" }}>{this.state.yesnoques3text2.Text}</Text>
                          </Button>

                        </View>
                      </View>

                    </View>
                    {this.state.nxt_btn7 == false && this.state.nxt_btn8 == false ?
                      <View>
                        <Text> </Text>

                      </View> :
                      <View style={{ flexDirection: 'row', justifyContent: "center", marginTop: "10%" }}>

                        <Button block
                          style={styles.next_btnstyle}
                          onPress={this.nextButtonQuick10.bind(this)}>
                          <Text style={{ fontSize: hp(1.6) }}>Next</Text>
                        </Button>

                      </View>

                    }
                  </Options>

                </Contain>

              }
              {this.state.index === '5a' &&
                <Contain style={{ alignItems: "center", justifyContent: "center" }}>
                  <HeadImage2 style={{ alignItems: "center", }}>
                    <Image style={{}} source={require('../assets/defaultqaimg.png')} />
                  </HeadImage2>
                  <Question>
                    <Text style={{ fontSize: wp(4), fontWeight: "bold", textAlign: "center", color: "#40b049" }} >
                      {this.state.yesnoques4}
                    </Text>
                  </Question>
                  <Options style={{ alignItems: "center", justifyContent: "center" }}>
                    <View style={{ alignItems: "center", justifyContent: "center", marginTop: deviceHeight <= 550 ? "5%" : "10%" }}>
                      <View style={{ flexDirection: "row", justifyContent: "center" }}>
                        {/* <View style={{ flexDirection: 'row' }}> */}
                        {/* <View style={{ marginTop: 10, flexDirection: "row" }}> */}




                        {/* </View> */}
                        <Button style={{ minHeight: 40, height: "100%", backgroundColor: this.state.yesno8, width: "30%", justifyContent: "center", borderRadius: 5 }} onPress={() => {
                          this.setState({ yesno8: "green", yesno7: "#ECE9E9" })
                          this.rundelay(() => this.setState({ index: '6a', haveKids: this.state.yesnoques4text1.Text, nxt_btn9: true }))
                        }}>
                          <Text style={{ color: this.state.yesno8 == "green" ? "white" : "black", fontSize: hp(1.6), textAlign: "center" }}>{this.state.yesnoques4text1.Text}</Text>
                        </Button>
                        <Text style={{ width: 50 }}>  </Text>
                        <Button style={{ minHeight: 40, height: "100%", backgroundColor: this.state.yesno7, width: "30%", justifyContent: "center", borderRadius: 5 }} onPress={() => {
                          this.setState({ yesno7: "red", yesno8: "#ECE9E9" })
                          this.rundelay(() => this.setState({ index: '6a', haveKids: this.state.yesnoques4text2.Text, nxt_btn10: true }))
                        }}>
                          <Text style={{ color: this.state.yesno7 == "red" ? "white" : "black", fontSize: hp(1.6), textAlign: "center" }}>{this.state.yesnoques4text2.Text}</Text>
                        </Button>
                        {/* </View> */}
                      </View>

                    </View>
                    {this.state.nxt_btn9 == false && this.state.nxt_btn10 == false ?
                      <View>
                        <Text> </Text>

                      </View> :
                      <View style={{ flexDirection: 'row', justifyContent: "center", marginTop: "10%" }}>

                        <Button block
                          style={styles.next_btnstyle}
                          onPress={this.nextButtonQuick10.bind(this)}>
                          <Text style={{ fontSize: hp(1.6) }}>Next</Text>
                        </Button>

                      </View>

                    }

                  </Options>

                </Contain>

              }
              {this.state.index === '6a' &&
                <Contain style={{ alignItems: "center", justifyContent: "center" }}>
                  <HeadImage2 style={{ alignItems: "center", }}>
                    <Image style={{}} source={require('../assets/defaultqaimg.png')} />
                  </HeadImage2>
                  <Question>
                    <Text style={{ fontSize: wp(4), fontWeight: "bold", textAlign: "center", color: "#40b049" }} >
                      {this.state.yesnoques5}
                    </Text>
                  </Question>
                  <Options style={{ alignItems: "center", justifyContent: "center" }}>
                    <View style={{ alignItems: "center", justifyContent: "center", marginTop: deviceHeight <= 550 ? "5%" : "10%" }}>
                      <View style={styles.yesnobuttonview}>
                        <View style={{ flexDirection: 'row' }}>
                          <Button style={{ minHeight: 40, height: "100%", backgroundColor: this.state.yesno9, width: "30%", flex: 1, borderRadius: 5 }} block onPress={() => {
                            this.setState({ yesno9: "green", yesno10: "#ECE9E9" })
                            this.rundelay(() => this.setState({ index: '7a', familyProtection: this.state.yesnoques5text1.Text, nxt_btn11: true }))
                          }}>
                            <Text style={{ color: this.state.yesno9 == "green" ? "white" : "black", fontSize: hp(1.6), textAlign: "center" }}>{this.state.yesnoques5text1.Text}</Text>
                          </Button>


                        </View>
                        <View style={{ marginTop: 10, flexDirection: "row" }}>

                          <Button style={{ minHeight: 40, height: "100%", backgroundColor: this.state.yesno10, width: "30%", flex: 1, borderRadius: 5 }} block onPress={() => {
                            this.setState({ yesno10: "red", yesno9: "#ECE9E9" })
                            this.rundelay(() => this.setState({ index: '7a', familyProtection: this.state.yesnoques5text2.Text, nxt_btn12: true }))
                          }}>
                            <Text style={{ color: this.state.yesno10 == "red" ? "white" : "black", fontSize: hp(1.6), textAlign: "center" }}>{this.state.yesnoques5text2.Text}</Text>
                          </Button>

                        </View>
                      </View>

                    </View>
                    {this.state.nxt_btn11 == false && this.state.nxt_btn12 == false ?
                      <View>
                        <Text> </Text>

                      </View> :
                      <View style={{ flexDirection: 'row', justifyContent: "center", marginTop: "10%" }}>

                        <Button block
                          style={styles.next_btnstyle}
                          onPress={this.nextButtonQuick10.bind(this)}>
                          <Text style={{ fontSize: hp(1.6) }}>Next</Text>
                        </Button>

                      </View>

                    }

                  </Options>

                </Contain>

              }
              {this.state.index === '7a' &&
                <Contain style={{ alignItems: "center", justifyContent: "center" }}>
                  <HeadImage2 style={{ alignItems: "center", }}>
                    <Image style={{}} source={require('../assets/defaultqaimg.png')} />
                  </HeadImage2>
                  <Question>
                    <Text style={{ fontSize: wp(4), fontWeight: "bold", textAlign: "center", color: "#40b049" }} >
                      {this.state.yesnoques6}
                    </Text>
                  </Question>
                  <Options style={{ alignItems: "center", justifyContent: "center" }}>
                    <View style={{ alignItems: "center", justifyContent: "center", marginTop: deviceHeight <= 550 ? "5%" : "10%" }}>
                      <View style={{ flexDirection: "row", justifyContent: "center" }}>
                        {/* <View style={{ flexDirection: 'row' }}> */}



                        {/* </View> */}
                        <Button style={{ minHeight: 40, height: "100%", backgroundColor: this.state.yesno14, width: "30%", justifyContent: "center", borderRadius: 5 }} onPress={() => {
                          this.setState({ yesno14: "green", yesno13: "#ECE9E9" })
                          this.rundelay(() => this.setState({ index: '8a', haveMortgage: this.state.yesnoques6text1.Text, nxt_btn13: true }))
                        }}>
                          <Text style={{ color: this.state.yesno14 == "green" ? "white" : "black", fontSize: hp(1.6), textAlign: "center" }}>{this.state.yesnoques6text1.Text}</Text>
                        </Button>
                        <Text style={{ width: 50 }}>  </Text>
                        <Button style={{ minHeight: 40, height: "100%", backgroundColor: this.state.yesno13, width: "30%", justifyContent: "center", borderRadius: 5 }} onPress={() => {
                          this.setState({ yesno13: "red", yesno14: "#ECE9E9" })
                          this.rundelay(() => this.setState({ index: '8a', haveMortgage: this.state.yesnoques6text2.Text, nxt_btn14: true }))
                        }}>
                          <Text style={{ color: this.state.yesno13 == "red" ? "white" : "black", fontSize: hp(1.6), textAlign: "center" }}>{this.state.yesnoques6text2.Text}</Text>
                        </Button>
                        {/* <View style={{ marginTop: 10, flexDirection: "row" }}> */}

                        {/* </View> */}
                      </View>

                    </View>
                    {this.state.nxt_btn13 == false && this.state.nxt_btn14 == false ?
                      <View>
                        <Text> </Text>

                      </View> :
                      <View style={{ flexDirection: 'row', justifyContent: "center", marginTop: "10%" }}>

                        <Button block
                          style={styles.next_btnstyle}
                          onPress={this.nextButtonQuick10.bind(this)}>
                          <Text style={{ fontSize: hp(1.6) }}>Next</Text>
                        </Button>

                      </View>

                    }

                  </Options>

                </Contain>

              }
              {this.state.index === '8a' &&
                <Contain style={{ alignItems: "center", justifyContent: "center" }}>
                  <HeadImage2 style={{ alignItems: "center" }}>
                    <Image style={{}} source={require('../assets/defaultqaimg.png')} />
                  </HeadImage2>
                  <Question>
                    <Text style={{ fontSize: wp(4), fontWeight: "bold", textAlign: "center", color: "#40b049" }} >
                      {this.state.yesnoques7}
                    </Text>
                  </Question>
                  <Options style={{ alignItems: "center", justifyContent: "center" }}>
                    <View style={{ alignItems: "center", justifyContent: "center", marginTop: deviceHeight <= 550 ? "5%" : "10%" }}>
                      <View style={styles.yesnobuttonview}>
                        <View style={{ flexDirection: 'row' }}>
                          <Button style={{ minHeight: 40, height: "100%", backgroundColor: this.state.yesno15, width: "30%", flex: 1, borderRadius: 5 }} block onPress={() => {
                            this.setState({ yesno15: "green", yesno16: "#ECE9E9" })
                            this.rundelay(() => this.setState({ index: 0, hugeSavings: this.state.yesnoques7text1.Text, nxt_btn15: true }))
                          }}>
                            <Text style={{ color: this.state.yesno15 == "green" ? "white" : "black", fontSize: hp(1.6), textAlign: "center" }}>{this.state.yesnoques7text1.Text}</Text>
                          </Button>


                        </View>
                        <View style={{ marginTop: 10, flexDirection: "row" }}>

                          <Button style={{ minHeight: 40, height: "100%", backgroundColor: this.state.yesno16, width: "30%", flex: 1, borderRadius: 5 }} block onPress={() => {
                            this.setState({ yesno16: "red", yesno15: "#ECE9E9" })
                            this.rundelay(() => this.setState({ index: 0, hugeSavings: this.state.yesnoques7text2.Text, nxt_btn16: true }))
                          }}>
                            <Text style={{ color: this.state.yesno16 == "red" ? "white" : "black", fontSize: hp(1.6), textAlign: "center" }}>{this.state.yesnoques7text2.Text}</Text>
                          </Button>

                        </View>
                      </View>

                    </View>
                    {this.state.nxt_btn15 == false && this.state.nxt_btn16 == false ?
                      <View>
                        <Text> </Text>

                      </View> :
                      <View style={{ flexDirection: 'row', justifyContent: "center", marginTop: "10%" }}>

                        <Button block
                          style={styles.next_btnstyle}
                          onPress={this.nextButtonQuick10.bind(this)}>
                          <Text style={{ fontSize: hp(1.6) }}>Next</Text>
                        </Button>

                      </View>

                    }

                  </Options>

                </Contain>

              }



              {/****************************************************************** */}
              {this.state.index === 0 &&
                <Contain style={{ alignItems: "center", justifyContent: "center" }}>
                  <HeadImage2 style={{ alignItems: "center" }}>
                    <Image style={{}} source={require('../assets/pick_your_loan_type.png')} />
                  </HeadImage2>
                  <Question>
                    <Text style={{ fontSize: hp(2.5), fontWeight: "bold", textAlign: "center", color: "#40b049" }} >
                      {this.state.ques1_ques}
                    </Text>
                  </Question>
                  <Options style={{ alignItems: "center", }}>
                    <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-around" }}>
                      {/* <View style={{backgroundColor:"yellow",width:"100%", flexDirection:"row",justifyContent:"space-between"}}> */}
                      <View style={{
                        // alignItems: 'flex-start', backgroundColor: 'white',
                        // borderWidth: 1,
                        // borderRadius: 7,
                        // borderColor: '#ddd',
                        // // borderBottomWidth: 0,
                        // shadowColor: '#000',
                        // shadowOffset: { width: 2, height: 2 },
                        // shadowOpacity: 0.8,
                        // shadowRadius: 2,
                        // elevation: 1,
                        // marginLeft: 5,
                        // height: hp(14),
                        // width: hp(15),
                        // marginRight: 5,
                        // marginTop: 10,
                        alignItems: 'flex-start', backgroundColor: 'white',

                        marginLeft: 5,
                        height: hp(14),
                        width: hp(15),
                        marginRight: 5,
                        marginTop: 10,

                      }}>
                        {this.state.showimage1 == false &&
                          <TouchableOpacity style={{ width: "100%", height: "100%" }}
                            onPress={this.handleChangeRefinance.bind(this)}>
                            <Image
                              style={{
                                width: "100%", height: "100%",
                                borderRadius: 7,
                                borderColor: '#ddd',
                                // borderBottomWidth: 0,
                                shadowColor: '#000',
                                shadowOffset: { width: 2, height: 2 },
                                shadowOpacity: 0.1,
                                shadowRadius: 2,
                                elevation: 1,
                              }}
                              source={require('../assets/refinance_final.png')}
                            />
                          </TouchableOpacity>
                        }
                        {(this.state.showimage1 == true) &&
                          <Image
                            style={styles.refinance,{width: "100%", height: "100%",
                borderRadius: 7,
              borderColor: '#ddd',
              // borderBottomWidth: 0,
              shadowColor: '#000',
                        shadowOffset: {width: 2, height: 2 },
                      shadowOpacity: 0.8,
                      shadowRadius: 2,
                      elevation: 1, }}
                              source={require('../assets/Tick_mark.png')}
                        />
                      }
                          <View style={{ alignSelf: 'center', margin: 5 }}>
                          <Text style={{ fontWeight: "bold", fontSize: hp(2), textAlign: "center", color: "#2959a7" }}>{this.state.ques1_text1.Text}</Text>
                        </View>
                      </View>
                      <View style={{
                        alignItems: 'flex-start', backgroundColor: 'white',

                        marginLeft: 5,
                        height: hp(14),
                        width: hp(15),
                        marginRight: 5,
                        marginTop: 10,



                      }}>
                        {this.state.showimage2 == false &&
                          <TouchableOpacity style={{ width: "100%", height: "100%" }}
                            onPress={this.handleChangePurchase.bind(this)}>
                            <Image
                              style={{
                                width: "100%", height: "100%",
                                borderRadius: 7,
                                borderColor: '#ddd',
                                // borderBottomWidth: 0,
                                shadowColor: '#000',
                                shadowOffset: { width: 2, height: 2 },
                                shadowOpacity: 0.1,
                                shadowRadius: 2,
                                elevation: 1,
                              }}
                              source={require('../assets/purchase_final.png')}
                            />
                          </TouchableOpacity>
                        }
                        {(this.state.showimage2 == true) &&
                          <Image
                            style={styles.refinance,{width: "100%",height:"100%",
                borderRadius: 7,
              borderColor: '#ddd',
              // borderBottomWidth: 0,
              shadowColor: '#000',
                        shadowOffset: {width: 2, height: 2 },
                      shadowOpacity: 0.8,
                      shadowRadius: 2,
                      elevation: 1,}}
                        source={require('../assets/Tick_mark.png')}
                        />
                      }
                    <View style={{ alignSelf: 'center', margin: 5 }}>
                          <Text style={{ fontWeight: "bold", fontSize: hp(2), textAlign: "center", color: "#2959a7" }}>{this.state.ques1_text2.Text}</Text>
                        </View>
                      </View>
                      {/* </View> */}


                    </View>
                  </Options>
                  <NextButton>
                    {this.state.showimage1 == false && this.state.showimage2 == false ?
                      <View style={{ alignSelf: "center", paddingTop: 10 }}>
                        <Text style={{ color: "red" }}>
                          {this.state.errorvalue}
                        </Text>
                      </View> :
                      <View style={{ flexDirection: 'row', justifyContent: "center", marginTop: "10%" }}>

                        <Button block
                          style={styles.next_btnstyle}
                          onPress={this.nextButtonQuick9.bind(this)}>
                          <Text style={{ fontSize: hp(1.6) }}>Next</Text>
                        </Button>

                      </View>
                    }
                  </NextButton>
                </Contain>

              }
              {this.state.index === 1 &&
                <Contain style={{ alignItems: "center", justifyContent: "center" }}>
                  <HeadImage2 style={{ alignItems: "center" }}>
                    <Image style={{}}
                      source={require('../assets/Property_type.png')} />
                  </HeadImage2>
                  <Question2>
                    <Text style={{ fontSize: hp(2.5), fontWeight: "bold", textAlign: "center", color: "#40b049" }} >
                      {this.state.ques2_ques}
                    </Text>
                  </Question2>
                  <Options2 style={{ alignItems: "center", justifyContent: "center" }}>
                    <View style={{ width: "100%", justifyContent: "space-around", alignItems: "center", flex: 1, flexDirection: "row" }}>{/* all images container */}
                      <View style={{}}>{/* 1st column of images */}
                        <View
                          style={{
                            backgroundColor: 'white',
                            // paddingBottom:"5%"
                            margin: "5%",
                            // borderWidth: 1,
                            // borderRadius: 7,
                            // borderColor: '#ddd',
                            // borderBottomWidth: 0,
                            // shadowColor: '#000',
                            // shadowOffset: { width: 2, height: 2 },
                            // shadowOpacity: 0.8,
                            // shadowRadius: 2,
                            // elevation: 1,
                            // marginTop: 10,
                            justifyContent: "center",
                            alignItems: "center"
                          }}>
                          <View style={{
                            width: 80, height: 80,
                          }}>{/*image 1*/}
                            {this.state.showimage3 == false &&
                              <TouchableOpacity
                                style={{}}
                                onPress={this.handleChangeSingle.bind(this)}
                              >
                                <Image
                                  style={{
                                    width: "100%", height: "100%",
                                    borderRadius: 7,
                                    borderColor: '#ddd',
                                    // borderBottomWidth: 0,
                                    shadowColor: '#000',
                                    shadowOffset: { width: 2, height: 2 },
                                    shadowOpacity: 0.1,
                                    shadowRadius: 2,
                                    elevation: 1,
                                  }}
                                  source={require('../assets/single_final.png')}
                                />
                              </TouchableOpacity>
                            }
                            {(this.state.showimage3 == true) &&
                              <Image
                                style={{
                                  width: "100%", height: "100%",
                                  borderRadius: 7,
                                  borderColor: '#ddd',
                                  // borderBottomWidth: 0,
                                  shadowColor: '#000',
                                  shadowOffset: { width: 2, height: 2 },
                                  shadowOpacity: 0.8,
                                  shadowRadius: 2,
                                  elevation: 1,
                                }}
                                source={require('../assets/Tick_mark.png')}
                              />
                            }
                          </View>
                          <View >
                            <Text style={{ fontWeight: "bold", color: "#2959a7" }}>{this.state.ques2_text1.Text}</Text>
                          </View>
                        </View>
                        <View

                          style={{
                            backgroundColor: 'white',
                            // paddingBottom:"5%"
                            margin: "5%",
                            // borderWidth: 1,
                            // borderRadius: 7,
                            // borderColor: '#ddd',
                            // borderBottomWidth: 0,
                            // shadowColor: '#000',
                            // shadowOffset: { width: 2, height: 2 },
                            // shadowOpacity: 0.8,
                            // shadowRadius: 2,
                            // elevation: 1,
                            marginTop: 10,
                            justifyContent: "center",
                            alignItems: "center"
                          }}>
                          <View style={{
                            width: 80, height: 80
                          }}>{/* image 2 */}
                            {this.state.showimage4 == false &&
                              <TouchableOpacity
                                onPress={this.handleChangeMulti.bind(this)}
                              >
                                <Image
                                  style={{
                                    width: "100%", height: "100%",
                                    borderRadius: 7,
                                    borderColor: '#ddd',
                                    // borderBottomWidth: 0,
                                    shadowColor: '#000',
                                    shadowOffset: { width: 2, height: 2 },
                                    shadowOpacity: 0.1,
                                    shadowRadius: 2,
                                    elevation: 1,
                                  }}
                                  source={require('../assets/multifamily_final.png')}
                                />
                              </TouchableOpacity>
                            }
                            {(this.state.showimage4 == true) &&
                              <Image
                                style={{
                                  width: "100%", height: "100%",
                                  borderRadius: 7,
                                  borderColor: '#ddd',
                                  // borderBottomWidth: 0,
                                  shadowColor: '#000',
                                  shadowOffset: { width: 2, height: 2 },
                                  shadowOpacity: 0.8,
                                  shadowRadius: 2,
                                  elevation: 1,
                                }}
                                source={require('../assets/Tick_mark.png')}
                              />
                            }
                          </View>
                          <View >
                            <Text style={{ fontWeight: "bold", color: "#2959a7" }}>{this.state.ques2_text2.Text}</Text>
                          </View>
                        </View>
                      </View>






                      <View style={{}}>{/* second column of images */}
                        <View
                          style={{
                            backgroundColor: 'white',
                            // paddingBottom:"5%"
                            margin: "5%",
                            // borderWidth: 1,
                            // borderRadius: 7,
                            // borderColor: '#ddd',
                            // borderBottomWidth: 0,
                            // shadowColor: '#000',
                            // shadowOffset: { width: 2, height: 2 },
                            // shadowOpacity: 0.8,
                            // shadowRadius: 2,
                            // elevation: 1,
                            // marginTop: 10,
                            justifyContent: "center",
                            alignItems: "center"
                          }}>
                          <View style={{
                            height: 80, width: 80
                          }}>{/* 3rd image */}
                            {this.state.showimage5 == false &&
                              <TouchableOpacity
                                onPress={this.handleChangeCando.bind(this)}
                              >
                                <Image
                                  style={{
                                    width: "100%", height: "100%",
                                    borderRadius: 7,
                                    borderColor: '#ddd',
                                    // borderBottomWidth: 0,
                                    shadowColor: '#000',
                                    shadowOffset: { width: 2, height: 2 },
                                    shadowOpacity: 0.1,
                                    shadowRadius: 2,
                                    elevation: 1,
                                  }}
                                  source={require('../assets/cando_final.png')}
                                />
                              </TouchableOpacity>
                            }
                            {(this.state.showimage5 == true) &&
                              <Image
                                style={{
                                  width: "100%", height: "100%",
                                  borderRadius: 7,
                                  borderColor: '#ddd',
                                  // borderBottomWidth: 0,
                                  shadowColor: '#000',
                                  shadowOffset: { width: 2, height: 2 },
                                  shadowOpacity: 0.8,
                                  shadowRadius: 2,
                                  elevation: 1,
                                }}
                                source={require('../assets/Tick_mark.png')}
                              />
                            }
                          </View>
                          <View >
                            <Text style={{ fontWeight: "bold", color: "#2959a7" }}>{this.state.ques2_text3.Text}</Text>
                          </View>
                        </View>
                        <View
                          style={{
                            backgroundColor: 'white',
                            // paddingBottom:"5%"
                            margin: "5%",
                            // borderWidth: 1,
                            // borderRadius: 7,
                            // borderColor: '#ddd',
                            // borderBottomWidth: 0,
                            // shadowColor: '#000',
                            // shadowOffset: { width: 2, height: 2 },
                            // shadowOpacity: 0.8,
                            // shadowRadius: 2,
                            // elevation: 1,
                            marginTop: 10,
                            justifyContent: "center",
                            alignItems: "center"
                          }}>
                          <View style={{
                            width: 80, height: 80,
                          }}>{/**4th image */}
                            {this.state.showimage6 == false &&
                              <TouchableOpacity
                                onPress={this.handleChangeTownHouse.bind(this)}
                              >
                                <Image
                                  style={{
                                    width: "100%", height: "100%",
                                    borderRadius: 7,
                                    borderColor: '#ddd',
                                    // borderBottomWidth: 0,
                                    shadowColor: '#000',
                                    shadowOffset: { width: 2, height: 2 },
                                    shadowOpacity: 0.1,
                                    shadowRadius: 2,
                                    elevation: 1,
                                  }}
                                  source={require('../assets/townhouse_final.png')}
                                />
                              </TouchableOpacity>
                            }
                            {(this.state.showimage6 == true) &&
                              <Image
                                style={{
                                  width: "100%", height: "100%",
                                  // borderRadius: 7,
                                  borderColor: '#ddd',
                                  // borderBottomWidth: 0,
                                  shadowColor: '#000',
                                  shadowOffset: { width: 2, height: 2 },
                                  shadowOpacity: 0.8,
                                  shadowRadius: 2,
                                  elevation: 1,
                                }}
                                source={require('../assets/Tick_mark.png')}
                              />
                            }
                          </View>
                          <View >
                            <Text style={{ fontWeight: "bold", color: "#2959a7" }}>{this.state.ques2_text4.Text}</Text>
                          </View>
                        </View>
                      </View>




                    </View>


                  </Options2>
                  <NextButton style={{ marginTop: "5%" }}>
                    {this.state.showimage3 == false && this.state.showimage4 == false && this.state.showimage5 == false && this.state.showimage6 == false ?
                      <View >
                        <Text style={{ color: "red" }}>
                          {this.state.errorvalue1}
                        </Text>
                      </View> :
                      <View style={{ flexDirection: 'row', justifyContent: "center", marginTop: "5%" }}>

                        <Button block
                          style={styles.next_btnstyle}
                          onPress={this.nextButtonQuick9.bind(this)}>
                          <Text style={{ fontSize: hp(1.6) }}>Next</Text>
                        </Button>

                      </View>
                    }
                  </NextButton>

                </Contain>

              }
              {this.state.index === 2 &&
                <Contain style={{ alignItems: "center", justifyContent: "center" }}>
                  <HeadImage2 style={{ alignItems: "center" }}>
                    <Image style={{}}
                      source={require('../assets/credit_header.png')} />
                  </HeadImage2>
                  <Question2>
                    <Text style={{ fontSize: hp(2.5), fontWeight: "bold", textAlign: "center", color: "#40b049" }} >
                      {this.state.ques3_ques}
                    </Text>
                  </Question2>

                  <Options2 style={{ alignItems: "center", justifyContent: "center" }}>
                    <View style={{ width: "100%", justifyContent: "space-around", alignItems: "center", flex: 1, flexDirection: "row" }}>{/* all images container */}
                      <View style={{}}>{/* 1st column of images */}
                        <View
                          style={{
                            backgroundColor: 'white',
                            // paddingBottom:"5%"
                            // borderWidth: 1,
                            // borderRadius: 7,
                            // borderColor: '#ddd',
                            // borderBottomWidth: 0,
                            // shadowColor: '#000',
                            // shadowOffset: { width: 2, height: 2 },
                            // shadowOpacity: 0.8,
                            // shadowRadius: 2,
                            // elevation: 1,
                            marginTop: 10,
                            justifyContent: "center",
                            alignItems: "center",
                            margin: "10%"
                          }}>
                          <View style={{
                            width: 80, height: 80,
                          }}>{/*image 1*/}
                            {this.state.showimage7 == false &&
                              <TouchableOpacity
                                style={{}}
                                onPress={this.handleChangeExcellent.bind(this)}
                              >
                                <Image
                                  style={{ width: "100%", height: "100%" }}
                                  source={require('../assets/excellent_credit.png')}
                                />
                              </TouchableOpacity>
                            }
                            {(this.state.showimage7 == true) &&
                              <Image
                                style={{ width: "100%", height: "100%" }}
                                source={require('../assets/Tick_mark.png')}
                              />
                            }
                          </View>
                          <View >
                            <Text style={{ fontWeight: "bold", color: "#2959a7" }}>{this.state.ques3_text1.Text}</Text>
                          </View>
                        </View>
                        <View
                          style={{
                            backgroundColor: 'white',
                            // paddingBottom:"5%"
                            // borderWidth: 1,
                            // borderRadius: 7,
                            // borderColor: '#ddd',
                            // borderBottomWidth: 0,
                            // shadowColor: '#000',
                            // shadowOffset: { width: 2, height: 2 },
                            // shadowOpacity: 0.8,
                            // shadowRadius: 2,
                            // elevation: 1,
                            marginTop: 10,
                            justifyContent: "center",
                            alignItems: "center",
                            margin: "10%"
                          }}>
                          <View style={{
                            width: 80, height: 80
                          }}>{/* image 2 */}
                            {this.state.showimage8 == false &&
                              <TouchableOpacity
                                onPress={this.handleChangeGood.bind(this)}
                              >
                                <Image
                                  style={{ width: "100%", height: "100%" }}
                                  source={require('../assets/good_credit.png')}
                                />
                              </TouchableOpacity>
                            }
                            {(this.state.showimage8 == true) &&
                              <Image
                                style={{ width: "100%", height: "100%" }}
                                source={require('../assets/Tick_mark.png')}
                              />
                            }
                          </View>
                          <View >
                            <Text style={{ fontWeight: "bold", color: "#2959a7" }}>{this.state.ques3_text2.Text}</Text>
                          </View>
                        </View>
                      </View>






                      <View style={{}}>{/* second column of images */}
                        <View
                          style={{
                            backgroundColor: 'white',
                            // paddingBottom:"5%"
                            // borderWidth: 1,
                            // borderRadius: 7,
                            // borderColor: '#ddd',
                            // borderBottomWidth: 0,
                            // shadowColor: '#000',
                            // shadowOffset: { width: 2, height: 2 },
                            // shadowOpacity: 0.8,
                            // shadowRadius: 2,
                            // elevation: 1,
                            marginTop: 10,
                            justifyContent: "center",
                            alignItems: "center",
                            margin: "10%"
                          }}>
                          <View style={{
                            height: 80, width: 80
                          }}>{/* 3rd image */}
                            {this.state.showimage9 == false &&
                              <TouchableOpacity
                                onPress={this.handleChangeFair.bind(this)}
                              >
                                <Image
                                  style={{ width: "100%", height: "100%" }}
                                  source={require('../assets/fair_credit.png')}
                                />
                              </TouchableOpacity>
                            }
                            {(this.state.showimage9 == true) &&
                              <Image
                                style={{ width: "100%", height: "100%" }}
                                source={require('../assets/Tick_mark.png')}
                              />
                            }
                          </View>
                          <View >
                            <Text style={{ fontWeight: "bold", color: "#2959a7" }}>{this.state.ques3_text3.Text}</Text>
                          </View>
                        </View>
                        <View
                          style={{
                            backgroundColor: 'white',
                            // paddingBottom:"5%"
                            margin: "10%",
                            // borderWidth: 1,
                            // borderRadius: 7,
                            // borderColor: '#ddd',
                            // borderBottomWidth: 0,
                            // shadowColor: '#000',
                            // shadowOffset: { width: 2, height: 2 },
                            // shadowOpacity: 0.8,
                            // shadowRadius: 2,
                            // elevation: 1,
                            marginTop: 10,
                            justifyContent: "center",
                            alignItems: "center"
                          }}>
                          <View style={{
                            width: 80, height: 80,
                          }}>{/**4th image */}
                            {this.state.showimage10 == false &&
                              <TouchableOpacity
                                onPress={this.handleChangePoor.bind(this)}
                              >
                                <Image
                                  style={{ width: "100%", height: "100%" }}
                                  source={require('../assets/poor_credit.png')}
                                />
                              </TouchableOpacity>
                            }
                            {(this.state.showimage10 == true) &&
                              <Image
                                style={{ width: "100%", height: "100%" }}
                                source={require('../assets/Tick_mark.png')}
                              />
                            }
                          </View>
                          <View >
                            <Text style={{ fontWeight: "bold", color: "#2959a7" }}>{this.state.ques3_text4.Text}</Text>
                          </View>
                        </View>
                      </View>




                    </View>


                  </Options2>
                  <NextButton>
                    {this.state.showimage7 == false && this.state.showimage8 == false && this.state.showimage9 == false && this.state.showimage10 == false ?
                      <View style={{ alignSelf: "center", marginTop: 10 }}>
                        <Text style={{ color: "red" }}>
                          {this.state.errorvalue2}
                        </Text>
                      </View> :
                      <View style={{ flexDirection: 'row', justifyContent: "center", marginTop: "10%" }}>

                        <Button block
                          style={styles.next_btnstyle}
                          onPress={this.nextButtonQuick9.bind(this)}>
                          <Text style={{ fontSize: hp(1.6) }}>Next</Text>
                        </Button>

                      </View>
                    }
                  </NextButton>

                </Contain>

              }
              {this.state.index === 3 &&
                <Contain style={{ alignItems: "center", justifyContent: "center" }}>
                  <HeadImage style={{ alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ fontSize: hp(2.5), fontWeight: "bold", textAlign: "center", color: "#40b049" }} >
                      {this.state.ques4_ques}(0-2000000)
                    </Text>
                  </HeadImage>

                  <Options style={{ width: "100%", alignItems: "center", justifyContent: "center" }}>
                    <View style={{ width: "100%", backgroundColor: '', justifyContent: "center", padding: "7%" }}>
                      <View>
                        <MarkSlider
                          value={this.state.value}
                          thumbTintColor="green"
                          step={2500}
                          max={2000000}
                          marks={marks}
                          // style={{transform: [ { scaleY: 3.0 }],borderRadius:40}}
                          onChange={(value) => {
                            this.setState({ value2: value })
                            console.log(this.state.value2)
                          }
                          }
                          onSlidingComplete={this.change.bind(this)}
                          minimumTrackTintColor="blue"
                          maximumTrackTintColor="green"
                        />
                      </View>
                      <View style={{ margin: "8%" }}>
                        <Text style={{ fontSize: 20, textAlign: "center" }}>{"$" + this.state.value2}</Text>
                      </View>
                    </View>
                  </Options>
                  <NextButton style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                    {/* <Text>big toes</Text> */}
                    <Button
                      style={styles.next_btnstyle}
                      onPress={this.nextButtonQuick9.bind(this)}>
                      <Text style={{ fontSize: hp(1.6) }}>Next</Text>
                    </Button>

                  </NextButton>
                </Contain>

              }
              {this.state.index === 4 &&
                <Contain style={{ alignItems: "center", justifyContent: "center" }}>
                  <HeadImage style={{ alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ fontSize: hp(2.5), fontWeight: "bold", textAlign: "center", color: "#40b049" }} >
                      {this.state.ques5_ques}(0-2000000)
                    </Text>
                  </HeadImage>

                  <Options style={{ width: "100%", alignItems: "center", justifyContent: "center" }}>
                    <View style={{ width: "100%", backgroundColor: '', justifyContent: "center", padding: "7%" }}>
                      <View>
                        <MarkSlider
                          value={this.state.mortage_value}
                          thumbTintColor="green"
                          step={2500}
                          max={2000000}
                          marks={marks2}
                          // onChange={value =>this.setState({ value1:value })}
                          onChange={value => this.setState({ mortage_value2: value })}
                          onSlidingComplete={this.Mortage.bind(this)}
                          // onValueChange=
                          minimumTrackTintColor="blue"
                          maximumTrackTintColor="green"
                        />
                      </View>
                      <View style={{ margin: "8%" }}>
                        <Text style={{ fontSize: 20, textAlign: "center" }}>{"$" + this.state.mortage_value2}</Text>
                      </View>
                    </View>
                  </Options>
                  <NextButton style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>

                    <Button
                      style={styles.next_btnstyle_2}
                      onPress={this.nextButtonQuick9.bind(this)}>
                      <Text style={{ fontSize: hp(1.6) }}>Next</Text>
                    </Button>
                  </NextButton>
                </Contain>

              }
              {this.state.index === 5 &&
                <Contain style={{ alignItems: "center", justifyContent: "center" }}>
                  <HeadImage style={{ alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ fontSize: hp(2.5), fontWeight: "bold", textAlign: "center", color: "#40b049" }} >
                      {this.state.ques6_ques}(0-100)
                    </Text>
                  </HeadImage>

                  <Options style={{ width: "100%", alignItems: "center", justifyContent: "center" }}>
                    <View style={{ width: "100%", backgroundColor: '', justifyContent: "center", padding: "7%" }}>
                      <View>
                        <MarkSlider
                          value={this.state.current_interest_value}
                          thumbTintColor="green"
                          step={0.50}
                          max={100}
                          marks={marks3}
                          // onChange={value =>this.setState({ value1:value })}
                          onChange={value => this.setState({ current_interest_value2: value })}
                          onSlidingComplete={this.CurrentInterest.bind(this)}
                          // onValueChange=
                          minimumTrackTintColor="blue"
                          maximumTrackTintColor="green"
                        />
                      </View>
                      <View style={{ margin: "8%" }}>
                        <Text style={{ fontSize: 20, textAlign: "center" }}>{this.state.current_interest_value2 + "%"}</Text>
                      </View>
                    </View>
                  </Options>
                  <NextButton style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>

                    <Button
                      style={styles.next_btnstyle_2}
                      onPress={this.nextButtonQuick9.bind(this)}>
                      <Text style={{ fontSize: hp(1.6) }}>Next</Text>
                    </Button>
                  </NextButton>
                </Contain>

              }

              {this.state.index === 6 &&
                <Contain style={{ alignItems: "center", justifyContent: "center" }}>
                  <HeadImage style={{ alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ fontSize: hp(2.5), fontWeight: "bold", textAlign: "center", color: "#40b049" }} >
                      {this.state.ques7_ques}(0-100)
                    </Text>
                  </HeadImage>

                  <Options style={{ width: "100%", alignItems: "center", justifyContent: "center" }}>
                    <View style={{ width: "100%", backgroundColor: '', justifyContent: "center", padding: "7%" }}>
                      <View>
                        <MarkSlider
                          value={this.state.down_payment_value}
                          thumbTintColor="green"
                          step={1}
                          max={100}
                          marks={marks4}
                          // onChange={value =>this.setState({ value1:value })}
                          onChange={value => this.setState({ down_payment_value2: value })}
                          onSlidingComplete={this.DownPayment.bind(this)}
                          // onValueChange=
                          minimumTrackTintColor="blue"
                          maximumTrackTintColor="green"
                        />
                      </View>
                      <View style={{ margin: "8%" }}>
                        <Text style={{ fontSize: 20, textAlign: "center" }}>{this.state.down_payment_value2 + "%"}</Text>
                      </View>
                    </View>
                  </Options>
                  <NextButton style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>

                    <Button
                      style={styles.next_btnstyle_2}
                      onPress={this.nextButtonQuick9.bind(this)}>
                      <Text style={{ fontSize: hp(1.6) }}>Next</Text>
                    </Button>
                  </NextButton>
                </Contain>

              }
              {this.state.index === 7 &&
                <Contain style={{ alignItems: "center", justifyContent: "center" }}>
                  <HeadImage style={{ alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ fontSize: hp(2.5), fontWeight: "bold", textAlign: "center", color: "#40b049" }} >
                      {this.state.ques8_ques}
                    </Text>
                  </HeadImage>

                  <Options style={{ alignItems: "center", justifyContent: "center" }}>
                    <View style={{ alignItems: "center", justifyContent: "center", padding: "7%" }}>
                      <View style={{ flexDirection: "row", justifyContent: "center" }}>
                        {/* <View style={{ flexDirection: 'row' }}> */}



                        <Button style={{ backgroundColor: this.state.yes1, width: "30%", justifyContent: "center", borderRadius: 5 }} onPress={() => {
                          this.setState({ yes1: "green", no1: "#ECE9E9" })
                          this.rundelay(this.handleChangeBankruptcyYes.bind(this))
                        }
                        }>

                          <Text style={{ color: this.state.yes1 == "green" ? "white" : "black", fontSize: hp(1.8), textAlign: "center" }}>{this.state.ques8_text1.Text}</Text>

                        </Button>
                        <Text style={{ width: 50 }}>  </Text>
                        <Button style={{ backgroundColor: this.state.no1, width: "30%", justifyContent: "center", borderRadius: 5 }} onPress={() => {
                          this.setState({ no1: "red", yes1: "#ECE9E9" })
                          this.rundelay(this.handleChangeBankruptcyNo.bind(this))
                        }
                        }>
                          <Text style={{ color: this.state.no1 == "red" ? "white" : "black", fontSize: hp(1.8), textAlign: "center" }}>{this.state.ques8_text2.Text}</Text>
                        </Button>
                      </View>
                    </View>



                  </Options>
                  <NextButton>
                    {this.state.showimage11 == false && this.state.showimage12 == false ?
                      <View style={{ alignSelf: "center" }}>
                        <Text style={{ color: "red" }}>
                          {this.state.errorvalue3}
                        </Text>
                      </View> :
                      <View style={{ flexDirection: 'row', justifyContent: "center", marginTop: "10%" }}>

                        <Button block
                          style={styles.next_btnstyle_2}
                          onPress={this.nextButtonQuick9.bind(this)}>
                          <Text style={{ fontSize: hp(1.6) }}>Next</Text>
                        </Button>

                      </View>
                    }
                  </NextButton>

                </Contain>

              }
              {this.state.index === 8 &&
                <Contain style={{ alignItems: "center", justifyContent: "center" }}>
                  <HeadImage style={{ alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ fontSize: hp(2.5), fontWeight: "bold", textAlign: "center", color: "#40b049" }} >
                      {this.state.ques9_ques}
                    </Text>
                  </HeadImage>

                  <Options style={{ alignItems: "center", justifyContent: "center" }}>
                    <View style={{ alignSelf: "center", width: 300 }}>
                      <Dropdown inputContainerStyle={{ borderBottomColor: "white" }}
                        baseColor={"black"}
                        containerStyle={styles.dropdown2}
                        label={!this.state.loan_type ? 'Select' : ''}
                        data={loan_type_data}
                        onChangeText={this.handleChangeLoanType.bind(this)}
                        value={this.state.loan_type}
                        itemColor={"blue"}
                        // pickerStyle={{ backgroundColor: 'white' }}
                        selectedItemColor={"black"}
                        dropdownPosition={1}
                      // overlayStyle={{opacity:0.5}}


                      // handleChangeLoanType(value){
                      //     this.setState({
                      //       loan_type:value,
                      //       index:9,
                      //       desireLoanType_data:value.toString()
                      //     })
                      //   }

                      />
                      {/* <CDD  
                          onChangeText={(value) => {this.setState({
                                    loan_type:value,
                                    index:9,
                                    desireLoanType_data:value.toString()
                                 
                                  }
                                  )}
                          }
                          fontSize={15}
                          value={this.state.loan_type==""?"Select an option ":this.state.loan_type+"   "}
                          array={["Fixed","Adjustable"]}
                          height={90} 
                          rgba={[255,245,235,1]}
                          scrollviewstyle={{width:250, backgroundColor:'#fff5eb'}}
                     /> */}
                    </View>

                  </Options>
                  <NextButton>
                    {!this.state.loan_type ?
                      <View style={{ alignSelf: "center" }}>
                        <Text style={{ color: "red" }}>
                          {this.state.errorvalue4}
                        </Text>
                      </View> :
                      <View style={{ flexDirection: 'row', justifyContent: "center", marginTop: "10%" }}>

                        <Button block
                          style={styles.next_btnstyle_2}
                          onPress={this.nextButtonQuick9.bind(this)}>
                          <Text style={{ fontSize: hp(1.6) }}>Next</Text>
                        </Button>

                      </View>
                    }
                  </NextButton>
                </Contain>

              }
              {this.state.index === 9 &&
                <Contain style={{ alignItems: "center", justifyContent: "center" }}>
                  <HeadImage style={{ alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ fontSize: hp(2.5), fontWeight: "bold", textAlign: "center", color: "#40b049" }} >
                      {this.state.ques10_ques}
                    </Text>
                  </HeadImage>

                  <Options style={{ alignItems: "center", justifyContent: "center" }}>
                    <View style={{ alignItems: "center", justifyContent: "center", padding: "7%" }}>
                      <View style={{ flexDirection: "row", justifyContent: "center" }}>


                        <Button style={{ backgroundColor: this.state.yes2, width: "30%", justifyContent: "center", borderRadius: 5 }}

                          onPress={() => {
                            this.setState({ yes2: "green", no2: "#ECE9E9" })
                            this.rundelay(this.handleChangeVeteranYes.bind(this))
                          }
                          }

                        >
                          <Text style={{ color: this.state.yes2 == "green" ? "white" : "black", fontSize: hp(1.8), textAlign: "center" }}>{this.state.ques10_text1.Text}</Text>

                        </Button>
                        <Text style={{ width: 50 }}>  </Text>
                        <Button style={{ backgroundColor: this.state.no2, width: "30%", justifyContent: "center", borderRadius: 5 }}

                          onPress={() => {
                            this.setState({ no2: "red", yes2: "#ECE9E9" })
                            this.rundelay(this.handleChangeVeteranNo.bind(this))
                          }
                          }

                        >

                          <Text style={{ color: this.state.no2 == "red" ? "white" : "black", fontSize: hp(1.8), textAlign: "center" }}>{this.state.ques10_text2.Text}</Text>
                        </Button>
                      </View>
                    </View>
                  </Options>
                  <NextButton>
                    {this.state.showimage13 == false && this.state.showimage14 == false ?
                      <View style={{ alignSelf: "center" }}>
                        <Text style={{ color: "red" }}>
                          {this.state.errorvalue5}
                        </Text>
                      </View> :
                      <View style={{ flexDirection: 'row', justifyContent: "center", marginTop: "10%" }}>

                        <Button block
                          style={styles.next_btnstyle_2}
                          onPress={this.nextButtonQuick9.bind(this)}>
                          <Text style={{ fontSize: hp(1.6) }}>Next</Text>
                        </Button>

                      </View>
                    }
                  </NextButton>
                </Contain>

              }
              {this.state.index === 10 &&
                <Contain style={{ alignItems: "center", justifyContent: "center" }}>
                  <HeadImage style={{ alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ fontSize: hp(2.5), fontWeight: "bold", textAlign: "center", color: "#40b049" }} >
                      {this.state.ques11_ques}
                    </Text>
                  </HeadImage>

                  <Options style={{ alignItems: "center", justifyContent: "center" }}>
                    <View style={{ alignSelf: "center", width: 300 }}>
                      <Dropdown inputContainerStyle={{ borderBottomColor: "white" }}
                        baseColor={"black"}
                        containerStyle={styles.dropdown2}
                        label={!this.state.mortage_late ? 'Select' : ''}
                        data={mortage_late_data}
                        onChangeText={this.handleChangeMortageLates.bind(this)}
                        value={this.state.mortage_late}
                        itemColor={"blue"}
                        selectedItemColor={"black"}
                        // itemCount={6}
                        // pickerStyle={{ backgroundColor: 'rgba(255, 245, 235, 1)' }}
                        dropdownPosition={1}
                      />



                      {/* <CDD
                        onChangeText={(value) => {
                          this.setState({
                            mortage_late: value,
                            mortageRates_data: value.toString(),
                            index: 11
                          })
                        }
                        } */}
                      {/* value={this.state.mortage_late == "" ? "Select an option" : this.state.mortage_late + "   "}
                        array={mortage_late_data}
                        fontSize={15}
                        height={150}
                        rgba={[255, 245, 235, 1]}
                        scrollviewstyle={{ width: 250, backgroundColor: '#fff5eb' }}
                      /> */}
                    </View>


                  </Options>
                  <NextButton>
                    {!this.state.mortage_late ?
                      <View style={{ alignSelf: "center" }}>
                        <Text style={{ color: "red" }}>
                          {this.state.errorvalue6}
                        </Text>
                      </View> :
                      <View style={{ flexDirection: 'row', justifyContent: "center", marginTop: "10%" }}>

                        <Button block
                          style={styles.next_btnstyle}
                          onPress={this.nextButtonQuick9.bind(this)}>
                          <Text style={{ fontSize: hp(1.6) }}>Next</Text>
                        </Button>

                      </View>
                    }
                  </NextButton>
                </Contain>

              }
              {this.state.index === 11 &&
                <Contain style={{ alignItems: "center", justifyContent: "center" }}>
                  <HeadImage style={{ alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ fontSize: hp(2.5), fontWeight: "bold", textAlign: "center", color: "#40b049" }} >
                      {this.state.ques12_ques}
                    </Text>
                  </HeadImage>

                  <Options style={{ alignItems: "center", justifyContent: "center" }}>
                    <View style={{ alignItems: "center", justifyContent: "center", padding: "7%" }}>
                      <View style={{ flexDirection: "row", justifyContent: "center" }}>


                        <Button style={{ backgroundColor: this.state.yes3, width: "30%", justifyContent: "center", borderRadius: 5 }}
                          onPress={() => {
                            this.setState({ yes3: "green", no3: "#ECE9E9" })
                            this.rundelay(this.handleChangeBorrowYes.bind(this))
                          }
                          }
                        >
                          <Text style={{ color: this.state.yes3 == "green" ? "white" : "black", fontSize: hp(1.8), textAlign: "center" }}>{this.state.ques10_text1.Text}</Text>

                        </Button>
                        <Text style={{ width: 50 }}>  </Text>
                        <Button style={{ backgroundColor: this.state.no3, width: "30%", justifyContent: "center", borderRadius: 5 }}
                          onPress={() => {
                            this.setState({ no3: "red", yes3: "#ECE9E9" })
                            this.rundelay(this.handleChangeBorrowNo.bind(this))
                          }
                          }
                        >
                          <Text style={{ color: this.state.no3 == "red" ? "white" : "black", fontSize: hp(1.8), textAlign: "center" }}>{this.state.ques10_text2.Text}</Text>
                        </Button>
                      </View>
                    </View>
                  </Options>
                  <NextButton>
                    {this.state.showimage15 == false && this.state.showimage16 == false ?
                      <View style={{ alignSelf: "center" }}>
                        <Text style={{ color: "red" }}>
                          {this.state.errorvalue7}
                        </Text>
                      </View> :
                      <View style={{ flexDirection: 'row', justifyContent: "center", marginTop: "10%" }}>

                        <Button block
                          style={styles.next_btnstyle}
                          onPress={this.nextButtonQuick9.bind(this)}>
                          <Text style={{ fontSize: hp(1.6) }}>Next</Text>
                        </Button>

                      </View>
                    }
                  </NextButton>
                </Contain>

              }
              {this.state.index === 12 &&
                <View>
                  <View style={styles.heading1}>
                    <View style={{ alignContent: 'center', margin: "3%" }}>
                      <Text style={styles.headingFont} >
                        {this.state.ques13_ques}
                      </Text>
                    </View>
                  </View>
                  <View style={{}}>
                    <TextInput
                      // style={{ fontSize: "2px", maxHeight: "15px", width: "50px", height: "15px",borderTopWidth:0,borderLeftWidth:0,borderRightWidth:0 }}

                      placeholder={this.state.ques13_text1.Text}
                      placeholderTextColor={'black'}
                      inputStyle={{ fontFamily: 'Impact', fontSize: 5 }}
                      autoFocus={true}
                      // onFocus={this.setState.borderBottomColor=}
                      style={this.state.formstyle1}
                      onBlur={this.onBlur1.bind(this)}
                      onFocus={this.onFocus1.bind(this)}
                      returnKeyType={"next"}
                      onSubmitEditing={(event) => {
                        this.refs.currentZip.focus();
                      }}
                      underlineColorAndroid='transparent'
                      onChangeText={this.Address.bind(this)}
                      value={this.state.address}>
                    </TextInput>
                    {!this.state.address ?
                      <View style={{ width: 250, alignSelf: "flex-start", paddingLeft: '11%' }}>
                        <Text style={{ color: "red", height: 20, fontSize: 10 }}>
                          {this.state.errorvalue8}
                        </Text>
                      </View> :
                      <Text></Text>
                    }
                    <TextInput placeholder={this.state.ques13_text4.Text}
                      keyboardType="numeric"
                      placeholderTextColor={'black'}
                      ref='currentZip'
                      returnKeyType={"next"}
                      style={this.state.formstyle2}
                      onBlur={this.onBlur2.bind(this)}
                      onFocus={this.onFocus2.bind(this)}
                      maxLength={5}
                      underlineColorAndroid='transparent'
                      onChangeText={this.Zip.bind(this)} value={this.state.zip}

                      onSubmitEditing={(event) => {
                        this.checkZip(this.state.zip)
                        this.refs.states.focus();
                      }}
                    >

                    </TextInput>
                    {(!this.state.zip || (this.state.zip < 5) == false) ?
                      <View style={{ width: 250, alignSelf: "flex-start", paddingLeft: '11%' }}>
                        <Text style={{ color: "red", height: 20, fontSize: 10 }}>
                          {this.state.errorvalue9}
                        </Text>
                      </View> :
                      <Text></Text>
                    }
                    <View style={{ alignSelf: "center", width: 300, marginTop: 0 }}>
                      {/* <Dropdown inputContainerStyle={{ borderBottomColor: "white" }}
                        fontSize={deviceHeight < 650 ? 12 : 18}
                        baseColor={"black"}
                        containerStyle={styles.dropdown}
                        label={!this.state.property ? this.state.ques13_text3.Text : ''}
                        data={property_data2}//property_data
                              onChangeText={this.Property.bind(this)}
                              value={this.state.property}
                        itemColor={"blue"}
                        pickerStyle={{ backgroundColor: 'rgba(255, 245, 235, 1)' }}
                        selectedItemColor={"black"}
                        dropdownPosition={1}
                      /> */}
                      <TextInput placeholder="State"

                        placeholderTextColor={'black'}

                        style={this.state.formstyle3}
                        onBlur={this.onBlur3.bind(this)}
                        onFocus={this.onFocus3.bind(this)}
                        ref="states"
                        returnKeyType={"next"}
                        onSubmitEditing={(event) => {
                          this.refs.currentCity.focus();
                        }}
                        underlineColorAndroid='transparent'
                        onChangeText={this.Property.bind(this)}
                        value={this.state.property}

                      >

                      </TextInput>
                      {/* <CDD  
                          onChangeText={(value) => {this.setState({
                                          property:value
                                        })
                                  }
                          }
                          value={this.state.property==""?"click me":this.state.property}
                          array={property_data}
                          height={250} 
                          rgba={[255,245,235,1]}
                          scrollviewstyle={{width:250, backgroundColor:'#fff5eb'}}
                     />*/}
                    </View>
                    {!this.state.property ?
                      <View style={{ width: 250, alignSelf: "flex-start", paddingLeft: '11%' }}>
                        <Text style={{ color: "red", height: 20, fontSize: 10 }}>
                          {this.state.stateerrorvalue8}
                        </Text>
                      </View> :
                      <Text></Text>
                    }
                    <TextInput style={{ marginTop: 10 }} placeholder={this.state.ques13_text2.Text} placeholderTextColor={'black'}
                      underlineColorAndroid='transparent'
                      style={this.state.formstyle8}
                      ref="currentCity"
                      onBlur={this.onBlur8.bind(this)}
                      onFocus={this.onFocus8.bind(this)}
                      onChangeText={this.City.bind(this)}
                      autoCapitalize='none'
                      value={this.state.city}>
                    </TextInput>
                    {(!this.state.city || this.state.validcity == false) ?
                      <View style={{ width: 250, alignSelf: "flex-start", paddingLeft: '11%' }}>
                        <Text style={{ color: "red", height: 20, fontSize: 10 }}>
                          {this.state.cityerrorvalue}
                        </Text>
                      </View> :
                      <Text></Text>
                    }
                  </View>
                  <View style={{ flexDirection: 'row', justifyContent: "center", marginTop: "10%" }}>

                    <Button block
                      style={styles.next_btnstyle}
                      onPress={this.nextButtonQuick9.bind(this)}>
                      <Text style={{ fontSize: hp(1.6) }}>Next</Text>
                    </Button>

                  </View>
                </View>
              }
              {this.state.index === 13 &&
                <View>
                  <View style={styles.heading1}>
                    <View style={{ alignContent: 'center', padding: 5 }}>
                      <Text style={styles.headingFont} >
                        {this.state.ques14_ques}
                      </Text>
                    </View>
                  </View>
                  <View style={{}}>
                    <TextInput placeholder={this.state.ques14_text1.Text} placeholderTextColor={'black'}
                      underlineColorAndroid='transparent'
                      style={this.state.formstyle4}
                      onBlur={this.onBlur4.bind(this)}
                      onFocus={this.onFocus4.bind(this)}
                      onChangeText={this.FName.bind(this)}
                      autoFocus={true}
                      returnKeyType={"next"}
                      Editing={(event) => {
                        this.refs.lastName.focus();
                      }}
                      value={this.state.fname}>
                    </TextInput>
                    {(!this.state.fname || this.state.validfname == false) ?
                      <View style={{ width: 250, alignSelf: "flex-start", paddingLeft: '11%' }}>
                        <Text style={{ color: "red", height: 20, fontSize: 10 }}>
                          {this.state.errorvalue10}
                        </Text>
                      </View> :
                      <Text></Text>
                    }
                    <TextInput placeholder={this.state.ques14_text2.Text} placeholderTextColor={'black'}
                      underlineColorAndroid='transparent'
                      style={this.state.formstyle5}
                      onBlur={this.onBlur5.bind(this)}
                      onFocus={this.onFocus5.bind(this)}
                      onChangeText={this.LName.bind(this)}
                      ref="lastName"
                      returnKeyType={"next"}
                      onSubmitEditing={(event) => {
                        this.refs.email.focus();
                      }}
                      value={this.state.lname}>
                    </TextInput>
                    {(!this.state.lname || this.state.validlname == false) ?
                      <View style={{ width: 250, alignSelf: "flex-start", paddingLeft: '11%' }}>
                        <Text style={{ color: "red", height: 20, fontSize: 10 }}>
                          {this.state.errorvalue11}
                        </Text>
                      </View> :
                      <Text></Text>
                    }
                    <TextInput placeholder={this.state.ques14_text3.Text} placeholderTextColor={'black'}
                      underlineColorAndroid='transparent'
                      style={this.state.formstyle6}
                      onBlur={this.onBlur6.bind(this)}
                      onFocus={this.onFocus6.bind(this)}
                      onChangeText={this.Email.bind(this)}
                      ref="email"
                      returnKeyType={"next"}
                      onSubmitEditing={(event) => {
                        this.refs.PhNumber.focus();
                      }}
                      value={this.state.email}>
                    </TextInput>
                    <View style={{ width: 250, alignSelf: "flex-start", paddingLeft: '11%' }}>
                      <Text style={{ color: "red", height: 20, fontSize: 10 }}>
                        {this.state.errorvalue21}
                      </Text>
                    </View>
                    {/* ate.email? 
                      <View  style={{width:250,alignSelf:"center"}}>
                        <Text style={{color:"red"}}>
                          {this.state.errorvalue12}
                        </Text>
                      </View> :
                      <Text></Text>
                    */}
                    <TextInput placeholder={this.state.ques14_text4.Text}
                      keyboardType="numeric"
                      placeholderTextColor={'black'}
                      underlineColorAndroid='transparent'
                      style={this.state.formstyle7}
                      onBlur={this.onBlur7.bind(this)}
                      onFocus={this.onFocus7.bind(this)}
                      onChangeText={this.Phone.bind(this)}
                      ref="PhNumber"
                      value={this.state.phone}>
                    </TextInput>
                    {!this.state.phone ?
                      <View style={{ width: 250, alignSelf: "flex-start", paddingLeft: '11%' }}>
                        <Text style={{ color: "red", height: 20, fontSize: 10 }}>
                          {this.state.errorvalue13}
                        </Text>
                      </View> :
                      <Text></Text>
                    }
                  </View>
                  <Toast
                    ref="toast"
                    style={{ backgroundColor: 'white' }}
                    position='top'
                    positionValue={200}
                    fadeInDuration={750}
                    fadeOutDuration={1000}
                    opacity={0.8}
                    textStyle={{ color: 'white' }}
                  />
                </View>
              }
              <View style={styles.buttoncss}>

                {/* <View >
                  <Display
                    enable={this.state.enable_back}
                  >
                    <Button block
                      style={styles.back_btnstyle}
                      onPress={this.backButtonQuick.bind(this)}>
                      <Text>Back</Text>
                    </Button>
                  </Display>
                </View> */}
                <View style={this.state.index != 0 ? { width: 30 } : { width: 0 }}>

                </View>
                <View >
                  <Display
                    enable={this.state.enable_next}
                  >
                    <Button block
                      style={styles.next_btnstyle}
                      onPress={this.nextButtonQuick.bind(this)}>
                      <Text style={{ fontSize: hp(1.6) }}>Next</Text>
                    </Button>
                  </Display>
                </View>
                <View >
                  <Display
                    enable={this.state.enable_submit}
                  >
                    <Button block
                      style={styles.submit_btnstyle}
                      onPress={this.SubmitButton.bind(this)}>
                      <Text  >Submit</Text>
                    </Button>
                  </Display>
                </View>

              </View>

            </View>
          </Content>
          {/* <Footer style={{elevation: 2,borderTopWidth:0.5,backgroundColor:"white",height:60}}>
            <View style={{alignItems: 'center',flex: 1,flexDirection:"row",justifyContent: 'center'}}>
              
                <TouchableOpacity style={styles.privacy}
                                  onPress={this.PrivacyPolicy.bind(this)}>
                  <Text style={{color:"red",textDecorationLine: "underline"}}>Privacy Policy</Text>
                </TouchableOpacity>
              
                <TouchableOpacity style={styles.terms}
                                  onPress={this.Terms.bind(this)}>
                  <Text style={{color:"green",textDecorationLine: "underline"}}>Terms & Conditions</Text>
                </TouchableOpacity>
              
            </View>
          </Footer> */}

        </Container>
      );
    }
    else if (this.state.isSubmitting == false) {
      return (
        <View
          style={styles.container2}
        >
          {/* <View style={{ justifyContent: "center", backgroundColor: "#dde3ed", alignItems: "center", height: 120, width: 120, borderRadius: 15, borderColor: "#FFF", imageAlign: "center", elevation: 2 }}>
            <Image
              style={{ height: 100, width: 100 }}
              source={require('../ic_launcher.png')}
            />
          </View> */}

        </View>

      );
    }
    else if (this.state.submitting) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View>
            <Image style={{ height: 200, width: 200 }} source={require('../assets/submit1.gif')}
            />
          </View>
          <Text style={{ fontSize: 24 }}>Submitted Successfully </Text>
        </View>
      )
    }
    else {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
          <Text>Please Wait </Text>
        </View>
      );
    }
  }
}
const Contain = styled.View`
  flex: 1;
`;
const HeadImage = styled.View`
  height: ${hp('30%')};
  width: ${wp('80%')};
  
`;
const Question = styled.View`
  height: ${hp('20%')};
  width: ${wp('80%')};
  justifyContent:${"center"};
  alignItems:${"center"};
  
`;
const Question2 = styled.View`
  height: ${hp('10%')};
  width: ${wp('80%')};
  justifyContent:${"center"};
  alignItems:${"center"};
  
`;
const Options = styled.View`
  height: ${hp('25%')};
  width: ${wp('80%')};
  
  justifyContent:${"center"};
  alignItems:${"center"};
`;
const Options2 = styled.View`
  height: ${hp('35%')};
  width: ${wp('80%')};
  
  justifyContent:${"center"};
  alignItems:${"center"};
`;
const NextButton = styled.View`
  height: ${hp('10%')};
  width: ${wp('80%')};
`;
const Heading = styled.View`
  height: ${hp('10%')};
  
`;
const HeadImage2 = styled.View`
  height: ${hp('20%')};
  width: ${wp('80%')};
  
`;


