import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Header from '../components/Header';
import Login from '../components/Login';
import Signup from '../components/Signup';
import UserHome from './UserHome';
import CreateCategory  from '../components/CreateCategory';

import Home from './Home';
import Organizations from './Organizations';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>

          <div>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/organizations" component={Organizations} />
            <Switch>
              <Route exact path={`/user/:userId`} component={UserHome} />
              <Route path={`/user/:userId/category/:categoryId`} component={CreateCategory} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
