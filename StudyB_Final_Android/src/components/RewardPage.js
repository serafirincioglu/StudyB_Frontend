import React, {Component} from 'react';
import axios from 'axios';
import {ListItem} from 'react-native-elements';

import {
    StyleSheet,
    View,
    Image,
    Text,
  } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
  

export default class RewardPage extends Component{
    constructor(props) {
        super(props);
        this.state = {rewards: [], users: [], rewardList: []};
    }
  
    componentDidMount(){
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
          }}

          Promise.all([
    
            axios.get('https://studyb.azurewebsites.net/api/rewards/' + onlineUser + '/user/', config),
            axios.get('https://studyb.azurewebsites.net/api/users/', config)
          ])
            .then(([response1, response2]) => {
   
                console.log("Response of get rewards of user : " + response1);
                this.setState({rewards: response1.data});
                this.setState({users: response2.data});

               console.log("this.state.rewards : "+ this.state.rewards);
                //console.log("this.state.users.id: "+this.state.users.id); 
                
        
      
            })

    }

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

                <ScrollView>
                    {   

                        this.state.rewards.map((l,i) => (
                                
                                <ListItem style= {styles.listStyle}
                                   
                                    key={i}
                                    leftAvatar={{ rounded: false ,source: require('../images/reward2.png')   } }  
                                    avatarStyle={{backgroundColor:'white' }}    
                            
                                     title={l.rewardName}
                                    titleStyle={{ color: 'black', textAlign: 'center', fontSize: 22, fontWeight: 'bold', backgroundColor: 'white'}}
                                    //subtitle={l.text}
                                    //subtitleStyle={{ color: 'black' , backgroundColor: 'white'}}
                                    //rightSubtitle={l.dateOfPost.slice(11,16)}
                                    color='black' 
                                    containerStyle={{ borderBottomWidth: 0, borderColor: 'white', borderRadius: 35, backgroundColor: 'white', width: 200}}
                                    bottomDivider
                            

                                />
                        
                            )   
                        )  
                    }
                    </ScrollView> 

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
        listStyle: {
            height: 100,
            paddingTop: 20,
            paddingHorizontal:50,
            paddingVertical: 30,
            borderRadius: 20,
            backgroundColor: 'black',
            alignItems: 'center',
            justifyContent: 'center', 
            color: '#56D6E0',
            flex:1
    
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
            paddingTop: 60,
            
           
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
            fontSize:25,
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