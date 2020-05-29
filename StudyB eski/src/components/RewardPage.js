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
            <View style={styles.rewardscreen}>
                
                <View style={styles.NavigBar}>
                    <View style={styles.studyBText}>
                    <Image style={{width: 50, height:50}}
                        source={require('../images/lastest_logo.png')}/>
                    <Text style={styles.BarText}>StudyB</Text>
                    </View>
                </View>

                <View style={styles.blueLine}>
      
                <View style={styles.iconText}>
                <Image style={{width: 30, height:30}}
                        source={require('../images/reward.png')}/>
                <Text style={styles.profText} >Rewards</Text>
                <Image style={{width: 30, height:30}}
                        source={require('../images/reward.png')}/>
                </View>

                </View>

                

            </View>

        )
    }
}
  
const styles = StyleSheet.create(
    {
        rewardscreen: {
            backgroundColor: 'black',
            flex: 1,
        },
        container: {
            justifyContent:'center',
            alignItems: 'center',
            alignContent: 'center',
            backgroundColor: 'black'
            

        },

        NavigBar: {
            flexDirection: 'row',
            justifyContent:'center',
            alignItems: 'center',
            alignContent: 'center',
            backgroundColor:'black',
            marginBottom: 20,
            width: '60%',
            alignSelf:'center', 
            paddingTop: 20,
            
           
        },
        iconText:{
            flexDirection: 'row',
            alignItems: 'center'
          },
          blueLine: {
            flexDirection: 'column',
            backgroundColor: '#56D6E0',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            height: '8%',
            marginBottom: 20,
            marginTop: 10
          },
          profText: {
            fontSize:18,
            fontWeight: 'bold',
            color: '#ffffff',
            textAlign: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            marginLeft: 10,
            marginRight: 10
        
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