import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image,
  } from 'react-native';
  

  export default class Chat extends Component{
    render(){
        return(
            <View style={StyleSheet.container}>
                <Image style={{width: 50, height:50}}
                    source={require('../images/Chat.png')}/>
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