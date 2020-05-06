import React from 'react';
import { StyleSheet,Text, View, ScrollView, TouchableOpacity } from 'react-native';


import NavigationBar from './components-Profile/NavigationBar';
import DefaultProfile from './components-Profile/defaultProfile';
import Reward from './images-Profile/Reward';
import Book from './images-Profile/Book';
import Profile from './images-Profile/Profile';

export default function App() {

  var SampleNameArray = [ "Course 1", "Course 2", "Course 3", "Course 4", "Course 5", "Course 6" ];

  return (
    <View style={styles.screen}>  

      <NavigationBar />

    <View style={styles.blueLine}>
      
      <View style={styles.iconText}>
      <Profile />
      <Text style={styles.profText}>My Profile</Text>
      </View>

      </View>
    
    <View style={styles.namePP}>

      <DefaultProfile />

    <View style={styles.nameDep}>
      <Text style={styles.NameStyle}>Name Surname</Text>
      <Text style={styles.NameStyle}>Department</Text>
      <TouchableOpacity style={styles.rewardsButton}> 
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
    <ScrollView>

    { SampleNameArray.map((item, key)=>(
        <TouchableOpacity style={styles.button} >
         <Text key={key} style={styles.buttonText} > { item } </Text>
         </TouchableOpacity>
         )
         )}

      </ScrollView>
      
     
    </View>
  );
};

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
    fontSize:18,
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
  }
  
});
