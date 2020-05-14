import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image,
  } from 'react-native';
  

  export default class Profile extends Component{
    render(){
        return(
            <View style={StyleSheet.container}>
                <Image style={{width: 40, height:40}}
                    source={require('../images/Profile.png')}/>
            </View>
        );
    }
  }
  
const style = StyleSheet.create(
    {
        container: {
            justifyContent:'center',
            alignItems: 'center',
            alignContent: 'center',
            

        }
    }
)