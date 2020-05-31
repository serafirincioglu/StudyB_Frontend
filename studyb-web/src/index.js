import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
//import App from './App';
import theme from './theme';
import SignIn from './SignIn';
import Album from './album/Album'
import Dashboard from './dashboard/Dashboard'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'//sayfalar arası geçiş navigasyon



const routing = (
  <Router>
    <div>
        <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
      </ThemeProvider>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/mainpage" component={Album} exact/>
        <Route exact path="/course" component={Dashboard} exact/>
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))
