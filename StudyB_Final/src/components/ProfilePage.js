import React, {Component} from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import axios from 'axios';
import {ListItem,CheckBox, ButtonGroup,Icon} from 'react-native-elements';
import { Actions } from 'react-native-router-flux';


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
      this.state = {chatroom: [], nameofuser:'', surnameofuser: ''};
  }


  routeToChatRoom = (chId) => {
    onlineChatroom = chId;
    console.log(chId);
    console.log(onlineChatroom);
    Actions.postpage();

  } 

  postpage(){
    Actions.postpage()
  }

  rewardpage(){
    Actions.rewardpage()
  }

   
  //  componentDidMount(){
  //     const config = {
  //         headers: {
  //             'Content-Type': 'application/json',
  //             'Accept': 'application/json'
  //         }}
      
  //     let one = "https://studyb.azurewebsites.net/api/users/" + onlineUser;
  //     let two = "https://studyb.azurewebsites.net/api/chatrooms/"  + onlineUser + '/user';
      
  //     console.log("dkfkldjgld");
  //     console.log(one);
  //     console.log(two);


  //     const requestOne = axios.get(one, config);
  //     const requestTwo = axios.get(two, config);
          
  //     axios.all([requestOne, requestTwo]).then(axios.spread((...responses) => {
  //       //console.log(responses[0].data);
  //       //console.log(responses[1].data);
  //       //this.state.user = responses[0].data;
  //       this.setState({user: response[0].data});
  //       this.setState({chatroom: response[1].data});

  //       //this.state.chatroom = responses[1].data;

        
  //       // use/access the results 
  //     })).catch(errors => {
  //       console.log('noooooo');
  //     })
  //    }

 
// getName(onlineUser){
//     this.setState.currentUserName = onlineUser.data.firstName;
//     this.setState.currentUserSurname = onlineUser.data.lastName;
  
//   }
  componentDidMount(){
    
    const config = {
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
    }}
    
    Promise.all([
      axios.get('https://studyb.azurewebsites.net/api/users/' + onlineUser, config),
      axios.get('https://studyb.azurewebsites.net/api/chatrooms/' + onlineUser + '/user',config),
    ]).then((response1,response2) => {
      console.log("response1[1].data");
      console.log(response1[1].data);
      this.setState({nameofuser: response1[0].data.firstName});
      this.setState({surnameofuser: response1[0].data.lastName});
      this.setState({chatroom: response1[1].data});
    })

  }


  // componentDidMount(){
  //   const config = {
  //     headers: {
  //         'Content-Type': 'application/json',
  //         'Accept': 'application/json'
  //     }}

  //   axios.get('https://studyb.azurewebsites.net/api/users/' + onlineUser, config)
  //   .then(response => {
  //     this.setState({nameofuser: response.data.firstName});
      
  //   })
  //   .catch(function (error) {
  //     console.log('noooooo');
  //   })

  // }

  // componentDidMount(){
  //   const config = {
  //       headers: {
  //           'Content-Type': 'application/json',
  //           'Accept': 'application/json'
  //       }}
      
  //   axios.get('https://studyb.azurewebsites.net/api/chatrooms/' + onlineUser + '/user',config)
  //   .then(response => {
  //     console.log(response.data);
  //     this.setState({chatroom: response.data});
      
  //   })
  //   .catch(function (error) {
  //     console.log('noooooo');
  //   })
  //  }

  render()
    {
        var SampleNameArray = [ "Course 1", "Course 2", "Course 3", "Course 4", "Course 5", "Course 6" ];
       
        return(
              
                <View style={styles.screen}>  
                  
                  <NavigationBar/>
                  <ScrollView>
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

                  <View style={styles.emptySpace1}></View>
                    <View style={styles.NavigBar}>
                      <View style={styles.studyBText}>
                        <Image style={{width: 100, height:100}}
                          source={require('../images/defaultpp.png')}/>
                      </View>
                    </View>

                    <View style={styles.emptySpace2}></View>

                    <View style={styles.nameDep}>
                      <Text style={styles.NameStyle}>Name</Text>
                      <Text style={styles.NameStyle}>{this.state.nameofuser}</Text>
                      <Text></Text>
                      <Text style={styles.NameStyle}>Surname</Text>
                      <Text style={styles.NameStyle}>{this.state.surnameofuser}</Text>
                      <View>
                        <Text style={styles.buttonText}>
                            
                        </Text>
                      </View>
                      <Text style={styles.NameStyle}>Department</Text>
                      <Text style={styles.NameStyle}>Computer Science</Text>
                      <TouchableOpacity style={styles.rewardsButton} onPress={() => this.rewardpage()}> 
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
                
                  
                  {   
                      this.state.chatroom.map((l,i) => (
                          <ListItem style= {styles.listStyle}
                              leftAvatar={{ rounded: false ,source: require('../images/classroom2.png') , size: 'small'  } }  
                              avatarStyle={{backgroundColor:'white' }} 
                              key={i}
                              title={l.chatroomName}
                              titleStyle={{ color: 'black', fontSize: 16, fontWeight: 'bold', backgroundColor: 'white', textAlign: 'center'}}
                              containerStyle={{ borderBottomWidth: 0, borderColor: 'white', borderRadius: 35, backgroundColor: 'white', width: 250, height: 90}} 
                              bottomDivider
                              onPress={() => {this.routeToChatRoom(l.id)}}
                          />
                        
                      )   
                        
                     )  
                      
                      
                  }
                
                <View style={styles.emptySpace3}></View>
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
    emptySpace1:{
      backgroundColor: 'black',
      width: 120,
    },
    emptySpace2:{
      backgroundColor: 'black',
      width: 30,
    },
    emptySpace3:{
      backgroundColor: 'black',
      height: 50,
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
      fontSize:25,
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
  