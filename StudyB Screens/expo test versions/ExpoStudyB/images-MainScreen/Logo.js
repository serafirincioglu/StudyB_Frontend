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
                <Image style={{width: 150, height:150}}
                    source={require('../images-MainScreen/lastest_logo.png')}/>
            </View>
        );
    }
  }
  
const style = StyleSheet.create(
    {
        container: {
            flex:2,
            justifyContent:'center',
            alignItems: 'center',
            alignContent: 'center',
            

        }
    }
)
