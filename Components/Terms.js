import React, { Component } from 'react';
import {
StyleSheet,
ActivityIndicator,
Text,
View,
TouchableOpacity,
Platform,
Image,
Button
} from 'react-native';
import { Footer,Container,Header } from "native-base";
import { WebView } from 'react-native-webview';

export default class Terms extends Component {
  static navigationOptions = {
    headerTitle:   <Image 
    source={require('../assets/main.png')} style={{alignItems:"center"}} 
  />,
  headerLeft: (
    <Button
      onPress={() => alert('This is a button!')}
      title="Info"
      color="red"
    />
  ),
  }
  render() {
    return (
       <View style={{ flex: 1,width:"100%",marginTop:10 }}>
        {/* <Header style={{backgroundColor:"white",height:90}}>
                <View style={{alignSelf:"center",}}>
                  <Image
                  style={{marginTop:10}}
                    source={require('../assets/main.png')}
                  />
                </View>
        </Header>         */}
                <Container>
                <View style={{}}>
                  <Text style={{fontSize:20,textAlign:"center",margin:10 }} >
                    *For a Free quote. affordability.io is not associated with the government, and our service is not approved by the government or your lender; and even if you accept this offer and use our services, your lender may not agree to change your loan.    
                  </Text>
                  <Text style={{fontSize:20,textAlign:"center",margin:20 }} >
                    Our goal is to provide an easy connection for homeowners seeking information on affordabilityprogram eligibility with a private mortgage broker or attorney who can assist you.
                  </Text>
                </View>
                 </Container>
                {/* <Footer style={{backgroundColor:"#103047"}}>
                        <TouchableOpacity style={styles.topbar}
                            onPress={() => this.props.navigation.navigate("Afford")}
                            >
                            <Text style={{color:"white",fontSize:20}}  >Back</Text>
                        </TouchableOpacity>
                </Footer> */}
        </View>
    );
  }
}
const styles = StyleSheet.create({
container: {
flex: 1,
marginTop:Platform.OS=== "android"?24:40,
},
topbar: {
height: 50,
justifyContent: 'center',
alignItems: 'center',
flex:1
}
});
