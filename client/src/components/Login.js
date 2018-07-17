import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export default class Login extends Component {

  constructor() {
    super();

    this.state = { email: '',
                   password: '',
                   redirect: false,
                   userId: ''
                 };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value});
  };

  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  };

  handleSubmit(event) {
    axios.post('/login', { email: this.state.email, password: this.state.password })
      .then((res) => {
        localStorage.setItem('myData', res.data.token)
        this.setState({ userId: res.data.userId})
      })
        .then((resp) => { if (localStorage.getItem('myData')) { this.setState({ redirect: true})} })
    event.preventDefault();
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={{
        pathname: '/user',
        state: { parentId: 'root' }
      }}/>
    }

    return (
      <div className="row">
        <form className="col s12" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field col s8">
              <h3>Email:</h3>
              <input id="email" type="text" className="validate" onChange={this.handleEmailChange}/>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s8">
            <h3>Password:</h3>
              <input id="password" type="password" className="validate" onChange={this.handlePasswordChange}/>
            </div>
          </div>
          <button className="btn waves-effect waves-light" type="submit" name="action">Submit
            <i className="material-icons right">send</i>
          </button>
        </form>
      </div>
    );
  };
};
