import React, { Component }  from 'react';
import { StyleSheet,Text, View, Button, TouchableOpacity } from 'react-native';
import Logo from '../images/Logo';
import Reward from '../images/Reward';
import Book from '../images/Book';
import Chat from '../images/Chat';
import Profile from '../images/Profile'
import { Actions } from 'react-native-router-flux';

export default class FeedPage extends Component{
    
    coursepage(){
        Actions.coursepage()
    }

    // profile(){
    //     Actions.profile()
    // }
    
    // reward(){
    //     Actions.reward()
    // }

    // chatroom(){
    //     Actions.chatroom()
    // }

    render(){
    return (
      <View style={styles.screen}>
        <View style={styles.logo}>
        <Logo/>
        </View>
              
        <Text style = {styles.text}>StudyB</Text>
  
        <View style={styles.buttonContainer}>
          <View style={styles.inputContainer}>
  
          <TouchableOpacity style={styles.button}>
              <Profile />
              <Text style={styles.buttonText}>Profile</Text>
            </TouchableOpacity>
     
            <TouchableOpacity style={styles.button}>
              <Book />
              <Text style={styles.buttonText}>Courses</Text>
            </TouchableOpacity>
         
  
          </View>
  
          <View style={styles.inputContainer}>
  
          <TouchableOpacity style={styles.button}>
              
              <Reward />
              <Text style={styles.buttonText}>Rewards</Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.button}>
              <Chat />
              <Text style={styles.buttonText}>Chatrooms</Text>
            </TouchableOpacity>
  
          </View>
        </View>
      </View>
    );
    }
}
  
  const styles = StyleSheet.create({
    logo: {
      alignItems: 'center',
    },
  
    screen: {
      padding: 20,
          flex: 1,
          backgroundColor: 'black',
          justifyContent:'center',
          alignItems : 'center',
          paddingTop: 100
    },
    
    text: {
      textAlign : 'center',
      color: '#56D6E0',
      fontWeight: 'bold',
      fontSize:40,
      paddingTop:30,
      paddingHorizontal:10
  },
    inputContainer: { 
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      padding: 10,
    },
  
    buttonBackground: {
      backgroundColor: '#ccc',
      borderColor: 'black',
      borderWidth: 1 },
    
      buttonContainer: {
      padding:20,
      justifyContent: 'center'
    },
  
    buttonStyle: {
      flex: 1,
      alignSelf: 'stretch',
      backgroundColor: '#fff',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#007aff',
      marginLeft: 5,
      marginRight: 5,
      marginHorizontal:10,
      marginVertical:10,
    },
    buttonText: {
      fontSize:16,
      fontWeight: '500',
      fontWeight: 'bold',
      color:'#ffffff',
      textAlign: 'center',
      alignItems: 'center'
  
    },
    button:{
      backgroundColor:'black',
      width: 150,
      height: 150,
      borderRadius: 25,
      paddingVertical: 16,
      paddingHorizontal: 10,
      alignItems:'center',
      justifyContent: 'center'
    }
  
  });