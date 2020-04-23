
import React, {Component} from 'react';
import { StatusBar } from 'react-native';
import {Field,reduxForm} from 'redux-form';
import Logo from '../images/Logo'
import axios from 'axios';
import InputText from './InputText';



import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Dimensions,
    TouchableOpacity
  } from 'react-native';
  
  import {
    Colors,
  } from 'react-native/Libraries/NewAppScreen';
import { Actions } from 'react-native-router-flux';


const {widht: WIDTH } = Dimensions.get('window')


class SignInPage extends Component {

  coursepage(){
    Actions.coursepage()
  }
  
  onSubmit = (values) => {
    console.log(values);
    const config = {
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      }}

    
      axios.get('https://studyb.azurewebsites.net/api/users', config)
              .then(response => {
                console.log(response.data);
                console.log(values.userName);
                console.log(values.password);
                response.data.forEach(element => {
                  if(element.userName === values.userName
                    && element.password === values.password){
                      console.log("nice");
                      onlineUser = element.id;
                      console.log(onlineUser);
                      Actions.coursepage();
                  }
                });
        })
  }
  

  

  renderTextInput = (field) => {
    const {meta: {touched,error}, label, secureTextEntry, maxLength, keyboardType, placeholder, input: {onChange, ...restInput}} = field;
    return (
      <View>
        <InputText
          onChangeText={onChange}
          maxLength={maxLength}
          placeholder={placeholder}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          label={label}
          {...restInput} />
          {(touched && error) && <Text style={styles.errorText}>{error}</Text>}
      </View>
    

    );
}
  render() {
    const {handleSubmit} = this.props; 
    
        return(
              
              <View style={styles.body}>
                <StatusBar

                  backgroundColor="white"
                  barStyle="light-content"
                  />
                  <View style={styles.body1}>
                    <Logo/>
                  </View>
                <Text style={styles.sectionTitle}>StudyB</Text>
                <Text style={styles.sectionDescription}>
                      <Text style={styles.sectionTitle}>Sign In !</Text>
                  </Text>
                

                <View style={styles.sectionContainer}>
                    <View>
                    
                    <Field name="userName" 
                          placeholder="Username"
                          component={this.renderTextInput}/>
                    <Field name="password" 
                          placeholder="Password"
                          component={this.renderTextInput}/>
                    </View>


                    <TouchableOpacity style={styles.button} onPress={handleSubmit(this.onSubmit)}>
                    <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                
                </View>
                <View style={styles.signUpTextCont}>
                    <Text style={styles.signUpText}>Dont have an account Sign Up!</Text>
                    <TouchableOpacity><Text style={styles.input} style={styles.button}/></TouchableOpacity>
              

                </View>
                
              </View>
          
 
        );
    }

}
export default reduxForm({
  form: "signin"
})(SignInPage)


const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: Colors.black,
    },
    engine: {
      position: 'absolute',
      right: 0,
    },
    body: {
      backgroundColor: Colors.black,
      flex: 1,
     
      
    },
    body1: {
      backgroundColor: Colors.black,
      flex: 1,
      alignItems: 'center',
      paddingTop: 100
      
    },
    sectionContainer: {
      marginTop: 70,
      paddingHorizontal: 100,
      backgroundColor: 'white',
      borderRadius: 25
    },
    sectionTitle: {
      fontSize: 30,
      fontWeight: '600',
      marginTop: 15,
      alignItems:'center',
      textAlign : 'center',
      color: '#56D6E0',
      paddingTop:30,
      paddingHorizontal:10
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
      color: Colors.dark,
      alignItems:'center'
    },
    highlight: {
      fontWeight: '700',
    },
    footer: {
      color: Colors.dark,
      fontSize: 12,
      fontWeight: '600',
      padding: 4,
      paddingRight: 12,
      textAlign: 'right',
    },
    input: {
      width: WIDTH,
      height: 45,
      borderRadius: 25,
      fontSize: 16,
      paddingLeft: 45, 
      backgroundColor: 'rgba(0, 0, 0, 1)',
      color:'#ffffff',
      marginHorizontal: 25
    },
    inputIcon: {
      position: "absolute",
      top: 10,
      left: 37,
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
        fontSize:16,
        fontWeight: '500',
        color:'#ffffff',
        textAlign: 'center',
        alignSelf: 'center'
  
      },
      button:{
        backgroundColor:'#56D6E0',
        width: 100,
        borderRadius: 25,
        paddingVertical: 16,
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'

      },
      signUpText:{
          color:'white',
          fontSize: 16,

      },
      signUpTextCont:{
          flexGrow: 1,
          alignItems: 'center',
          justifyContent: 'flex-end',
          marginVertical: 16
      }
  });
  