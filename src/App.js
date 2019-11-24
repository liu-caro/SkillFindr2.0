import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import Event from './Pages/Event';
import CreateEvent from "./Pages/CreateEvent";
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import CreateProfile from './Pages/CreateProfile';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/login" component={Login} exact={true} /> 
            <Route path="/event" component={Event} exact={true} />
            <Route path="/create-event" component={CreateEvent} exact={true} />
            <Route path="/signup" component={SignUp} exact={true} />
            <Route path="/home" component={Home} exact={true} />
            <Route path="/create-profile" component={CreateProfile} exact={true} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;