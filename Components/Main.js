// import React from 'react';
// import { StyleSheet, Text, View,Image } from 'react-native';
// import Afford from './src/afford.js';
import React from 'react';

import {createStackNavigator, createAppContainer} from 'react-navigation';
    //import Privacy from './src/privacy';
//import Afford from './Afford';
//import Submit from './src/submit';

  // const MainNavigator = createStackNavigator({
   
  //   Afford: {screen: Afford},
  //   // Privacy: { screen: Privacy},
  //   // Submit: { screen: Submit}
  // });
  
  // const Main = createAppContainer(MainNavigator);
  // export default Main;


  const MainNavigator = createStackNavigator({
  Afford: {screen: Afford},
  //Profile: {screen: ProfileScreen},
});

const Main = createAppContainer(MainNavigator);

export default Main;
 
