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
                <Image style={{width: 30, height:30}}
                    source={require('../images-Rewards/reward.png')}/>
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