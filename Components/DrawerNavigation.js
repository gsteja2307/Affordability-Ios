import React from 'react';
  import { View, Image, Text,TouchableOpacity,  } from 'react-native';
export default class DrawerNavigation extends React.Component {
 
   render() {
    return (
      <View style={{ flexDirection: 'row',backgroundColor:"white"  }}>
         
        <Image 
          source={require('../assets/main.png')} style={{alignItems:"center",marginLeft:"3%"}} 
        />
         
       </View>
    );
  }
}
