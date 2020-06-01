import React, {Component} from 'react';
import {View, ScrollView,StyleSheet,Text} from 'react-native';
import {ListItem} from 'react-native-elements';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import {} from 'react-native-fontawesome';
import Book from '../images/CoursesIcon';
import NavigationBar from '../images/NavigationBar';

export default class CoursesList extends Component{
    
    constructor(props) {
        super(props);
        this.state = {chatroom: []};
    }

    postpage(){
        Actions.postpage()
    }




    componentDidMount(){
        axios.get('https://studyb.azurewebsites.net/api/chatrooms')
          .then(response => {
            this.setState({chatroom: response.data });
          })
          .catch(function (error) {
            console.log(error);
          })
    }

    routeToChatRoom = (chId) => {
        
        onlineChatroom = chId;
        console.log(chId);
        console.log(onlineChatroom);
        Actions.postpage();

    }
            

    render(){
        const {handleSubmit} = this.props;  
        return(
        
    <View style= {styles.courseScreen}>
     <NavigationBar />
    <View style={styles.blueLine}>
      
      <View style={styles.iconText}>
      <Book/>
      <Text style={styles.profText} >Chatrooms</Text>
      <Book/>
      </View>
      </View>
        
        <ScrollView> 
     
            <View style={styles.container}>

                
                {   
                    this.state.chatroom.map((l,i) => (
                        <ListItem style= {styles.listStyle}
                            leftAvatar={{ rounded: false ,source: require('../images/chatroom1.png') , size: 'medium'  } }  
                            avatarStyle={{backgroundColor:'white' }}
                            key={i}
                            title={l.chatroomName}
                            titleStyle={{ color: 'black', fontSize: 16, fontWeight: 'bold', backgroundColor: 'white', textAlign: 'center'}}
                            //subtitle={l.id}
                            //subtitleStyle={{ color: 'black' , backgroundColor: 'white', fontWeight: 'bold', textAlign: 'center'}}
                            containerStyle={{ borderBottomWidth: 0, borderColor: 'white', borderRadius: 35, backgroundColor: 'white', width: 250, height: 90}}
                            bottomDivider
                            
                            onPress={() => {this.routeToChatRoom(l.id)}}
                
                        />
                       
                        )   
                       
                    )  
                    
                    
                }

            </View>
            <View style={styles.emptySpace3}></View>
        </ScrollView>
        </View>
        
        );
    }
}


const styles = StyleSheet.create({
    courseScreen:{
        paddingTop:50,
        backgroundColor: 'black',
        flex: 1,
    },
    body: {
        backgroundColor: 'black',
        flex: 1,
    },
    emptySpace3:{
        backgroundColor: 'black',
        height: 70,
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
    container : {
        padding: 30,
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 10,
        paddingBottom:0,
        alignContent: 'center',
        flex: 1,
        backgroundColor: 'black',
        justifyContent:'center',
        alignItems : 'stretch',

    },
    text: {
        textAlign : 'center',
        fontSize: 20,
        paddingTop:0,
        color:'white'
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
        fontSize:25,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginLeft: 10,
        marginRight: 10
    
      },
      studyBText: {
              flexDirection: 'row',
              width: '40%',
              justifyContent:'space-between',
              alignItems: 'center',
              alignSelf: 'center',
          }

})