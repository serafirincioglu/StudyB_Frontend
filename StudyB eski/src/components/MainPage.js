
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
                    
                    <View style = {styles.buttonContainer} >
                    <TouchableOpacity onPress={this.signin} style={styles.button} >
                        <Text  style={styles.buttonText}  >Sign In</Text>
                    </TouchableOpacity>
                    <View style= {styles.emptySpace}></View>
                    <TouchableOpacity onPress={this.signup} style={styles.button}>
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                    </View>
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
    buttonContainer: {
        padding:20,
        flexDirection: "column",
        justifyContent: 'center'
      },

    text: {
        textAlign : 'center',
        color: '#56D6E0',
        fontSize: 30,
        paddingTop:30,
        paddingBottom: 20,
        paddingHorizontal:10
    },
 
    buttonText: {
        fontSize:16,
        fontWeight: 'bold',
        color:'#ffffff',
        textAlign: 'center',
        alignItems: 'center'
  
      },
      emptySpace: {
        height: 20,
      },
      button:{
        backgroundColor:'#56D6E0',
        width: 200,
        borderRadius: 30,
        paddingVertical: 16,
        paddingHorizontal: 70,
        alignItems:'center'
      }
})

