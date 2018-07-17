import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Header from '../components/Header';
import Login from '../components/Login';
import Signup from '../components/Signup';
import UserHome from './UserHome';
import CreateCategory  from '../components/CreateCategory';
import CreateRootCategory  from '../components/CreateRootCategory';
import CreateBoard  from '../components/CreateBoard';
import CreateRootBoard  from '../components/CreateRootBoard';
import BoardInfo from '../components/BoardInfo';
import CreateTest from '../components/CreateTest';
import Test from '../components/Test';

import Home from './Home';
import Organizations from './Organizations';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header />
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/organizations" component={Organizations} />
            <Switch>
              <Route
                exact path={`/user`}
                render = {(props) => <UserHome {...props} /> }
              />
              <Route exact path={`/category/:categoryId`} component={CreateCategory} />
              <Route exact path={`/category/root/create`} component={CreateRootCategory} />
              <Route exact path={`/category/:categoryId/board`} component={CreateBoard} />
              <Route exact path={`/category/root/board/create`} component={CreateRootBoard} />
              <Route exact path={`/board/:boardId`} component={BoardInfo} />
              <Route exact path={`/board/:boardId/test`} component={CreateTest} />
              <Route exact path={`/user/:userId/board/:boardId/test/:testId`} component={Test} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
