import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import CreateRootCategory from '../components/CreateRootCategory'

class UserHome extends Component {
  constructor(props) {
    super(props);
    //console.log(props)
    this.state = {
      userId: 'awaiting user id'
    };
  };

  componentDidMount() {
    const { match: { params } } = this.props;
    console.log(params.userId)
    axios.get('/user', {headers: {
      "authorization" : localStorage.getItem('myData')
        }
      }
    )
    .then( res => {
      this.setState({ userId: res.data[0].id })
    })
  }

  render() {
    return (
      <div>
        <h1>Helloworld</h1>
        <h3>{ this.state.userId}</h3>
        <Link to='/category/1'>
          <button type="button">Create Category</button>
        </Link>
      </div>
    );
  };

};


export default UserHome;
