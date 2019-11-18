import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import Event from './Pages/Event';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path="/event" component={Event} exact={true} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;