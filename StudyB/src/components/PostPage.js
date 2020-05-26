import React, { useState,Component }  from 'react';
import { StyleSheet,Text, View, TextInput, Button, ScrollView, FlatList, TouchableOpacity, Modal } from 'react-native';
import {ListItem,CheckBox, ButtonGroup,Icon} from 'react-native-elements';

import PostItem from './PostItem';
import PostInput from './PostInput';
import NavigationBar from './NavigationBar';
import Book from '../images/Book';
import axios from 'axios';

export default class PostPage extends Component {
  
  constructor(props) {
    super(props);
    this.state = {courseGoals: [],
                   comment: '', 
                   nameOfChatroom: '', 
                   usernameOfChatroom: [],
                  };
    
  }

  addGoalHandler = (goalTitle) => {
    
    setCourseGoals(currentGoals => [
      ...currentGoals, 
      {id:goalTitle.id , value: goalTitle.text}
    ]); 
    setIsAddMode(false);
  };

  removeGoalHandler = goalId =>{
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal)=> goal.id !== goalId);
    });
  };

  cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  } 
  
  // componentDidMount(){
  //   const config = {
  //     headers: {
  //         'Content-Type': 'application/json',
  //         'Accept': 'application/json'
  //   }}
  //   Promise.all([
  //     axios.get('https://studyb.azurewebsites.net/api/chatrooms/' + onlineChatroom + '/messages/',config),
  //     axios.get('https://studyb.azurewebsites.net/api/chatrooms/' + onlineChatroom ,config),
  //     axios.post('https://studyb.azurewebsites.net/api/messages/' + onlineChatroom + '/users/' + onlineUser + '/messages/' , {text: this.state.comment}, config),

  //   ]).then((response1, response2, response3) => {
  //       //response.data.foreach(d => this.addGoalHandler(d))
  //       //console.log("reponse of courses page" +   response.data);
  //       this.setState({courseGoals: response1.data });
  //       this.setState({chatroomName: response2.data.chatroomName});
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     })

  // }
 //Calisan kod buuu
  componentDidMount(){
    const config = {
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
    }}

  //   axios.get('https://studyb.azurewebsites.net/api/chatrooms/' + onlineChatroom + '/messages/',config)
  //     .then(response => {
  //       //response.data.foreach(d => this.addGoalHandler(d))
  //       console.log("reponse of courses page" +   response.data);
  //       this.setState({courseGoals: response.data });
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     })
  // //}
//-------------------------------------------
  // componentDidMount2(){
    // const config = {
    //   headers: {
    //       'Content-Type': 'application/json',
    //       'Accept': 'application/json'
    // }}
    Promise.all([
      

      axios.get('https://studyb.azurewebsites.net/api/chatrooms/'+ onlineChatroom + '/messages/', config),
      axios.get('https://studyb.azurewebsites.net/api/chatrooms/' + onlineChatroom ,config),
      axios.get('https://studyb.azurewebsites.net/api/chatrooms/' + onlineChatroom + '/messages/',config)
    ])
      .then(([response1, response2,response]) => {
        //response.data.foreach(d => this.addGoalHandler(d))
     
        //this.setState({courseGoals: response.data });
        // console.log("Before"+usernameOfChatroom);
        // console.log("response1.data.userName : " + response1.data.userName);
        // console.log("response1.userName : " + response1.userName);
  
        console.log("response1.data : " + response1.data);

         this.setState({usernameOfChatroom: response1.data});
        //  console.log("After" + usernameOfChatroom);
        
        this.setState({chatroomName: response2.data.chatroomName});
        this.setState({courseGoals: response.data });

      })
      // .catch(function (error) {
      //   console.log(error);
      // })
  }

  handleTextChange = (inputText) => {
    this.state.comment = inputText;
  }

  // getCourseName(){
  //   const config = {
  //     headers: {
  //         'Content-Type': 'application/json',
  //         'Accept': 'application/json'
  //   }}
    
  //   axios.get('https://studyb.azurewebsites.net/api/chatrooms/' + onlineChatroom ,config)
  //     .then(response => {
  //       //response.data.foreach(d => this.addGoalHandler(d))
        
  //       this.setState({chatroomName: response.data.chatroomName});
        
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     })

  //}

  // getusername(){
  //   const config = {
  //     headers: {
  //         'Content-Type': 'application/json',
  //         'Accept': 'application/json'
  //   }}
    
  //   axios.get('https://studyb.azurewebsites.net/api/users/' + onlineUser ,config)
  //     .then(response => {
  //       //response.data.foreach(d => this.addGoalHandler(d))
  //       console.log("response.data.userName");
  //       console.log(response.data.userName);
  //       this.setState({usernameOfChatroom: response.data.userName});
        
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     })

  // }


  postSomething(){
    console.log("this.state.comment!");
    console.log(this.state.comment);
   
    const config = {
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
    }}

    axios.post('https://studyb.azurewebsites.net/api/messages/' + onlineChatroom + '/users/' + onlineUser + '/messages/' , {text: this.state.comment}, config)
      .then(response => {
        console.log("Response : " +   response.id);
        console.log("Response.text : " +   response.text);
        this.componentDidMount();
       
      })
      .catch(function (error) {
        console.log(error);
        console.log("Failed to post !");
      })

  }

  

  render(){
    //this.getCourseName();
    //this.getusername();
    
    return (
      
      <View style={styles.screen}>    
        
        <NavigationBar />
        
        <View style={styles.blueLine}>
          <View style={styles.iconText}>
            <Book />
            <Text style={styles.profText}>{this.state.chatroomName}</Text>
          </View>
        </View>
        
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}  
            onChangeText={this.handleTextChange}  
            placeholder="Enter your comment"  
            placeholderTextColor="red" 
          >
          </TextInput>
        </View>
        
        <TouchableOpacity style={styles.button} onPress={() => this.postSomething()}>
          <Text style={styles.buttonText}>Post Something!</Text>
        </TouchableOpacity>

        <View style={styles.container}>
          <Text style={styles.text}>Courses</Text>
          
          <ScrollView>
          {   

              this.state.courseGoals.map((l,i) => (
                
                    <ListItem
                        
                        key={i}
                        title={l.userName}
                        subtitle={l.text}
                        rightSubtitle={l.dateOfPost.slice(11,16)}
                        color='black' 
                        bottomDivider
                

                    />
              
                  )   
              )  
          }
          </ScrollView>
        </View>
      </View>
  );
  }
}

const styles = StyleSheet.create({
  
  screen: {
    flex:1,
    padding: 50,
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
  
  profText: {
    fontSize:18,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginLeft: 10

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
  
  buttonText: {
    fontSize:16,
    fontWeight: 'bold',
    color:'#ffffff',
    textAlign: 'center',
    alignItems: 'center'

  },
  inputContainer: { 
    padding: 10, 
    marginBottom: 10,
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: 'white',
  },
  input: {
    width: '80%',
    borderColor: '#56D6E0',
    borderWidth: 1,
    padding: 10, 
    marginBottom: 10,
    color: '#56D6E0'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    backgroundColor: 'black'
  }, 
  
});
