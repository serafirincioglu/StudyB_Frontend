import React, { Component }  from 'react';
import { StyleSheet,Text, View, TextInput, ScrollView,TouchableOpacity } from 'react-native';
import {ListItem} from 'react-native-elements';
import TimerMixin from 'react-timer-mixin';

import NavigationBar from './NavigationBar';
import Book from '../images/CoursesIcon';
import axios from 'axios';

export default class PostPage extends Component {
  
  constructor(props) {
    super(props);
    this.state = {courseGoals: [],
                   comment: '', 
                   nameOfChatroom: '', 
                   usernameOfChatroom: [],
                   messagecountofuser: '',
                   first10Reward: '8763b3e2-7990-4155-b0ba-e3be6d7bdf6f',
                   masterReward: 'cb9547a7-52e0-4dad-b9ec-cf2ae31c5ff1',
                   rewardId: '',
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
 
 //Calisan kod buuu
  componentDidMount(){
    const config = {
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
    }}

  
    Promise.all([
      

      axios.get('https://studyb.azurewebsites.net/api/chatrooms/'+ onlineChatroom + '/messages/', config),
      axios.get('https://studyb.azurewebsites.net/api/chatrooms/' + onlineChatroom ,config),
      axios.get('https://studyb.azurewebsites.net/api/chatrooms/' + onlineChatroom + '/messages/',config),
      axios.get('https://studyb.azurewebsites.net/api/users/' + onlineUser, config)
    ])
      .then(([response1, response2,response,response4]) => {
        
  
        console.log("response1.data : " + response1.data);

         this.setState({usernameOfChatroom: response1.data});
       
         TimerMixin.setTimeout(() => {           
           this.componentDidMount();       
           },5000);

        this.setState({chatroomName: response2.data.chatroomName});
        this.setState({courseGoals: response.data });

        this.setState({messagecountofuser: response4.data.messageCount});
        console.log(" message count in compMount(): " + response4.data.messageCount);
      
      })
      
  }

  

  handleTextChange = (inputText) => {
    this.state.comment = inputText;
  }

  


  postSomething(){
    console.log("this.state.comment!");
    console.log(this.state.comment);
   
    const config = {
     // timeout: 1000,
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
    }}

    axios.post('https://studyb.azurewebsites.net/api/messages/' + onlineChatroom + '/users/' + onlineUser + '/messages/' , {text: this.state.comment}, config)
      .then(response => {
        console.log("Response : " +   response.id);
        console.log("Response.text : " +   response.text);
        //this.componentDidMount();

        console.log("message count : " + this.state.messagecountofuser);
        
        if(this.state.messagecountofuser === 3){
          console.log("10th mes");
          this.state.rewardId = this.state.first10Reward;
          this.rewardmethod();
        }
        else if(this.state.messagecountofuser === 19){
          console.log("20th mes");
          this.state.rewardId = this.state.masterReward;
          this.rewardmethod();
        }
        else {
          console.log("no reward ! ");
        }
        this.componentDidMount();
        
      })
      .catch(function (error) {
        console.log(error);
        console.log("Failed to post !");
      })

  }

  rewardmethod(){
    const config = {
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
    }}
    const config1 = {
      
    }
    //if(this.state.messagecountofuser === 10 || this.state.messagecountofuser === 20){
      console.log("we have : " + this.state.messagecountofuser + " messages");
      console.log("this.state.rewardId : " +this.state.rewardId);
      console.log("online user : " + onlineUser);

      axios.post('https://studyb.azurewebsites.net/api/rewards/' + this.state.rewardId + '/user/' + onlineUser, config1 , config)
      .then(responsePost2 => {
          console.log("response2: "+responsePost2);
      })
      .catch(function(error){
        console.log(error);
        console.log("Reward error !");
      })
 
  }

  

  render(){
   
    
    return (
      
      <View style={styles.screen}>    
        
        <NavigationBar />
        
        <View style={styles.blueLine2}>
        <View style={styles.blueLine}>
          <View style={styles.iconText}>
            <Book />
            <Text style={styles.profText}>{this.state.chatroomName}</Text>
          </View>
        </View>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}  
            onChangeText={this.handleTextChange}  
            placeholder="Enter your comment"  
            placeholderTextColor='#56D6E0' 
            
          >
          </TextInput>
        </View>
        
        <TouchableOpacity style={styles.button} onPress={() => this.postSomething()}>
          <Text style={styles.buttonText}>Post Something!</Text>
        </TouchableOpacity>

        <View style={styles.container}>
          
          <ScrollView>
          {   

              this.state.courseGoals.map((l,i) => (
                
                    <ListItem style= {styles.listStyle}
                        
                        key={i}
                        title={l.userName}
                        titleStyle={{ color: 'black', fontSize: 20, fontWeight: 'bold', backgroundColor: 'white'}}
                        subtitle={l.text}
                        subtitleStyle={{ color: 'black' , backgroundColor: 'white'}}
                        rightSubtitle={l.dateOfPost.slice(11,16)}
                        containerStyle={{ borderBottomWidth: 0, borderColor: 'white', borderRadius: 25, backgroundColor: 'white', width: 300}} 
                        bottomDivider
                

                    />
              
                  )   
              )  
          }
           <View style={styles.emptySpace3}></View>
          </ScrollView>
        </View>
      </View>
  );
  }
}

const styles = StyleSheet.create({
  
  screen: {
    flex:1,
    backgroundColor: 'black',
    paddingTop:50,
    paddingBottom:50
  },
  emptySpace3:{
    backgroundColor: 'black',
    height: 400,
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
    height: '10%',
    width: 300,
    marginBottom: 20,
    marginTop: 10, 
  },
  blueLine2: {
    backgroundColor: '#56D6E0',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    height: '13%',
    width: '100%',
    marginBottom: 20,
    marginTop: 10, 
  },
  profText: {
    fontSize:20,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginLeft: 10

  },
  listStyle: {
    
    paddingTop: 10,
    paddingHorizontal:10,
    paddingVertical: 5,
    borderRadius: 20,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center', 
    color: '#56D6E0',
    flex:1

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
    backgroundColor: 'black',
  },
  input: {
    width: '80%',
    borderColor: '#56D6E0',
    borderWidth: 1,
    padding: 10, 
    marginBottom: 10,
    color: '#56D6E0',
    fontSize: 16,
    borderRadius: 20
},
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    backgroundColor: 'black'
  }, 
  
});
