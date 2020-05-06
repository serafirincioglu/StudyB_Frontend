import React, { useState } from 'react';
import { StyleSheet,Text, View, ScrollView, TouchableOpacity, Alert } from 'react-native';


import NavigationBar from './images-Rewards/NavigationBar';

import Reward from './images-Rewards/Reward';


export default function App() {

  var SampleNameArray = [ "Reward 1", "Reward 2", "Reward 3", "Reward 4", "Reward 5", "Reward 6" ];

  const rewardButtonAlert = () =>
    Alert.alert(
      "Congratulations!",
      "You're the best!",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );

  return (
    <View style={styles.screen}>  

      <NavigationBar />

    <View style={styles.blueLine}>
      
      <View style={styles.iconText}>
      <Reward />
      <Text style={styles.profText} >Rewards</Text>
      <Reward />
      </View>

      </View>
    

    <ScrollView>

    { SampleNameArray.map((item, key)=>(
        <TouchableOpacity style={styles.button} onPress={rewardButtonAlert} >
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
    marginLeft: 10,
    marginRight: 10

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