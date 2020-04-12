import React, {Component} from 'react';
import {View, ScrollView,StyleSheet,StatusBar,Text} from 'react-native';
import {ListItem, ButtonGroup,Icon} from 'react-native-elements';
//import {Icon} from 'react-native-vector-icons/Ionicons';

export default class CoursePage extends Component{

    render(){

        const list = [
            {
                name: 'CS101',
                subtitle: 'Intro'
            },
            {
                name: 'CS102',
                subtitle: 'Intro'
            },
            {
                name: 'CS201',
                subtitle: 'Intro'
            },
            {
                name: 'CS202',
                subtitle: 'Intro',
                
            },
            {
                name: 'CS223',
                subtitle: 'Intro'
            },
        ]
        
        return(
        
        <ScrollView> 
      
            <View style={styles.container}>
                <Text style={styles.text}>Courses</Text>
            {
                list.map((l,i) => (
                    <ListItem
                        key={i}
                        title={l.name}
                        subtitle={l.subtitle}
                        color='black' 
                        bottomDivider
                        
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