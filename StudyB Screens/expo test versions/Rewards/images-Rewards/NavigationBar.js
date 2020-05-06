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
                <Image style={{width: 50, height:50}}
                    source={require('../images-Rewards/lastest_logo.png')}/>
                <Text style={styles.BarText}>StudyB</Text>
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
            width: '60%',
            alignSelf:'center'
            
           
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
