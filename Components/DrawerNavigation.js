import React from 'react';
  import { View, Image, Text,TouchableOpacity,  } from 'react-native';
export default class DrawerNavigation extends React.Component {
 
   render() {
    return (
      <View style={{ flexDirection: 'row',backgroundColor:"white",justifyContent:"center",alignItems:"center" }}>
         
        <Image 
          source={require('../assets/main2x.png')} style={{alignItems:"center",marginLeft:"3%"}} 
        />
         
       </View>
    );
  }
}
