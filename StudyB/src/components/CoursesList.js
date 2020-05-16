import React, {Component} from 'react';
import {View, ScrollView,StyleSheet,StatusBar,Text} from 'react-native';
import {ListItem,CheckBox, ButtonGroup,Icon} from 'react-native-elements';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import {} from 'react-native-fontawesome';



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
                            
                            onPress={() => {this.routeToChatRoom(l.id)}}
                
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