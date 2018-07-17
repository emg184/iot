import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

import CategoryCard from '../components/CategoryCard'
import BoardCard from '../components/BoardCard'

class UserHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: this.props.match.params.userId,
      parentId: '',
      categories: false,
      createCategory: false,
      boards: []
    };
    this.updateCategoryCards = this.updateCategoryCards.bind(this);
  };

  componentDidMount() {
    console.log(this.props)
    if (this.props.location.state === undefined) {
      //this.setState({ parentId: 'root' })
      var parent = 'root';
    }
    else {
      //this.setState({ parentId: this.props.location.state.parentId })
      var parent = this.props.location.state.parentId;
    }
    axios.get(`/category/${parent}/all`, {headers: {
      "authorization" : localStorage.getItem('myData')
        }
      }
    )
    .then( res => {
      this.setState({
        categories: res.data[1],
        boards: res.data[0],
        parentId: parent
      });
    })
  }

  updateCategoryCards(event, parent) {
    this.setState({ parentId: parent })
    axios.get(`/category/${parent}/all`, {headers: {
      "authorization" : localStorage.getItem('myData')
        }
      }
    )
    .then( res => {
      this.setState({
        categories: res.data[1],
        boards: res.data[0]
       });
    })
    event.preventDefault()
  }

  render() {
    if (!localStorage.getItem('myData')) {
      return <Redirect to={"/"} />
    }
    console.log(this.state.parentId)
    return (
      <div>
        <h1>Helloworld</h1>
        <h3>{ this.state.userId }</h3>
        { this.state.parentId === 'root' ?
          <Link to={'/category/root/create'}>
            <a className="waves-effect waves-light btn">Create Category</a>
          </Link>
        :
          <Link to={'/category/' + this.state.parentId.toString() }>
            <a className="waves-effect waves-light btn">Create Category</a>
          </Link>
        }
        { this.state.parentId === 'root' ?
          //<Link to={'/category/root/board/create'}>
            //<a className="waves-effect waves-light btn">Create Board</a>
          //</Link>
          <div></div>
          :
          <Link to={'/category/' + this.state.parentId.toString() + '/board'}>
            <a className="waves-effect waves-light btn">Create Board</a>
          </Link>
        }
        <h2>Categories:</h2>
        { this.state.categories ? this.state.categories.map( category => CategoryCard(category, this.updateCategoryCards)   ) : <h1>No Categories</h1> }
        <h2>Boards:</h2>
        { this.state.boards.length > 0 ? BoardCard(this.state.boards, this.state.userId)  : <h1>No Boards</h1> }
      </div>
    );
  };

};
//{ this.state.boards ? this.state.boards.map( board => BoardCard(board, this.state.userId) ) : <h1>No Boards</h1> }

export default UserHome;
