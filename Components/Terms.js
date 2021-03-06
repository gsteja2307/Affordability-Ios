import React, { Component } from 'react';
import {
  StyleSheet,
  ActivityIndicator,
  Text,
  View,
  TouchableOpacity,
  Platform,
  Image,

} from 'react-native';
import { Footer, Container, Header, Button } from "native-base";
import { WebView } from 'react-native-webview';
import DrawerNavigation from './DrawerNavigation';
import { DrawerActions } from 'react-navigation';
import { ScrollView } from 'react-native-gesture-handler';

class NavigationDrawerStructure extends React.Component {
  toggleDrawer = () => {
    //this.props.navigationProps.toggleDrawer();
    this.props.navigationProps.dispatch(DrawerActions.toggleDrawer())
  };
  BackButn = () => {
    global.currentScreenIndex = 0;
    this.props.navigationProps.navigate('Page1');
  };
  render() {
    return (
      <View style={{ flexDirection: 'row', backgroundColor: "white" }}>
        {/* <TouchableOpacity onPress={this.BackButn.bind(this)} style={{ justifyContent: "center" }}  >
          <Text style={{ color: "black", fontSize: 40 }}> &#8249;</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)} style={{ justifyContent: "center", marginLeft: "3%" }} >
          <Image
            source={require('./image/drawer.png')}
            style={{ width: 30, height: 30 }}
          />
        </TouchableOpacity>

        <DrawerNavigation />
        <View style={{ width: 60 }}></View> */}


        <View style={{ flexDirection: 'row', backgroundColor: "white", flex: 1, justifyContent: "center", alignItems: "center" }}>
          <View style={{ flexDirection: "row", width: 60, flexWrap: "wrap", alignItems: "center", backgroundColor: "white", justifyContent: "space-between" }}>

            <TouchableOpacity onPress={this.BackButn.bind(this)} style={{ marginLeft: "5%", height: 25, width: 25, justifyContent: "center", alignItems: "center" }}  >
              <Image
                source={require('../assets/backarrow.png')}
                style={{ marginLeft: "5%", width: "100%", height: "100%" }}
              />
            </TouchableOpacity>



            <TouchableOpacity onPress={this.toggleDrawer.bind(this)} style={{ justifyContent: "center", marginLeft: "3%" }} >
              <Image
                source={require('./image/drawer.png')}
                style={{ width: 25, height: 25 }}
              />
            </TouchableOpacity>
          </View>

          <DrawerNavigation />
          <View style={{ width: 60 }}></View>
        </View>
      </View>
    );
  }
}
export default class Terms extends Component {

  static navigationOptions = ({ navigation }) => ({
    headerTitle: <NavigationDrawerStructure navigationProps={navigation} />,
  })

  render() {
    return (
      <View style={{ flex: 1, width: "100%", marginTop: 10 }}>
        <Container>
          <ScrollView>
            <View style={{}}>
              <Text style={{ fontSize: 20, textAlign: "center", margin: 10 }} >
                For a Free quote. affordability.io is not associated with the government, and our service is not approved by the government or your lender; and even if you accept this offer and use our services, your lender may not agree to change your loan.
                  </Text>
              <Text style={{ fontSize: 20, textAlign: "center", margin: 20 }} >
                Our goal is to provide an easy connection for homeowners seeking information on affordabilityprogram eligibility with a private mortgage broker or attorney who can assist you.
                  </Text>
            </View>
          </ScrollView>
        </Container>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? 24 : 40,
  },
  topbar: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }
});
