import React, {Component} from 'react';
import {View, ScrollView,StyleSheet,StatusBar,Text} from 'react-native';
import {ListItem,CheckBox, ButtonGroup,Icon} from 'react-native-elements';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import {} from 'react-native-fontawesome';
//import {} from 'react-native-vector-icons';



export default class CoursePage extends Component{
    
    constructor(props) {
        super(props);
        this.state = {chatroom: []};
        
    }

    feedPage(){
        Actions.feedpage()
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

    enrollToChatroom = (chId) => {

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
        }}
        const a = {
            "text": "deneme...",
            "fileAddress": null
        }   
        
        const address = 'https://studyb.azurewebsites.net/api/enroll/' + chId + '/enrollChatroom/' + onlineUser;
        
        console.log(address);
        console.log(a);

        axios.post(address, a, config)
        .then(res =>{
            console.log(res);
              if(res.status == 204){
                onlineChatroom = chId;
                console.log(chId);
                console.log(onlineChatroom);
                Actions.feedpage();
              }
              else{
                alert("You have already enrolled ! ");
              }
            }
            
        ).catch(error => {
                console.log(error);
                alert("Could not enrolled ! ");
        });   
    
    }
            


        
    



    render(){
        const {handleSubmit} = this.props;  
        return(
       
        <ScrollView> 
     
            <View style={styles.container}>

                <Text style={styles.text}>Courses</Text>
                
                {   
                    this.state.chatroom.map((l,i) => (
                        <ListItem
                            
                            key={i}
                            title={l.chatroomName}
                            subtitle={l.id}
                            color='black' 
                            bottomDivider
                            onPress={() => {this.enrollToChatroom(l.id)}}
                            
                
                        />
                       
                        )   
                       
                    )  
                    
                    
                }

            </View>
        </ScrollView>
        
        );
    }
}


const styles = StyleSheet.create({
    body: {
        backgroundColor: 'black'
    },
    container : {
        padding: 30,
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 40,
        paddingBottom:0,
        alignContent: 'center',
        flex: 1,
        backgroundColor: 'black',
        justifyContent:'center',
        alignItems : 'stretch'
    },
    text: {
        textAlign : 'center',
        fontSize: 20,
        paddingTop:0,
        color:'white'
    },

})