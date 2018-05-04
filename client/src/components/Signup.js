import React, { Component } from 'react';
import axios from 'axios';

export default class Signup extends Component {

  constructor() {
    super();

    this.state = { email: '',
                   password: '',
                   passwordConfirm: ''
                  };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handlePasswordConfirmChange = this.handlePasswordConfirmChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value});
  };

  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  };

  handlePasswordConfirmChange(event) {
    this.setState({passwordConfirm: event.target.value});
  };

  handleSubmit(event) {
    if (this.state.password === this.state.passwordConfirm) {
      axios.post('/signup', { email: this.state.email, pass: this.state.password } )
        .then(function(res) {
          console.log(res);
        })
    }
    else {
      console.log("your password doesnt match");
    }
    event.preventDefault();
  };


  render() {
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
          <div className="row">
            <div className="input-field col s8">
            <h3>Password:</h3>
              <input id="passwordconfirm" type="password" className="validate" onChange={this.handlePasswordConfirmChange}/>
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
