import React, { Component } from 'react';

export default class Header extends Component {
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
        </div>
      </nav>
    );
  };
};
