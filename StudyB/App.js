
import React, {Component} from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';

import {Provider} from 'react-redux';
import NavigationPage from './src/components/NavigationPage';
import {PersistGate} from 'redux-persist/es/integration/react';
import persist from './src/config/store';

const persistStore = persist();

export default class App extends Component{

  render(){ 
    return(
        <Provider store={persistStore.store}>
          <PersistGate loading={null} persistor={persistStore.persistor}>
            <NavigationPage/>
          </PersistGate>
        </Provider>
    );  
  }
}

