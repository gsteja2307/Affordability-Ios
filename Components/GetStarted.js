import React  from 'react';
import {
StyleSheet,
 Text,
View,
TouchableOpacity,
Platform ,
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
                 <View>
                     <Text style={styles.hdng_styls}>  CONTROL OF YOUR FINANCES AGAIN</Text>
                   </View>
                   <View style={{margin:"7%"}}>
                      <Text style={styles.sub_hdng_styls}>We Are Ex Bankers And We Can Show You How To Play This Game</Text>
                   </View>
                   <View style={{marginTop:"7%"}}>
                   <TouchableOpacity  style={{justifyContent:"center",backgroundColor:"green",borderRadius:10,height:60}}   onPress={() => navigate('Afford')} >
                     <Text style={{padding:"3%",color:"white"}} > Get Started</Text>
                  </TouchableOpacity>
                   </View>
        </ImageBackground>
        
      );
    }
  }

  const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent:"center",
 alignItems: 'center',
},
hdng_styls:{
  color: 'white',
fontWeight:"bold",
fontSize:20,
textAlign:"center"
},
sub_hdng_styls:{
color:'white',
fontSize:18,
textAlign:"center"
},
topbar: {
height: 50,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: "#103047",
}
});