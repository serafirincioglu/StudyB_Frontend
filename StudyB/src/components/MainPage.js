
import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import Logo from '../images/Logo';
import {Actions} from 'react-native-router-flux'; 
import {connect} from 'react-redux';

class MainPage extends Component{
    signin(){
        Actions.signin()
    }

    signup(){
        Actions.signup()
    }

    render(){

        return(
           
                <View style = {styles.container}>
                    <Logo/>
            
                    <Text style = {styles.text}>StudyB</Text>
                    
                    <TouchableOpacity onPress={this.signin} style={styles.button} >
                        <Text  style={styles.buttonText}  >Sign In</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={this.signup} style={styles.button}>
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                    
                </View>
                

             
        )
    
    }
   
    

}
export default connect(null,null)(MainPage)

const styles = StyleSheet.create({
    container : {
        padding: 20,
        flex: 1,
        backgroundColor: 'black',
        justifyContent:'center',
        alignItems : 'center',
        paddingTop: 70
        
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
        paddingHorizontal: 70,
        alignItems:'center'
      }
})

