import React, {Component} from 'react';
import { StatusBar } from 'react-native';
import {Field, reduxForm} from 'redux-form';
import InputText from './InputText';
import Logo from '../images/Logo';
import axios from 'axios';
import {Actions} from 'react-native-router-flux'; 

import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Dimensions,
    Button,
    TouchableOpacity
  } from 'react-native';
  
import {
    Colors,
 } from 'react-native/Libraries/NewAppScreen';

const {widht: WIDTH } = Dimensions.get('window')

const styles = StyleSheet.create({

  body: {
    backgroundColor: Colors.black,
    flex: 1,
    
  },
  sectionContainer: {
    marginTop: 20,
    backgroundColor: 'white',
    borderRadius: 25,
    paddingHorizontal: 50
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: '600',
    color: Colors.white,
    marginTop: 0,
    alignItems:'center',
    textAlign: 'center'
  },
  sectionDescription: { 
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  
  },
  input: {
    width: WIDTH,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45, 
    backgroundColor: 'rgba(0, 0, 0, 1)',
    color: 'rgba(255,255,255, 1)',
    marginHorizontal: 0,
    marginVertical: 15
  },
  inputIcon: {
    position: "absolute",
    top: 10,
    left: 37,
  },
  buttonText: {
    fontSize:16,
    fontWeight: '500',
    color:'#ffffff',
    textAlign: 'center'

  },
  button:{
    backgroundColor:'#56D6E0',
    width: 100,
    borderRadius: 25,
    paddingVertical: 16
  },
  errorText:{
    fontSize: 12,
    paddingHorizontal: 16,
    paddingBottom: 8,
    color: 'rgb(128,128,128)',

  },
  body1 : {

    backgroundColor: 'black',
    justifyContent:'center',
    alignItems : 'center',
 
},
});

class SignUpPage extends Component{

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
  
        
        axios.post('https://studyb.azurewebsites.net/api/users', values, config)
                .then(res =>{
                  console.log(res);
                    if(res.status == 201){
                      onlineUser = res.data.id;
                      console.log(onlineUser);
                      Actions.coursepage();
                    }

                    else{
                      alert("boooom!!");
                    }
                    
                  }
                  
                  ).catch(error => {
                    console.log(error);
                    
                    });
        
                
    
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
                    
                <View style={styles.body1}>
                      <Logo/>
                      <Text style={styles.sectionTitle}>StudyB</Text>
                      <Text style={styles.sectionTitle}>Sign Up !</Text>
                      <InputText style={styles.input}
                      />
                        {/* {(touched && error) && <Text style={styles.errorText}>{error}</Text>} */}
                          
                </View>

                    
                <View style={styles.sectionContainer}>
                    <Field name="userName" 
                          placeholder="Username"
                          component={this.renderTextInput}/>
                    <Field name="firstName" 
                          placeholder="firstName"
                          component={this.renderTextInput}/>

                    <Field name="lastName" 
                          placeholder="lastName"
                          component={this.renderTextInput}/>

                    <Field name="email" 
                          placeholder="Email"
                          component={this.renderTextInput}/>

                    <Field name="password" 
                          placeholder="Password"
                          secureTextEntry={true}
                          component={this.renderTextInput}/>
                    {/* <View>
                  
                      <TextInput
                        style={styles.input}
                        returnKeyType="next"
                        placeholder={'Email'}
                        keyboardType= "email-address"
                        autoCapitalize = "none"
                        placeholderTextColor={'white'}
                        ref={(input) => this.username = input}
                        onSubmitEditing={()=> this.username.focus()}
                      />
                      <TextInput
                        style={styles.input}
                        placeholder={'Username'}
                        returnKeyType="next"
                        //onSubmitEditing = {() => this.passwordInput.focus()}
                        keyboardType= "default"
                        autoCapitalize = "none"
                        placeholderTextColor={'white'}
                        ref={(input) => this.password = input}
                        onSubmitEditing={()=> this.password.focus()}
                      /> 
                      <TextInput
                        style={styles.input}
                        placeholder={'Password'}
                        returnKeyType="go"
                        secureTextEntry={true}
                        //ref = {(input) => this.passwordInput = input}
                        placeholderTextColor={'white'}
                      /> 
                    </View> */}
                  <TouchableOpacity style={styles.button} onPress={handleSubmit(this.onSubmit)}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                  </TouchableOpacity>  
              </View>
              </View>
        );
    }

}


const validation = (values) => {
      const errors = {};
      if(!values.userName) {
        errors.username = "Name is required"
      }
      if(!values.email) {
        errors.email = "Email is required"
      }
      if(!values.password) {
        errors.password = "Password is required"
      }
      return errors;
}

  export default reduxForm({
    form: "signup",
    validation 
  })(SignUpPage)
