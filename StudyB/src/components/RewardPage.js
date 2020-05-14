import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
  } from 'react-native';
  

export default class RewardPage extends Component{
    render(){
        return(
            <View>
                
                <View style={styles.NavigBar}>
                    <View style={styles.studyBText}>
                    <Image style={{width: 50, height:50}}
                        source={require('../images/lastest_logo.png')}/>
                    <Text style={styles.BarText}>StudyB</Text>
                    </View>
                </View>

                <View style={StyleSheet.container}>
                    <Image style={{width: 30, height:30}}
                        source={require('../images/reward.png')}/>
                </View>

            </View>

        )
    }
}
  
const styles = StyleSheet.create(
    {
        container: {
            justifyContent:'center',
            alignItems: 'center',
            alignContent: 'center',
            

        },

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
)