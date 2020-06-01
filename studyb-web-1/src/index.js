import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
//import App from './App';
import theme from './theme';
import Login from './Login';
import MainPage from './mainpage/MainPage'
import CoursePage from './cousepage/CoursePage'
import ProfilePage from './profilepage/ProfilePage'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'



const routing = (
  <Router>
    <div>
        <ThemeProvider theme={theme}>
        <CssBaseline />
      </ThemeProvider>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/mainpage" component={MainPage} exact/>
        <Route exact path="/course" component={CoursePage} exact/>
        <Route exact path="/profile" component={ProfilePage} exact/>
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))