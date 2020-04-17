import React, {Component} from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import SignInPage from './SignInPage';
import SignUpPage from './SignUpPage';
import MainPage from './MainPage'

export default class NavigationPage extends Component{
    render(){
        return(
            <Router>
                <Stack key="root" hideNavBar={true}>
                    <Scene key="mainpage" component={MainPage} title="MainPage"/>
                    <Scene key="signin" component={SignInPage} title="SignInPage"/>
                    <Scene key="signup" component={SignUpPage} title="SignUpPage"/>
                </Stack>
            </Router>
        )
    }
}


