/* eslint-disable prettier/prettier */
import React  from 'react';
import {
StyleSheet,
 Text,
View,
TouchableOpacity,
Platform ,
Image,
ImageBackground
} from 'react-native';
 
export default class GetStarted extends React.Component {
    static navigationOptions = {
      header: null,
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <ImageBackground source={require('../assets/getstartedbg.jpg')} style={styles.container}>
          <View style={{ alignItems: 'center',  }}>
          <Image 
              style={{marginTop:"37%",marginBottom:"15%"}} 
          source={require('../assets/main.png')}>
            
          </Image>
          </View>
          <View style={{}}>
                  
                     <Text style={styles.hdng_styls}>CONTROL OF YOUR FINANCES AGAIN</Text>
                   
                   
            <Text style={styles.sub_hdng_styls}>We Are Ex Bankers And We Can Show You </Text>
            <Text style={styles.sub_hdng_styls}>How To Play This Game</Text>
                   
                   </View>
          <View style={{ marginTop: "16%" }}>
            <TouchableOpacity style={{ justifyContent: "center", backgroundColor: "green", borderRadius: 30, height: 60,width:150, alignItems:"center" }} onPress={() => navigate('Afford')} >
              <Text style={{ fontSize:16, padding: "3%", color: "white" }} > Get Started</Text>
            </TouchableOpacity>
          </View>        
                  
        </ImageBackground>
        
      );
    }
  }

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS == "android" ? "" : 20,
    flex: 1,
    // justifyContent:'center',
    alignItems: 'center',
  },
  hdng_styls: {
    marginBottom: "5%",
    // fontFamily: "Open Sans",
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',

  },
  sub_hdng_styls: {
    // fontFamily: "Open Sans",
    color: 'white',
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center'
  }

});