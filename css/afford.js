

import { Dimensions, StatusBar, StyleSheet, Platform } from 'react-native';
// import {  Platform } from 'react-native';

var deviceHeight = Platform.OS === 'android' ? Dimensions.get('screen').height - StatusBar.currentHeight : Dimensions.get('window').height;
module.exports = StyleSheet.create({
  headerstyles: {
    backgroundColor: "white",
    marginTop: Platform.OS === 'ios' ? 25 : 0,
    height: deviceHeight <= 550 ? 60 : 80,
    elevation: 2,
    marginBottom: 3,

  },
  imageStyle: {
    height: deviceHeight <= 650 ? 70 : 130,
    width: deviceHeight <= 650 ? 70 : 130
  },
  refinance: {
    height: deviceHeight <= 550 ? 70 : 130,
    width: deviceHeight <= 550 ? 80 : 130
  },
  yesnobuttonview: {
    width: deviceHeight <= 550 ? 250 : 300,
    alignItems: "center",
    justifyContent: "center",
    // flexWrap:"wrap"

  },
  viewrifan: {
    flexDirection: "row",
    
    alignSelf: "center"
  },
  // mycont:{
  //   width:"100%",
  //   height:height*0.8
  // },
  container: {

    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 1,
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',

  },
  container3: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  },
  next_back_button_styles: {
    flexDirection: "row",
    //alignSelf: "center",
  },
  back_btnstyle: {
    borderRadius: 10,
    padding: "3%",
    width: 100,
    backgroundColor: "#82546d",
  },
  privacy: {
    height: "100%",
    width: "100%",
    borderRadius: 2,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: "red",
    opacity: 0.8
  },
  terms: {
    height: "100%",
    borderRadius: 2,
    width: "100%",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: "green",
    opacity: 0.8
  },
  next_btnstyle: {
    borderRadius: 5,
    padding: "3%",
    width: "30%",
    backgroundColor: "#2959a7",
    justifyContent:"center",
    alignItems:"center"
  },
  next_btnstyle_2: {
    borderRadius: 5,
    padding: "3%",
    width: "30%",
    backgroundColor: "#2959a7",
    justifyContent:"center",
    alignItems:"center",
    // paddingBottom:"3%"
  },
  submit_btnstyle: {
    padding: "3%",
    width: 100,
    backgroundColor: "red",
    borderRadius: 10
  },
  ploicy_btnstyle: {
    margin: 8,
    width: 170,
    backgroundColor: "white"
  },
  password: {
    width: 300,
    height: deviceHeight <= 650 ? 40 : 60,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    fontSize: deviceHeight <= 650 ? 10 : 16,
    paddingLeft: 10,
    marginTop: 10,
    position: 'relative',
    borderRadius: 5,
    alignSelf: "center",
  },
  password2: {
    width: 300,
    height: deviceHeight <= 650 ? 40 : 60,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    fontSize: deviceHeight <= 650 ? 10 : 16,
    paddingLeft: 10,
    marginTop: 10,
    position: 'relative',
    borderRadius: 5,
    alignSelf: "center",
    borderBottomColor: "blue"
  },
  dropdown: {
    height: deviceHeight <= 650 ? 40 : 60,
    borderColor: "black",
    borderBottomWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: "center",
    marginTop: 10,
    paddingBottom: 10,
    width: 300
  },
  fontsizedropdown: {
    fontSize: deviceHeight <= 650 ? 12 : 18
  },
  dropdown2: {
    height: deviceHeight < 650 ? 40 : 60,
    borderColor: "black",
    borderBottomWidth: 1,
    borderRadius: 10,
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: "center",
    paddingBottom: 10,
    // alignSelf:"center"
  },
  ViewPropertytype: {
    justifyContent: "center",
    padding: deviceHeight <= 650 ? 0 : "5%"
  },
  singlefinalImage: {
    width: deviceHeight <= 650 ? (deviceHeight <= 550) ? 100 : 120 : 110,
    height: deviceHeight <= 650 ? (deviceHeight <= 550) ? 80 : 90 : 110
  },
  singlefinalImage2: {
    alignItems: 'flex-end',
    marginLeft: 50,
    left: deviceHeight <= 550 ? 20 : 10,
  },
  tickmark: {
    width: deviceHeight <= 650 ? 100 : 110,
    height: deviceHeight <= 650 ? 100 : 110
  },
  page2style2: {
    flexDirection: "row",
    width: 300,
    alignSelf: "center",
    marginTop: deviceHeight <= 650 ? 10 : 20
  },
  page2style3: {
    width: deviceHeight <= 650 ? (deviceHeight <= 550) ? 100 : 120 : 130,
    height: deviceHeight <= 650 ? (deviceHeight <= 550) ? 85 : 95 : 110
  },
  multifinalImage: {
    width: deviceHeight <= 650 ? (deviceHeight <= 550) ? 100 : 120 : 110,

    height: deviceHeight <= 650 ? (deviceHeight <= 550) ? 80 : 90 : 110,

  },
  credit: {
    width: deviceHeight <= 650 ? 80 : 100,
    height: deviceHeight <= 650 ? 80 : 100,

  },
  page3style2: {
    flexDirection: "row",
    width: deviceHeight <= 650 ? 260 : 280,
    alignSelf: "center",
    marginTop: deviceHeight <= 650 ? 0 : 20
  },
  multifinalview: {
    alignItems: 'flex-end',
    position: "absolute",
    right: deviceHeight <= 650 ? 10 : 0,
  },
  page3style1: {
    flexDirection: "row",
    width: deviceHeight <= 650 ? 260 : 280,
    alignSelf: "center"
  },
  heading1: {
    height: deviceHeight <= 550 ? 60 : 90,
    //  backgroundColor: '',
    justifyContent: "center"
  },
  headingFont: {
    fontSize: deviceHeight <= 550 ? 15 : 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#40b049"
  },
  buttoncss: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    marginTop: deviceHeight <= 650 ? "5%" : "10%",
    height: 60
  }
});


