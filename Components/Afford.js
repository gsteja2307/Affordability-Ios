
// global.data = {
//   "firstName": false,
//   "lastName": false,
//   "emailId": false,

//   "phoneNumber": false
// }
//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import { View, Image, TouchableOpacity, } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
// import all basic components
//For React Navigation 2.+ import following
//import {DrawerNavigator, StackNavigator} from 'react-navigation';
//For React Navigation 3.+ import following
import {
  createDrawerNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';
import {
  Button,
  Text,

} from "native-base";
// import Screen1 from './pages/Screen1';
// import Screen2 from './pages/Screen2';
// import Screen3 from './pages/Screen3';

//import About from "./views/About";
import Page1 from "./Page1";
import Privacy from "./privacy";
import Terms from "./Terms";

// class NavigationDrawerStructure extends Component {
//   //Structure for the navigatin Drawer
//   toggleDrawer = () => {
//     //Props to open/close the drawer
//     this.props.navigationProps.toggleDrawer();
//   };
//   render() {
//     return (
//       <View style={{ flexDirection: 'row'  }}>
//         {/* <Button  onPress={() => alert('This is a button!')} primary style={{marginLeft:10}}><Text> Primary </Text>
//         </Button> */}
//         <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
//           {/*Donute Button Image */}
//           <Image
//             source={require('./image/drawer.png')}
//             style={{ width: 30, height: 30, marginLeft: 5 }}
//           />
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }

//For React Navigation 2.+ need to use StackNavigator instead createStackNavigator
//const FirstActivity_StackNavigator = StackNavigator({
//For React Navigation 3.+
const FirstActivity_StackNavigator = createStackNavigator({

  //All the screen from the Screen1 will be indexed here
  First: {
    screen: Page1,
    navigationOptions: ({ navigation }) => ({
      // headerLeft: <Icon  
      // name="rocket" size={30} color="red"
      // onPress={ () => { navigation.goBack() }} />,
      //title: 'Dixit Healing Chamber',
      //image:'../assets/main.png',
      //headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: 'white',
        height: 80,
      },
      headerTintColor: '#fff',
      // right: <Text style={{color: 'red'}} onPress={() => navigation.goBack()}>hello</Text>,
    }),
  },
});

//For React Navigation 2.+ need to use StackNavigator instead createStackNavigator
//const FirstActivity_StackNavigator = StackNavigator({
//For React Navigation 3.+
const Screen2_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Second: {
    screen: Privacy,
    navigationOptions: ({ navigation }) => ({
      title: 'Follow Us on Facebook',
      //headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: 'white',
        height: 80,
      },
      headerTintColor: '#fff',
    }),
  },
});

//For React Navigation 2.+ need to use StackNavigator instead createStackNavigator
//const FirstActivity_StackNavigator = StackNavigator({
//For React Navigation 3.+
const Screen3_StackNavigator = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  Third: {
    screen: Terms,
    navigationOptions: ({ navigation }) => ({
      //title: 'Contacts',
      //headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: 'white',
        height: 80,
      },
      headerTintColor: '#fff',
    }),
  },
});

//For React Navigation 2.+ need to use DrawerNavigator instead createDrawerNavigator
//const DrawerNavigatorExample = DrawerNavigator({
//For React Navigation 3.+
const Afford = createDrawerNavigator({

  //Drawer Optons and indexing
  Page1: {

    screen: FirstActivity_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Home',

    },
  },
  Privacy: {
    //Title
    screen: Screen2_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Privacy',
    },
  },
  Terms: {

    screen: Screen3_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Terms',
    },
  },
});

//For React Navigation 2.+ need to export App only
//export default App;
//For React Navigation 3.+
export default createAppContainer(Afford);
