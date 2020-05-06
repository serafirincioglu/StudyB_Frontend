import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text
  } from 'react-native';

  
  export default function NavigationBar() {
        return(
            <View style={styles.NavigBar}>
                <View style={styles.studyBText}>
                <Image style={{width: 100, height:100}}
                    source={require('../components-Profile/defaultpp.png')}/>
                </View>
            </View>
        );
    };


const styles = StyleSheet.create(
    {
        NavigBar: {
            flexDirection: 'row',
            justifyContent:'center',
            alignItems: 'center',
            alignContent: 'center',
            backgroundColor:'black',
            marginBottom: 20,
            width: '100%'
            
           
        },
        BarText: {
            fontSize:16,
            fontWeight: 'bold',
            color: '#56D6E0',
            textAlign: 'center',
            alignItems: 'center'
        
          },
          studyBText: {
              flexDirection: 'row',
              width: '40%',
              justifyContent:'space-between',
              alignItems: 'center',
              alignSelf: 'center',
          }

    }
);