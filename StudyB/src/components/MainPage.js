
import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import Logo from '../images/Logo';


export default class MainPage extends Component{
 
    render(){

 
        return(
            <View style = {styles.container}>
            <Logo/>
            
            
            <Text style = {styles.text}>StudyB</Text>
            
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText} >Sign In</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>

            </View>
        )
    
    }
   
    

}


const styles = StyleSheet.create({
    container : {
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
        fontSize: 20,
        paddingTop:30,
        paddingHorizontal:10
    },
 
    buttonText: {
        fontSize:16,
        fontWeight: '500',
        color:'#ffffff',
        textAlign: 'center',
        alignItems: 'center'
  
      },
      button:{
        backgroundColor:'#56D6E0',
        width: 200,
        borderRadius: 25,
        paddingVertical: 16,
        paddingHorizontal: 10,
        alignItems:'center'
      }
})

