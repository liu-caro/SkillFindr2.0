import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import Event from './Pages/Event';
import CreateEvent from "./Pages/CreateEvent";
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import CreateProfile from './Pages/CreateProfile';
import ConfirmRegister from './Pages/ConfirmRegister';
import Ideas from './Pages/Ideas';
import Attendees from './Pages/Attendees';
import Profile from './Pages/Profile';
import RegisterEvent from './Pages/RegisterEvent';
import ProposeIdea from './Pages/ProposeIdea';
import IdeaDetails from './Pages/IdeaDetails';
import EditProfile from './Pages/EditProfile';
import CreateIdea from './Pages/CreateIdea';
import IndvAttendee from './Pages/IndvAttendee';


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
            <Route path="/register" component={RegisterEvent} exact={true} />
            <Route path="/signup" component={SignUp} exact={true} />
            <Route path="/home" component={Home} exact={true} />
            <Route path="/create-profile" component={CreateProfile} exact={true} />
            <Route path="/confirm-register" component={ConfirmRegister} exact={true} />
            <Route path="/ideas" component={Ideas} exact={true} />
            <Route path="/attendees" component={Attendees} exact={true} />
            <Route path="/profile" component={Profile} exact={true} />
            <Route path="/propose-idea" component={ProposeIdea} exact={true} />
            <Route path="/idea-details" component={IdeaDetails} exact={true} />
            <Route path="/edit-profile" component={EditProfile} exact={true} />
            <Route path="/create-idea" component={CreateIdea} exact={true} />
            <Route path="/indv-attendee" component={IndvAttendee} exact={true} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;