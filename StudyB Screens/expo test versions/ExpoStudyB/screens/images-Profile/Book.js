import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image,
  } from 'react-native';
  

  export default class Logo extends Component{
    render(){
        return(
            <View style={StyleSheet.container}>
                <Image style={{width: 40, height:40}}
                    source={require('../images-Profile/Book.png')}/>
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