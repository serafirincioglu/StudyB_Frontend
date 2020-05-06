import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const GoalItem = props => {
    return (
        <View>
        <Text style={styles.nameText} >Name Surname</Text>
        <View style={styles.post}>
            <View style= {styles.listItem}>
                <Text>{props.title}</Text> 
            </View>
        <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress= {props.onDelete.bind(this, props.id)}>
            <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
        </View>
        <Text style={styles.dateText}>Date, Time</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ffffff',
        borderColor: '#56D6E0',
        borderWidth: 2,
        width: '70%', 
        borderRadius: 10,       
      },
      button:{
        backgroundColor:'#56D6E0',
        width: '25%',
        height: 45,
        borderRadius: 25,
        paddingVertical: 16,
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center'
        
      },
      buttonText: {
        fontSize:14,
        fontWeight: 'bold',
        color:'#ffffff',
        textAlign: 'center',
        alignItems: 'center'
  
      },
      nameText: {
        fontSize:15,
        fontWeight: 'bold',
        color:'#ffffff',
        textAlign: 'left',
        alignItems: 'center'
  
      },
      dateText: {
        fontSize:12,
        fontWeight: 'bold',
        color:'#ffffff',
        marginLeft: '50%',
        alignItems: 'center'
  
      },
      post: {
        flexDirection:'row',
        justifyContent: 'space-between',
        backgroundColor: 'black',
        alignItems: 'center'  
          
      }

});
export default GoalItem;