import React, { useState }  from 'react';
import { StyleSheet,Text, View, TextInput, Button, ScrollView, FlatList, TouchableOpacity } from 'react-native';

import PostItem from './components-Post/PostItem';
import PostInput from './components-Post/PostInput';
import NavigationBar from './components-Post/NavigationBar';
import Book from './components-Post/Book';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals, 
      {id: Math.random().toString(), value: goalTitle}
    ]); 
    setIsAddMode(false);
  };

  const removeGoalHandler = goalId =>{
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal)=> goal.id !== goalId);
    });
  };

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
}

  return (
    <View style={styles.screen}>    
      <NavigationBar />

      <View style={styles.blueLine}>
    <View style={styles.iconText}>
      <Book />
      <Text style={styles.profText}>Course 1</Text>
      </View>
    </View>

      <TouchableOpacity style={styles.button} onPress= {()=> setIsAddMode(true)}>
        <Text style={styles.buttonText}>Post Something!</Text>
      </TouchableOpacity>
       
      <PostInput visible={isAddMode} onAddGoal = {addGoalHandler} onCancel={cancelGoalAdditionHandler}/>
      <FlatList 
        keyExtractor={(item, index)=> item.id}
        data ={courseGoals} 
        renderItem={itemData => 
        <PostItem 
        id={itemData.item.id} 
        onDelete={removeGoalHandler} 
        title={itemData.item.value } />
           }
      />
    </View>
  );
};

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
  
});
