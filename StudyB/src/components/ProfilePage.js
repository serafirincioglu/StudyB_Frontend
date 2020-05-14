import React, {Component} from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import axios from 'axios';


import NavigationBar from './NavigationBar';
import Reward from '../images/Reward';
import Book from '../images/Book';

import {
    StyleSheet,
    View,
    Image,
    Text
  } from 'react-native';


export default class ProfilePage extends Component {

    constructor(props) {
        super(props);
        this.state = {chatroom: []};
    }

   componentDidMount(){
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }}
    
    axios.get('https://studyb.azurewebsites.net/api/chatrooms',config)
    .then(response => {
      console.log(response.chatroomName);
      this.setState({chatroom: response.chatroomName });
      
    })
    .catch(function (error) {
      console.log('noooooo');
    })
   }

    render()
    {
        var SampleNameArray = [ "Course 1", "Course 2", "Course 3", "Course 4", "Course 5", "Course 6" ];
        
        return(

                <View style={styles.screen}>  

                <NavigationBar/>

                <View style={styles.blueLine}>
                
                <View style={styles.iconText}>
                <View style={StyleSheet.container}>
                <Image style={{width: 40, height:40}}
                    source={require('../images/Profile.png')}/>
                </View>
                <Text style={styles.profText}>My Profile</Text>
                </View>

                </View>
                
                <View style={styles.namePP}>

                <View style={styles.NavigBar}>
                <View style={styles.studyBText}>
                <Image style={{width: 100, height:100}}
                    source={require('../images/defaultpp.png')}/>
                </View>
                </View>

                <View style={styles.nameDep}>
                <Text style={styles.NameStyle}>Name</Text>
                <View>
                    <Text style={styles.buttonText}>abc</Text>
                </View>
                <Text style={styles.NameStyle}>Surname</Text>
                <View>
                    <Text style={styles.buttonText}>
                        
                    </Text>
                </View>
                <Text style={styles.NameStyle}>Department</Text>
                <TouchableOpacity style={styles.rewardsButton}> 
                    <Reward />
                    <Text style={styles.buttonText}>Rewards</Text>
                </TouchableOpacity>
                </View>

                </View>
                
                <View style={styles.blueLine}>
                <View style={styles.iconText}>
                <Book />
                <Text style={styles.profText}>Courses</Text>
                </View>
                </View>
                <ScrollView>

            { SampleNameArray.map((item, key)=>(
                <TouchableOpacity style={styles.button} >
                <Text key={key} style={styles.buttonText} > { item } </Text>
                </TouchableOpacity>
                )
                )}

            </ScrollView>
            
            
            </View>

            )
    }
    
}

const styles = StyleSheet.create({
    screen: {
      flex:1,
      paddingTop: 50,
      paddingHorizontal: '5%',
      backgroundColor: 'black',
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
    button:{
      backgroundColor:'#56D6E0',
      width: 200,
      height: 50,
      borderRadius: 25,
      paddingVertical: 16,
      paddingHorizontal: 10,
      alignSelf:'center',
      marginBottom: 30,
      alignItems: 'center',
      justifyContent: 'center'
    },
    rewardsButton:{
      backgroundColor:'#56D6E0',
      width: 90,
      height: 80,
      borderRadius: 25,
      paddingVertical: 16,
      paddingHorizontal: 10,
      marginTop: 15,
      alignItems: 'center',
      justifyContent: 'center',
  
    },
    buttonText: {
      fontSize:14,
      fontWeight: 'bold',
      color:'#ffffff',
      textAlign: 'center',
      alignItems: 'center'
  
    },
    BarText: {
      fontSize:16,
      fontWeight: 'bold',
      color: '#56D6E0',
      textAlign: 'center',
      alignItems: 'center',
      marginBottom: 20, 
      
  
    },
  
    profText: {
      fontSize:18,
      fontWeight: 'bold',
      color: '#ffffff',
      textAlign: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      marginLeft: 10
  
    },
  
    NameStyle: {
      fontSize:16,
      fontWeight: 'bold',
      color: '#56D6E0',
      alignSelf: 'flex-start',
      marginTop: '10%'
    
  
    },
  
    namePP: {
  
      flexDirection: 'row',
      justifyContent:'center',
      backgroundColor:'black',
      marginBottom: 10,
      marginTop: 10,
      width: '60%',
      alignSelf: 'flex-start'
  
    },
    nameDep: {
      flexDirection: 'column'
    },
    container: {
        justifyContent:'center',
        alignItems: 'center',
        alignContent: 'center',
        

    }
    
  });
  