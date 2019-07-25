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

class NavigationDrawerStructure extends React.Component {
  toggleDrawer = () => {
    //this.props.navigationProps.toggleDrawer();
    this.props.navigationProps.dispatch(DrawerActions.toggleDrawer())
  };
  BackButn = () => {
    this.props.navigationProps.navigate('Page1');
  };
  render() {
    return (
      <View style={{ flexDirection: 'row', backgroundColor: "white" }}>
        <TouchableOpacity onPress={this.BackButn.bind(this)} style={{ justifyContent: "center" }}  >
          <Text style={{ color: "black", fontSize: 40 }}> &#8249;</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)} style={{ justifyContent: "center", marginLeft: "3%" }} >
          <Image
            source={require('./image/drawer.png')}
            style={{ width: 30, height: 30 }}
          />
        </TouchableOpacity>

        <DrawerNavigation />
        <View style={{ width: 60 }}></View>
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
          <View style={{}}>
            <Text style={{ fontSize: 20, textAlign: "center", margin: 10 }} >
              *For a Free quote. affordability.io is not associated with the government, and our service is not approved by the government or your lender; and even if you accept this offer and use our services, your lender may not agree to change your loan.
                  </Text>
            <Text style={{ fontSize: 20, textAlign: "center", margin: 20 }} >
              Our goal is to provide an easy connection for homeowners seeking information on affordabilityprogram eligibility with a private mortgage broker or attorney who can assist you.
                  </Text>
          </View>
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
