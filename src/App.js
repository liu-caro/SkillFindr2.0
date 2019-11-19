import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import Event from './Pages/Event';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path="/login" component={Login} exact={true} /> 
            <Route path="/event" component={Event} exact={true} />
            <Route path="/sign-up" component={SignUp} exact={true} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;