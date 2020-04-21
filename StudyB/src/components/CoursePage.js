import React, {Component} from 'react';
import {View, ScrollView,StyleSheet,StatusBar,Text} from 'react-native';
import {ListItem, ButtonGroup,Icon} from 'react-native-elements';
//import {Icon} from 'react-native-vector-icons/Ionicons';
import axios from 'axios';


export default class CoursePage extends Component{
    
    constructor(props) {
        super(props);
        this.state = {chatroom: []};
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

    enrollToChatroom(){
        
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }}
        
        axios.post('https://studyb.azurewebsites.net/api/enroll/' + {chatroomId} + '/enrollChatroom/' + {userId} , values, config)
        .then()
    }


    render(){
        
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
                        onPress={this.enrollToChatroom}
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