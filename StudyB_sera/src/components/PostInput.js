import React, {useState} from 'react';
import { StyleSheet, View, TextInput, Button, Modal } from 'react-native';

const GoalInput = props => {
    const [enteredGoal,setEnteredGoal] = useState('');
    const GoalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };
const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('')
};
    return (
        <Modal visible= {props.visible} animationType="slide">
        <View style = {styles.inputContainer}>
            <TextInput
                placeholder="Your Post..."
                placeholderTextColor = '#56D6E0'
                style={styles.input}
                onChangeText={GoalInputHandler}
                value={enteredGoal}
            />
            <View style= {styles.buttonContainer} >
            
            <View style={styles.button}>
                <Button title= "CANCEL" color="#56D6E0" onPress={props.onCancel}/>
            </View>
            <View style={styles.button}>
            <Button title="ADD" color="#56D6E0" onPress={addGoalHandler} />  
            </View>
            </View>     
        </View>  
        </Modal>
    );
};


const styles = StyleSheet.create({
    inputContainer: { 
        flex:1,
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
        color: '#56D6E0'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%',
        backgroundColor: 'black'
    }, 
    button: {
        width: '40%'
    }
});
export default GoalInput;