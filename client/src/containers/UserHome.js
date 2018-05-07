import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import CategoryCard from '../components/CategoryCard'

class UserHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: this.props.match.params.userId,
      parentId: null,
      categories: false
    };

    this.updateCategoryCards = this.updateCategoryCards.bind(this);
  };

  componentDidMount() {
    axios.get(`/categories/${this.state.userId}`, {headers: {
      "authorization" : localStorage.getItem('myData')
        }
      }
    )
    .then( res => {
      this.setState({ categories: res.data });
    })
  }

  updateCategoryCards(event, parent) {
    this.setState({ parentId: parent })
    axios.get(`/categories/${this.state.userId}/${parent}`, {headers: {
      "authorization" : localStorage.getItem('myData')
        }
      }
    )
    .then( res => {
      this.setState({ categories: res.data });
    })
    event.preventDefault()
  }

  render() {
    return (
      <div>
        <h1>Helloworld</h1>
        <h3>{ this.state.userId }</h3>
        <Link to='/category/1'>
          <button type="button">Create Category</button>
        </Link>
        { this.state.categories ? this.state.categories.map( category => CategoryCard(category, this.updateCategoryCards)   ) : <h1>No Categories</h1> }
      </div>
    );
  };

};


export default UserHome;
