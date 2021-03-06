import React, {Component} from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import SignInPage from './SignInPage';
import SignUpPage from './SignUpPage';
import MainPage from './MainPage'
import CoursePage from './CoursePage';
import FeedPage from './FeedPage';
import ProfilePage from './ProfilePage';
import RewardPage from './RewardPage';
import PostPage from './PostPage';
import CoursesList from './CoursesList';


export default class NavigationPage extends Component{
    render(){
        return(
            <Router>
                <Stack key="mainpage" hideNavBar={true}>
                    <Scene key="mainpage" component={MainPage} title="MainPage"/>
                    <Scene key="signin" component={SignInPage} title="SignInPage"/>
                    <Scene key="signup" component={SignUpPage} title="SignUpPage"/>
                    <Scene key="coursepage" component={CoursePage} title="CoursePage"/>
                    <Scene key="feedpage" component={FeedPage} title="FeedPage"/>
                    <Scene key="profilepage" component={ProfilePage} title="ProfilePage"/>
                    <Scene key="rewardpage" component={RewardPage} title="RewardPage"/>
                    <Scene key="postpage" component={PostPage} title="PostPage"/>
                    <Scene key="courseslist" component={CoursesList} title="CoursesList"/>
                </Stack>
            </Router>
        )
    }
}


