import React from 'react';
import { View, Image, TextInput, TouchableOpacity, Alert, Animated, ActivityIndicator } from 'react-native';
import Display from 'react-native-display';
import MarkSlider from 'react-native-mark-slider';
import {
  Button,
  Text,
  Fonts,
  Container,
  Header,
  Content,
  Footer,

} from "native-base";
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
console.log(deviceHeight);
console.log(width);
class NavigationDrawerStructure extends React.Component {
  static navigationOptions = {
    header: null,
  };
  toggleDrawer = () => {
    //this.props.navigationProps.toggleDrawer();
    this.props.navigationProps.dispatch(DrawerActions.toggleDrawer())

  };
  render() {
    return (
      <View style={{ flexDirection: 'row', backgroundColor: "white" }}>
        <TouchableOpacity onPress={this.backButtonQuick} style={{ justifyContent: "center" }}  >
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
export default class Page1 extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: <NavigationDrawerStructure navigationProps={navigation} />
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
      yes1: "#ECE9E9",
      yes2: "#ECE9E9",
      yes3: "#ECE9E9",
      no1: "#ECE9E9",
      no2: "#ECE9E9",
      no3: "#ECE9E9",
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
      isSubmitting: false,
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
      validfname: false,
      validlname: false,
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
      bankrupt_data: false,
      desireLoanType_data: "",
      isVeteran_data: false,
      borrowAddCash_data: false,
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
      enable_next: true,
      enable_submit: false,
      index: '1a',
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
      fname: "",
      lname: "",
      phone: "",
      email: "",
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
  Terms() {
    this.props.navigation.navigate("Terms")
  }
  Privacy() {
    this.setState({
      privacy_enable: true
    })
  }
  change(value) {
    this.setState({
      value: parseFloat(value),
      propertyValue_data: value
    });
  }
  checkValidCity(str) {
    let res = this.checkString(str);
    console.log(res);
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
    console.log(res);
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
    console.log(res);
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
    this.setState({
      mortage_value: parseFloat(value),
      mortageBal_data: value
    });
  }
  CurrentInterest(value) {
    this.setState({
      current_interest_value: value,
      currIntRate_data: value
    });
  }
  DownPayment(value) {
    this.setState({
      down_payment_value: value,
      downPayament_data: value
    });
  }
  SubmitButton() {
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
        errorvalue13: "Please enter the home phone.",
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
        //  enable_submit:true
      })

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
          "zip": this.state.zip_data
        }
        ,
        "firstName": this.state.fName_data,
        "lastName": this.state.lName_data,
        "emailId": this.state.email_data,
        "phoneNumber": this.state.phoneNumber_data
      }
      console.log(data);
      const self = this;
      const config = {
        url: 'http://69.55.49.121:3001/v1/userTemplates/register',


        data: data,
        method: 'post',

      };
      this.setState({ isReady: false, isSubmitting: true });


      axios(config).then((response) => {
        //this.props.navigation.navigate("Submit" )
        console.log(response);
        this.setState({
          submitting: true,
          index: 0,
          enable_back: false,
          enable_next: true,
          enable_submit: false,
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
          showimage16: false,
          value: 75000,
          mortage_value: 50000,
          current_interest_value: 75.50,
          down_payment_value: 15.00,
          bankrupt_data: false,
          loan_type: '',
          mortage_late: '',
          // mainModal:false,
          // isReady: false,
          address: '',
          yes1: "green",
          yes2: "green",
          yes3: "green",
          no1: "red",
          no2: "red",
          no3: "red",
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
        console.log(error.message);
      })

      setTimeout(() => {
        this.setState({ isReady: true, isSubmitting: false, submitting: false })

      }, 8000);

    }
  }
  Dismiss() {
    this.setState({ mainModal: !this.state.mainModal });
  }
  async componentWillMount() {

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
        enable_next: true,
        enable_back: true,
        enable_submit: false
      });
    }
    if (this.state.index == 0) {
      this.setState({
        index: this.state.index,
        enable_next: true,
        enable_back: false,
        enable_submit: false
      });
    }
    if (this.state.index == 1) {
      this.setState({
        //index: this.state.index,
        enable_next: true,
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
        enable_next: true,
        enable_back: true
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
      bankrupt_data: true,
      showimage11: true,
      index: 8,

    })
  }
  handleChangeBankruptcyNo() {
    this.setState({
      yes1: "#ECE9E9",
      no1: "red",
      bankrupt_data: false,
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
      isVeteran_data: true
    })
  }
  handleChangeVeteranNo() {
    this.setState({
      yes2: "#ECE9E9",
      no2: "red",
      showimage14: true,
      index: 10,
      isVeteran_data: false
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
      borrowAddCash_data: true
    })
  }
  handleChangeBorrowNo() {
    this.setState({
      yes3: "#ECE9E9",
      no3: "red",
      showimage16: true,
      index: 12,
      borrowAddCash_data: false
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

  render() {
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
    let mortage_late_data = ["I'm not behind", 'One', "One or Two", 'Two or More', "Three or More",];
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
        <Container style={{}}>
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


                <View>


                  <View style={{ height: 100, backgroundColor: 'white', justifyContent: "center" }}>
                    <View style={{ alignContent: 'center' }}>

                      <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }} >
                        {this.state.yesnoques0}
                      </Text>
                    </View>
                  </View>


                  <View style={{ justifyContent: "center", padding: "7%" }}>
                    <View style={styles.viewrifan}>
                      <View style={{ alignItems: 'flex-start', backgroundColor: 'white' }}>
                        <TouchableOpacity onPress={() => {
                          this.setState({ index: '2a', payCarInsurance_data: this.state.yesnoques0text1.Text })
                        }}>
                          <Text style={{ fontSize: 15, textAlign: "center" }}>{this.state.yesnoques0text1.Text}</Text>
                        </TouchableOpacity>


                      </View>
                      <View style={{ alignItems: 'flex-end', position: "absolute", right: 0 }}>

                        <TouchableOpacity onPress={() => {
                          this.setState({ index: '2a', payCarInsurance_data: this.state.yesnoques0text2.Text })
                        }}>
                          <Text style={{ fontSize: 15, textAlign: "center" }}>{this.state.yesnoques0text2.Text}</Text>
                        </TouchableOpacity>

                      </View>
                    </View>

                  </View>


                </View>
              }
              {this.state.index === '2a' &&


                <View>


                  <View style={{ height: 100, backgroundColor: 'white', justifyContent: "center" }}>
                    <View style={{ alignContent: 'center' }}>

                      <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }} >
                        {this.state.yesnoques1}
                      </Text>
                    </View>
                  </View>


                  <View style={{ justifyContent: "center", padding: "7%" }}>
                    <View style={styles.viewrifan}>
                      <View style={{ alignItems: 'flex-start', backgroundColor: 'white' }}>
                        <TouchableOpacity onPress={() => {
                          this.setState({ index: '3a', fastAndEasyFindout_data: this.state.yesnoques1text1.Text })
                        }}>
                          <Text style={{ fontSize: 15, textAlign: "center" }}>{this.state.yesnoques1text1.Text}</Text>
                        </TouchableOpacity>


                      </View>
                      <View style={{ alignItems: 'flex-end', position: "absolute", right: 0 }}>

                        <TouchableOpacity onPress={() => {
                          this.setState({ index: '3a', fastAndEasyFindout_data: this.state.yesnoques1text2.Text })
                        }}>
                          <Text style={{ fontSize: 15, textAlign: "center" }}>{this.state.yesnoques1text2.Text}</Text>
                        </TouchableOpacity>

                      </View>
                    </View>

                  </View>


                </View>
              }
              {this.state.index === '3a' &&


                <View>


                  <View style={{ height: 100, backgroundColor: 'white', justifyContent: "center" }}>
                    <View style={{ alignContent: 'center' }}>

                      <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }} >
                        {this.state.yesnoques2}
                      </Text>
                    </View>
                  </View>


                  <View style={{ justifyContent: "center", padding: "7%" }}>
                    <View style={styles.viewrifan}>
                      <View style={{ alignItems: 'flex-start', backgroundColor: 'white' }}>
                        <TouchableOpacity onPress={() => {
                          this.setState({ index: '4a', buyingHouse: this.state.yesnoques2text1.Text })
                        }}>
                          <Text style={{ fontSize: 15, textAlign: "center" }}>{this.state.yesnoques2text1.Text}</Text>
                        </TouchableOpacity>


                      </View>
                      <View style={{ alignItems: 'flex-end', position: "absolute", right: 0 }}>

                        <TouchableOpacity onPress={() => {
                          this.setState({ index: '4a', buyingHouse: this.state.yesnoques2text2.Text })
                        }}>
                          <Text style={{ fontSize: 15, textAlign: "center" }}>{this.state.yesnoques2text2.Text}</Text>
                        </TouchableOpacity>

                      </View>
                    </View>

                  </View>


                </View>
              }
              {this.state.index === '4a' &&


                <View>


                  <View style={{ height: 100, backgroundColor: 'white', justifyContent: "center" }}>
                    <View style={{ alignContent: 'center' }}>

                      <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }} >
                        {this.state.yesnoques3}
                      </Text>
                    </View>
                  </View>


                  <View style={{ justifyContent: "center", padding: "7%" }}>
                    <View style={styles.viewrifan}>
                      <View style={{ alignItems: 'flex-start', backgroundColor: 'white' }}>
                        <TouchableOpacity onPress={() => {
                          this.setState({ index: '5a', creditReportFirst: this.state.yesnoques3text1.Text })
                        }}>
                          <Text style={{ fontSize: 15, textAlign: "center" }}>{this.state.yesnoques3text1.Text}</Text>
                        </TouchableOpacity>


                      </View>
                      <View style={{ alignItems: 'flex-end', position: "absolute", right: 0 }}>

                        <TouchableOpacity onPress={() => {
                          this.setState({ index: '5a', creditReportFirst: this.state.yesnoques3text2.Text })
                        }}>
                          <Text style={{ fontSize: 15, textAlign: "center" }}>{this.state.yesnoques3text2.Text}</Text>
                        </TouchableOpacity>

                      </View>
                    </View>

                  </View>


                </View>
              }
              {this.state.index === '5a' &&


                <View>


                  <View style={{ height: 100, backgroundColor: 'white', justifyContent: "center" }}>
                    <View style={{ alignContent: 'center' }}>

                      <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }} >
                        {this.state.yesnoques4}
                      </Text>
                    </View>
                  </View>


                  <View style={{ justifyContent: "center", padding: "7%" }}>
                    <View style={styles.viewrifan}>
                      <View style={{ alignItems: 'flex-start', backgroundColor: 'white' }}>
                        <TouchableOpacity onPress={() => {
                          this.setState({ index: '6a', haveKids: this.state.yesnoques4text1.Text })
                        }}>
                          <Text style={{ fontSize: 15, textAlign: "center" }}>{this.state.yesnoques4text1.Text}</Text>
                        </TouchableOpacity>


                      </View>
                      <View style={{ alignItems: 'flex-end', position: "absolute", right: 0 }}>

                        <TouchableOpacity onPress={() => {
                          this.setState({ index: '6a', haveKids: this.state.yesnoques4text2.Text })
                        }}>
                          <Text style={{ fontSize: 15, textAlign: "center" }}>{this.state.yesnoques4text2.Text}</Text>
                        </TouchableOpacity>

                      </View>
                    </View>

                  </View>


                </View>
              }
              {this.state.index === '6a' &&


                <View>


                  <View style={{ height: 100, backgroundColor: 'white', justifyContent: "center" }}>
                    <View style={{ alignContent: 'center' }}>

                      <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }} >
                        {this.state.yesnoques5}
                      </Text>
                    </View>
                  </View>


                  <View style={{ justifyContent: "center", padding: "7%" }}>
                    <View style={styles.viewrifan}>
                      <View style={{ alignItems: 'flex-start', backgroundColor: 'white' }}>
                        <TouchableOpacity onPress={() => {
                          this.setState({ index: '7a', familyProtection: this.state.yesnoques5text1.Text })
                        }}>
                          <Text style={{ fontSize: 15, textAlign: "center" }}>{this.state.yesnoques5text1.Text}</Text>
                        </TouchableOpacity>


                      </View>
                      <View style={{ alignItems: 'flex-end', position: "absolute", right: 0 }}>

                        <TouchableOpacity onPress={() => {
                          this.setState({ index: '7a', familyProtection: this.state.yesnoques5text2.Text })
                        }}>
                          <Text style={{ fontSize: 15, textAlign: "center" }}>{this.state.yesnoques5text2.Text}</Text>
                        </TouchableOpacity>

                      </View>
                    </View>

                  </View>


                </View>
              }
              {this.state.index === '7a' &&


                <View>


                  <View style={{ height: 100, backgroundColor: 'white', justifyContent: "center" }}>
                    <View style={{ alignContent: 'center' }}>

                      <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }} >
                        {this.state.yesnoques6}
                      </Text>
                    </View>
                  </View>


                  <View style={{ justifyContent: "center", padding: "7%" }}>
                    <View style={styles.viewrifan}>
                      <View style={{ alignItems: 'flex-start', backgroundColor: 'white' }}>
                        <TouchableOpacity onPress={() => {
                          this.setState({ index: '8a', haveMortgage: this.state.yesnoques6text1.Text })
                        }}>
                          <Text style={{ fontSize: 15, textAlign: "center" }}>{this.state.yesnoques6text1.Text}</Text>
                        </TouchableOpacity>


                      </View>
                      <View style={{ alignItems: 'flex-end', position: "absolute", right: 0 }}>

                        <TouchableOpacity onPress={() => {
                          this.setState({ index: '2a', haveMortgage: this.state.yesnoques6text2.Text })
                        }}>
                          <Text style={{ fontSize: 15, textAlign: "center" }}>{this.state.yesnoques6text2.Text}</Text>
                        </TouchableOpacity>

                      </View>
                    </View>

                  </View>


                </View>
              }
              {this.state.index === '8a' &&


                <View>


                  <View style={{ height: 100, backgroundColor: 'white', justifyContent: "center" }}>
                    <View style={{ alignContent: 'center' }}>

                      <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }} >
                        {this.state.yesnoques7}
                      </Text>
                    </View>
                  </View>


                  <View style={{ justifyContent: "center", padding: "7%" }}>
                    <View style={styles.viewrifan}>
                      <View style={{ alignItems: 'flex-start', backgroundColor: 'white' }}>
                        <TouchableOpacity onPress={() => {
                          this.setState({ index: 0, hugeSavings: this.state.yesnoques7text1.Text })
                        }}>
                          <Text style={{ fontSize: 15, textAlign: "center" }}>{this.state.yesnoques7text1.Text}</Text>
                        </TouchableOpacity>


                      </View>
                      <View style={{ alignItems: 'flex-end', position: "absolute", right: 0 }}>

                        <TouchableOpacity onPress={() => {
                          this.setState({ index: 0, payCarInsurance_data: this.state.yesnoques7text2.Text })
                        }}>
                          <Text style={{ fontSize: 15, textAlign: "center" }}>{this.state.yesnoques7text2.Text}</Text>
                        </TouchableOpacity>

                      </View>
                    </View>

                  </View>


                </View>
              }


              {/****************************************************************** */}
              {this.state.index === 0 &&


                <View>


                  <View style={{ height: 100, backgroundColor: 'white', justifyContent: "center" }}>
                    <View style={{ alignContent: 'center' }}>

                      <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }} >
                        {this.state.ques1_ques}
                      </Text>
                    </View>
                  </View>
                  <View style={{ justifyContent: "center", padding: "7%" }}>
                    <View style={styles.viewrifan}>
                      <View style={{ alignItems: 'flex-start', backgroundColor: 'white' }}>
                        {this.state.showimage1 == false &&
                          <TouchableOpacity onPress={this.handleChangeRefinance.bind(this)}>
                            <Image
                              style={styles.refinance}
                              source={require('../assets/refinance_final.png')}
                            />
                          </TouchableOpacity>
                        }
                        {(this.state.showimage1 == true) &&
                          <Image
                            style={styles.refinance}
                            source={require('../assets/Tick_mark.png')}
                          />
                        }
                        <View style={{ alignSelf: 'center', margin: 5 }}>
                          <Text style={{ fontSize: 15, textAlign: "center" }}>{this.state.ques1_text1.Text}</Text>
                        </View>
                      </View>
                      <View style={{ alignItems: 'flex-end', position: "absolute", right: 0 }}>
                        {this.state.showimage2 == false &&
                          <TouchableOpacity
                            onPress={this.handleChangePurchase.bind(this)}
                          >
                            <Image
                              style={styles.refinance}
                              source={require('../assets/purchase_final.png')}
                            />
                          </TouchableOpacity>
                        }
                        {(this.state.showimage2 == true) &&
                          <Image
                            style={styles.refinance}
                            source={require('../assets/Tick_mark.png')}
                          />
                        }
                        <View style={{ alignSelf: 'center', margin: 5 }}>
                          <Text style={{ fontSize: 15, textAlign: "center" }}>{this.state.ques1_text2.Text}</Text>
                        </View>
                      </View>
                    </View>
                    {this.state.showimage1 == false && this.state.showimage2 == false ?
                      <View style={{ alignSelf: "center", paddingTop: 10 }}>
                        <Text style={{ color: "red" }}>
                          {this.state.errorvalue}
                        </Text>
                      </View> :
                      <Text></Text>
                    }
                  </View>
                </View>
              }
              {this.state.index === 1 &&
                <View>
                  <View style={{ height: 60, backgroundColor: 'white', justifyContent: "center" }}>
                    <View style={{ alignContent: 'center' }}>
                      <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }} >
                        {this.state.ques2_ques}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.ViewPropertytype}>
                    <View style={{ flexDirection: "row", width: 300, alignSelf: "center" }}>
                      <View style={{ alignItems: 'flex-start', backgroundColor: 'white', alignSelf: "center" }}>
                        {this.state.showimage3 == false &&
                          <TouchableOpacity
                            onPress={this.handleChangeSingle.bind(this)}
                          >
                            <Image
                              style={styles.singlefinalImage}
                              source={require('../assets/single_final.png')}
                            />
                          </TouchableOpacity>
                        }
                        {(this.state.showimage3 == true) &&
                          <Image
                            style={styles.singlefinalImage}
                            source={require('../assets/Tick_mark.png')}
                          />
                        }
                        <View style={{ alignSelf: 'center', margin: 5 }}>
                          <Text style={{ fontSize: 15, textAlign: "center" }}>{this.state.ques2_text1.Text}</Text>
                        </View>
                      </View>
                      <View style={styles.multifinalview}>
                        {this.state.showimage4 == false &&
                          <TouchableOpacity
                            onPress={this.handleChangeMulti.bind(this)}
                          >
                            <Image
                              style={styles.multifinalImage}
                              source={require('../assets/multifamily_final.png')}
                            />
                          </TouchableOpacity>
                        }
                        {(this.state.showimage4 == true) &&
                          <Image
                            style={styles.multifinalImage}
                            source={require('../assets/Tick_mark.png')}
                          />
                        }
                        <View style={{ alignSelf: 'center', margin: 5 }}>
                          <Text style={{ fontSize: 15, textAlign: "center" }}>{this.state.ques2_text2.Text}</Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.page2style2}>
                      <View style={{ alignItems: 'flex-start', backgroundColor: 'white' }}>
                        {this.state.showimage5 == false &&
                          <TouchableOpacity
                            onPress={this.handleChangeCando.bind(this)}
                          >
                            <Image
                              style={styles.page2style3}
                              source={require('../assets/cando_final.png')}
                            />
                          </TouchableOpacity>
                        }
                        {(this.state.showimage5 == true) &&
                          <Image
                            style={styles.page2style3}
                            source={require('../assets/Tick_mark.png')}
                          />
                        }
                        <View style={{ alignSelf: 'center', margin: 5 }}>
                          <Text style={{ fontSize: 15, textAlign: "center" }}>{this.state.ques2_text3.Text}</Text>
                        </View>
                      </View>
                      <View style={styles.singlefinalImage2}>
                        {this.state.showimage6 == false &&
                          <TouchableOpacity
                            onPress={this.handleChangeTownHouse.bind(this)}
                          >
                            <Image
                              style={styles.singlefinalImage}
                              source={require('../assets/townhouse_final.png')}
                            />
                          </TouchableOpacity>
                        }
                        {(this.state.showimage6 == true) &&
                          <Image
                            style={styles.singlefinalImage}
                            source={require('../assets/Tick_mark.png')}
                          />
                        }
                        <View style={{ alignSelf: 'center', margin: 5 }}>
                          <Text style={{ fontSize: 15, textAlign: "center" }}>{this.state.ques2_text4.Text}</Text>
                        </View>
                      </View>
                    </View>
                    {this.state.showimage3 == false && this.state.showimage4 == false && this.state.showimage5 == false && this.state.showimage6 == false ?
                      <View style={{ alignSelf: "center", marginTop: 10 }}>
                        <Text style={{ color: "red" }}>
                          {this.state.errorvalue1}
                        </Text>
                      </View> :
                      <Text></Text>
                    }
                  </View>
                </View>
              }
              {this.state.index === 2 &&
                <View>
                  <View style={{ height: 80, backgroundColor: 'white', justifyContent: "center" }}>
                    <View style={{ alignContent: 'center' }}>
                      <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }} >
                        {this.state.ques2_ques}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.ViewPropertytype}>
                    <View style={styles.page3style1}>
                      <View style={{ alignItems: 'flex-start', backgroundColor: 'white' }}>
                        {this.state.showimage7 == false &&
                          <TouchableOpacity
                            onPress={this.handleChangeExcellent.bind(this)}
                          >
                            <Image
                              style={styles.credit}
                              source={require('../assets/excellent_credit.png')}
                            />
                          </TouchableOpacity>
                        }
                        {(this.state.showimage7 == true) &&
                          <Image
                            style={styles.credit}
                            source={require('../assets/Tick_mark.png')}
                          />
                        }
                        <View style={{ alignSelf: 'center', margin: 5 }}>
                          <Text style={{ fontSize: 15, textAlign: "center" }}>{this.state.ques3_text1.Text}</Text>
                        </View>
                      </View>
                      <View style={{ alignItems: 'flex-end', position: "absolute", right: 0 }}>
                        {this.state.showimage8 == false &&
                          <TouchableOpacity
                            onPress={this.handleChangeGood.bind(this)}
                          >
                            <Image
                              style={styles.credit}
                              source={require('../assets/good_credit.png')}
                            />
                          </TouchableOpacity>
                        }
                        {(this.state.showimage8 == true) &&
                          <Image
                            style={styles.credit}
                            source={require('../assets/Tick_mark.png')}
                          />
                        }
                        <View style={{ alignSelf: 'center', margin: 5 }}>
                          <Text style={{ fontSize: 15, textAlign: "center" }}>{this.state.ques3_text2.Text}</Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.page3style2}>
                      <View style={{ alignItems: 'flex-start', backgroundColor: 'white' }}>
                        {this.state.showimage9 == false &&
                          <TouchableOpacity
                            onPress={this.handleChangeFair.bind(this)}
                          >
                            <Image
                              style={styles.credit}
                              source={require('../assets/fair_credit.png')}
                            />
                          </TouchableOpacity>
                        }
                        {(this.state.showimage9 == true) &&
                          <Image
                            style={styles.credit}
                            source={require('../assets/Tick_mark.png')}
                          />
                        }
                        <View style={{ alignSelf: 'center', margin: 5 }}>
                          <Text style={{ fontSize: 15, textAlign: "center" }}>{this.state.ques3_text3.Text}</Text>
                        </View>
                      </View>
                      <View style={{ alignItems: 'flex-end', position: "absolute", right: 0 }}>
                        {this.state.showimage10 == false &&
                          <TouchableOpacity
                            onPress={this.handleChangePoor.bind(this)}
                          >
                            <Image
                              style={styles.credit}
                              source={require('../assets/poor_credit.png')}
                            />
                          </TouchableOpacity>
                        }
                        {(this.state.showimage10 == true) &&
                          <Image
                            style={styles.credit}
                            source={require('../assets/Tick_mark.png')}
                          />
                        }
                        <View style={{ alignSelf: 'center', margin: 5 }}>
                          <Text style={{ fontSize: 15, textAlign: "center" }}>{this.state.ques3_text4.Text}</Text>
                        </View>
                      </View>
                    </View>
                    {this.state.showimage7 == false && this.state.showimage8 == false && this.state.showimage9 == false && this.state.showimage10 == false ?
                      <View style={{ alignSelf: "center", marginTop: 10 }}>
                        <Text style={{ color: "red" }}>
                          {this.state.errorvalue2}
                        </Text>
                      </View> :
                      <Text></Text>
                    }
                  </View>
                </View>
              }
              {this.state.index === 3 &&
                <View>
                  <View style={{ height: 100, backgroundColor: '', justifyContent: "center" }}>
                    <View style={{ alignContent: 'center', margin: "2%" }}>
                      <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }} >
                        {this.state.ques4_ques}(0-2000000)
                      </Text>
                    </View>
                  </View>
                  <View style={{ backgroundColor: '', justifyContent: "center", padding: "7%" }}>
                    <View>
                      <MarkSlider
                        value={this.state.value}
                        thumbTintColor="green"
                        step={2500}
                        max={2000000}
                        marks={marks}
                        // style={{transform: [ { scaleY: 3.0 }],borderRadius:40}}
                        onChange={value => this.setState({ value2: value })}
                        onSlidingComplete={this.change.bind(this)}
                        minimumTrackTintColor="blue"
                        maximumTrackTintColor="green"
                      />
                    </View>
                    <View style={{ margin: "8%" }}>
                      <Text style={{ fontSize: 20, textAlign: "center" }}>{"$" + this.state.value2}</Text>
                    </View>
                  </View>
                </View>
              }
              {this.state.index === 4 &&
                <View>
                  <View style={{ height: 100, backgroundColor: '', justifyContent: "center" }}>
                    <View style={{ alignContent: 'center' }}>
                      <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }} >
                        {this.state.ques5_ques}(0-2000000)
                      </Text>
                    </View>
                  </View>
                  <View style={{ backgroundColor: '', justifyContent: "center", padding: "7%" }}>
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
                </View>
              }
              {this.state.index === 5 &&
                <View>
                  <View style={{ height: 100, backgroundColor: '', justifyContent: "center" }}>
                    <View style={{ alignContent: 'center' }}>
                      <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }} >
                        {this.state.ques6_ques}(0-100)
                      </Text>
                    </View>
                  </View>
                  <View style={{ backgroundColor: '', justifyContent: "center", padding: "7%" }}>
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
                </View>
              }
              {this.state.index === 6 &&
                <View>
                  <View style={{ height: 100, backgroundColor: '', justifyContent: "center", marginTop: "2%" }}>
                    <View style={{ alignContent: 'center', margin: "3%" }}>
                      <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }} >
                        {this.state.ques7_ques}(0-100)
                      </Text>
                    </View>
                  </View>
                  <View style={{ backgroundColor: '', justifyContent: "center", padding: "7%" }}>
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
                </View>
              }
              {this.state.index === 7 &&
                <View>
                  <View style={{ height: 100, backgroundColor: '', justifyContent: "center" }}>
                    <View style={{ alignContent: 'center' }}>
                      <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }} >
                        {this.state.ques8_ques}
                      </Text>
                    </View>
                  </View>
                  <View style={{ padding: 10 }}>
                    <View style={{ width: 130, margin: "3%", alignSelf: "center" }} >
                      <Button block style={{ backgroundColor: this.state.yes1 }} rounded onPress={this.handleChangeBankruptcyYes.bind(this)}>
                        <Text style={{ fontSize: 15, color: this.state.yes1 == "green" ? "white" : "black" }}>{this.state.ques8_text1.Text}</Text>
                      </Button>
                    </View>
                    <View style={{ width: 130, margin: "3%", alignSelf: "center" }} >
                      <Button block style={{ backgroundColor: this.state.no1 }} rounded onPress={this.handleChangeBankruptcyNo.bind(this)}>
                        <Text style={{ fontSize: 15, color: this.state.no1 == "red" ? "white" : "black" }}>{this.state.ques8_text2.Text}</Text>
                      </Button>
                    </View>
                  </View>
                  {this.state.showimage11 == false && this.state.showimage12 == false ?
                    <View style={{ alignSelf: "center" }}>
                      <Text style={{ color: "red" }}>
                        {this.state.errorvalue3}
                      </Text>
                    </View> :
                    <Text></Text>
                  }
                </View>
              }
              {this.state.index === 8 &&
                <View style={{}}>
                  <View style={{ height: 120, backgroundColor: '', justifyContent: "center" }}>
                    <View style={{ alignContent: 'center' }}>
                      <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }} >
                        {this.state.ques9_ques}
                      </Text>
                    </View>
                  </View>
                  <View style={{ alignSelf: "center", width: 300 }}>
                    <Dropdown inputContainerStyle={{ borderBottomColor: "white" }}
                      baseColor={"black"}
                      containerStyle={styles.dropdown2}
                      label={!this.state.loan_type ? 'Select' : ''}
                      data={loan_type_data}
                      onChangeText={this.handleChangeLoanType.bind(this)}
                      value={this.state.loan_type}
                      itemColor={"blue"}
                      pickerStyle={{ backgroundColor: 'rgba(255, 245, 235, 1)' }}
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
                  {!this.state.loan_type ?
                    <View style={{ alignSelf: "center" }}>
                      <Text style={{ color: "red" }}>
                        {this.state.errorvalue4}
                      </Text>
                    </View> :
                    <Text></Text>
                  }
                </View>
              }
              {this.state.index === 9 &&
                <View>
                  <View style={{ height: 100, backgroundColor: '', justifyContent: "center" }}>
                    <View style={{ alignContent: 'center' }}>
                      <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }} >
                        {this.state.ques10_ques}
                      </Text>
                    </View>
                  </View>
                  <View style={{ padding: 10 }}>
                    <View style={{ width: 130, margin: "3%", alignSelf: "center" }} >
                      <Button block style={{ backgroundColor: this.state.yes2 }} rounded onPress={this.handleChangeVeteranYes.bind(this)}>
                        <Text style={{ fontSize: 15, color: this.state.yes2 == "green" ? "white" : "black" }}>{this.state.ques10_text1.Text}</Text>
                      </Button>
                    </View>
                    <View style={{ width: 130, margin: "3%", alignSelf: "center" }} >
                      <Button block style={{ backgroundColor: this.state.no2 }} rounded onPress={this.handleChangeVeteranNo.bind(this)}>
                        <Text style={{ fontSize: 15, color: this.state.no2 == "red" ? "white" : "black" }}>{this.state.ques10_text2.Text}</Text>
                      </Button>
                    </View>
                  </View>
                  {this.state.showimage13 == false && this.state.showimage14 == false ?
                    <View style={{ alignSelf: "center" }}>
                      <Text style={{ color: "red" }}>
                        {this.state.errorvalue5}
                      </Text>
                    </View> :
                    <Text></Text>
                  }
                </View>
              }
              {this.state.index === 10 &&
                <View style={{}}>
                  <View style={{ height: 100, backgroundColor: '', justifyContent: "center" }}>
                    <View style={{ alignContent: 'center', margin: "3%" }}>
                      <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }} >
                        {this.state.ques11_ques}
                      </Text>
                    </View>
                  </View>
                  <View style={{ padding: 10 }}>
                    <View style={{ alignSelf: "center", width: 300 }}>
                      {/*<Dropdown inputContainerStyle={{borderBottomColor:"white"}}
                                baseColor={"black"}
                                containerStyle={styles.dropdown2}
                                label={!this.state.mortage_late?'Select':''}
                                data={mortage_late_data}
                                onChangeText={this.handleChangeMortageLates.bind(this)}
                                value={this.state.mortage_late}
                                itemColor={"blue"}
                                selectedItemColor={"black"}
                                itemCount={6}
                                pickerStyle={{backgroundColor: 'rgba(255, 245, 235, 1)'}}
                                dropdownPosition={1}
                      />*/}
                      <CDD
                        onChangeText={(value) => {
                          this.setState({
                            mortage_late: value,
                            mortageRates_data: value.toString(),
                            index: 11
                          })
                        }
                        }
                        value={this.state.mortage_late == "" ? "Select an option" : this.state.mortage_late + "   "}
                        array={mortage_late_data}
                        fontSize={15}
                        height={150}
                        rgba={[255, 245, 235, 1]}
                        scrollviewstyle={{ width: 250, backgroundColor: '#fff5eb' }}
                      />
                    </View>
                  </View>
                  {!this.state.mortage_late ?
                    <View style={{ alignSelf: "center" }}>
                      <Text style={{ color: "red" }}>
                        {this.state.errorvalue6}
                      </Text>
                    </View> :
                    <Text></Text>
                  }
                </View>
              }
              {this.state.index === 11 &&
                <View>
                  <View style={{ height: 100, backgroundColor: '', justifyContent: "center" }}>
                    <View style={{ alignContent: 'center' }}>
                      <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }} >
                        {this.state.ques12_ques}
                      </Text>
                    </View>
                  </View>
                  <View style={{ padding: 10 }}>
                    <View style={{ width: 130, margin: "3%", alignSelf: "center" }} >
                      <Button block style={{ backgroundColor: this.state.yes3 }} rounded onPress={this.handleChangeBorrowYes.bind(this)}>
                        <Text style={{ fontSize: 15, color: this.state.yes3 == "green" ? "white" : "black" }}>{this.state.ques12_text1.Text}</Text>
                      </Button>
                    </View>
                    <View style={{ width: 130, margin: "3%", alignSelf: "center" }} >
                      <Button block style={{ backgroundColor: this.state.no3 }} rounded onPress={this.handleChangeBorrowNo.bind(this)}>
                        <Text style={{ fontSize: 15, color: this.state.no3 == "red" ? "white" : "black" }}>{this.state.ques12_text2.Text}</Text>
                      </Button>
                    </View>
                  </View>
                  {this.state.showimage15 == false && this.state.showimage16 == false ?
                    <View style={{ alignSelf: "center" }}>
                      <Text style={{ color: "red" }}>
                        {this.state.errorvalue7}
                      </Text>
                    </View> :
                    <Text></Text>
                  }
                </View>
              }
              {this.state.index === 12 &&
                <View>
                  <View style={styles.heading1}>
                    <View style={{ alignContent: 'center', padding: 5 }}>
                      <Text style={styles.headingFont} >
                        {this.state.ques13_ques}
                      </Text>
                    </View>
                  </View>
                  <View style={{}}>
                    <TextInput
                      style={{ fontSize: "2px", maxHeight: "15px", width: "50px", height: "15px" }}

                      placeholder={this.state.ques13_text1.Text}
                      placeholderTextColor={'black'}
                      inputStyle={{ fontFamily: 'Impact', fontSize: 5 }}
                      autoFocus={true}
                      returnKeyType={"next"}
                      onSubmitEditing={(event) => {
                        this.refs.currentZip.focus();
                      }}
                      underlineColorAndroid='transparent' style={styles.password}
                      onChangeText={this.Address.bind(this)}
                      value={this.state.address}>
                    </TextInput>
                    {!this.state.address ?
                      <View style={{ width: 250, alignSelf: "center" }}>
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

                      maxLength={5}
                      underlineColorAndroid='transparent' style={styles.password}
                      onChangeText={this.Zip.bind(this)} value={this.state.zip}
                      onSubmitEditing={(event) => {
                        this.checkZip(this.state.zip)
                      }}
                    >

                    </TextInput>
                    {(!this.state.zip || (this.state.zip < 5) == false) ?
                      <View style={{ width: 250, alignSelf: "center" }}>
                        <Text style={{ color: "red", height: 20, fontSize: 10 }}>
                          {this.state.errorvalue9}
                        </Text>
                      </View> :
                      <Text></Text>
                    }
                    <View style={{ alignSelf: "center", width: 250, marginTop: 0 }}>
                      <Dropdown inputContainerStyle={{ borderBottomColor: "white" }}

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
                      />
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
                      <View style={{ width: 250, alignSelf: "center" }}>
                        <Text style={{ color: "red", height: 20, fontSize: 10 }}>
                          {this.state.stateerrorvalue8}
                        </Text>
                      </View> :
                      <Text></Text>
                    }
                    <TextInput style={{ marginTop: 10 }} placeholder={this.state.ques13_text2.Text} placeholderTextColor={'black'}
                      underlineColorAndroid='transparent' style={styles.password}
                      onChangeText={this.City.bind(this)}
                      autoCapitalize='none'
                      value={this.state.city}>
                    </TextInput>
                    {(!this.state.city || this.state.validcity == false) ?
                      <View style={{ width: 250, alignSelf: "center" }}>
                        <Text style={{ color: "red", height: 20, fontSize: 10 }}>
                          {this.state.cityerrorvalue}
                        </Text>
                      </View> :
                      <Text></Text>
                    }
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
                      underlineColorAndroid='transparent' style={styles.password}
                      onChangeText={this.FName.bind(this)}
                      autoFocus={true}
                      returnKeyType={"next"}
                      onSubmitEditing={(event) => {
                        this.refs.lastName.focus();
                      }}
                      value={this.state.fname}>
                    </TextInput>
                    {(!this.state.fname || this.state.validfname == false) ?
                      <View style={{ width: 250, alignSelf: "center" }}>
                        <Text style={{ color: "red", height: 20, fontSize: 10 }}>
                          {this.state.errorvalue10}
                        </Text>
                      </View> :
                      <Text></Text>
                    }
                    <TextInput placeholder={this.state.ques14_text2.Text} placeholderTextColor={'black'}
                      underlineColorAndroid='transparent' style={styles.password}
                      onChangeText={this.LName.bind(this)}
                      ref="lastName"
                      returnKeyType={"next"}
                      onSubmitEditing={(event) => {
                        this.refs.email.focus();
                      }}
                      value={this.state.lname}>
                    </TextInput>
                    {(!this.state.lname || this.state.validlname == false) ?
                      <View style={{ width: 250, alignSelf: "center" }}>
                        <Text style={{ color: "red", height: 20, fontSize: 10 }}>
                          {this.state.errorvalue11}
                        </Text>
                      </View> :
                      <Text></Text>
                    }
                    <TextInput placeholder={this.state.ques14_text3.Text} placeholderTextColor={'black'}
                      underlineColorAndroid='transparent' style={styles.password}
                      onChangeText={this.Email.bind(this)}
                      ref="email"
                      returnKeyType={"next"}
                      onSubmitEditing={(event) => {
                        this.refs.PhNumber.focus();
                      }}
                      value={this.state.email}>
                    </TextInput>
                    <View style={{ width: 250, alignSelf: "center" }}>
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
                      underlineColorAndroid='transparent' style={styles.password}
                      onChangeText={this.Phone.bind(this)}
                      ref="PhNumber"
                      value={this.state.phone}>
                    </TextInput>
                    {!this.state.phone ?
                      <View style={{ width: 250, alignSelf: "center" }}>
                        <Text style={{ color: "red", height: 20, fontSize: 10 }}>
                          {this.state.errorvalue13}
                        </Text>
                      </View> :
                      <Text></Text>
                    }
                  </View>
                </View>
              }
              <View style={styles.buttoncss}>

                <View >
                  <Display
                    enable={this.state.enable_back}
                  >
                    <Button block
                      style={styles.back_btnstyle}
                      onPress={this.backButtonQuick.bind(this)}>
                      <Text>Back</Text>
                    </Button>
                  </Display>
                </View>
                <View style={this.state.index != 0 ? { width: 30 } : { width: 0 }}>

                </View>
                <View >
                  <Display
                    enable={this.state.enable_next}
                  >
                    <Button block
                      style={styles.next_btnstyle}
                      onPress={this.nextButtonQuick.bind(this)}>
                      <Text>Next</Text>
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
                      <Text>Submit</Text>
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
          <View style={{ justifyContent: "center", backgroundColor: "#dde3ed", alignItems: "center", height: 120, width: 120, borderRadius: 15, borderColor: "#FFF", imageAlign: "center", elevation: 2 }}>
            <Image
              style={{ height: 100, width: 100 }}
              source={require('../ic_launcher.png')}
            />
          </View>

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