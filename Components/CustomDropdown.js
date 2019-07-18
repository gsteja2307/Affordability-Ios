/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  ActivityIndicator,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Picker,
  TouchableOpacity,
  Animated,
  ScrollView
} from 'react-native'


const a=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32]
class CustomText extends React.Component {
  state = {
    size: new Animated.Value(150), 
    opacity: new Animated.Value(0.3), // Initial value for opacity: 0
  }

  componentDidMount() {
    Animated.timing(                  // Animate over time
      this.state.size,            // The animated value to drive
      {
        toValue: 2,                   // Animate to opacity: 1 (opaque)
        duration: 500,              // Make it take a while
      }      
    ).start();                        // Starts the animation
    
  }

  render() {
    let { size,opacity } = this.state;

    return (
      <Animated.Text                // Special animatable View
        style={{
          ...this.props.style,
          left: size, 
          // opacity:opacity,
          fontSize:20,
          marginTop:10,
          // borderBottomWidth:0.8,
          borderColor:"black",
          justifyContent:"center",
          alignItems:"center"
                  // Bind opacity to animated value
        }}
      >
        {this.props.children}
      </Animated.Text>
    );
  }
}

class CDD extends React.Component{
  constructor(props){
    super(props);
    this.state={
         display:false
      }
  }
  clickedme = () => {
    if(this.state.display==false)
    this.setState({display:true})
    else
    this.setState({display:false})
  }
    onChangeText2= (x) =>{
        console.log(x);
        this.props.onChangeText(x);
    }
  render() {
    let { size } = this.state;
    let { array, rgba, scrollviewstyle}=this.props;
    return (
      <View style={styles.container}>
        <View>
        
        </View>
        <TouchableOpacity style={{height:50,elevation: 2,width:250,justifyContent:'center',alignItems:'center', borderRadius: 4, borderWidth: 0.5}} onPress={this.clickedme}>
        <Text style={this.props.fontSize}>{this.props.value}   &#10148;</Text>
        </TouchableOpacity>
        <View style={{height:this.props.height}}>
        {(this.state.display)?
        <ScrollView style={scrollviewstyle}>

        {array.map(x => (
        <TouchableOpacity key={x} onPress={() => this.onChangeText2(x)}>  
        <CustomText>
          {x}
        </CustomText>
        </TouchableOpacity>))
        }        

        </ScrollView>
        :
        <Text></Text>
        
        }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // height:20,
    alignItems: 'center',
    // backgroundColor: '',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default CDD;