import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';

export default class Header extends Component {
/*
  constructor() {
    super();
    this.state = {
                   redirect: false
                 };

    this.deleteToken = this.deleteToken.bind(this);
  }
*/
  deleteToken() {
    localStorage.removeItem('myData')
    return <Redirect to='/' />
  }



  render() {
    return (
      <nav>
        <div className='nav-wrapper'>
          <a href="#!" className="brand-logo center">IoT</a>
          <ul className="left hide-on-med-and-down">
            <li>Features</li>
            <li>Pricing</li>
            <li>How To</li>
            <li>About</li>
          </ul>
            <ul className="right hide-on-med-and-down">
            { localStorage.getItem('myData') ?
              <div>
                <li><a className="waves-effect waves-light btn" onClick={this.deleteToken}>Sign Out</a></li>
              </div>
              :
              <div>
                <li>
                  <Link to={'/login'}>
                    <a className="waves-effect waves-light btn">Login</a>
                  </Link>
                </li>
                <li>
                  <Link to={'/signup'}>
                    <a className="waves-effect waves-light btn">Sign Up</a>
                  </Link>
                </li>
              </div>
            }
            </ul>
        </div>
      </nav>
    );
  };
};
