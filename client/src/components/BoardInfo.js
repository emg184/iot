import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import TestCard from './TestCard';

class BoardInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parentId: this.props.categoryId,
      boardId: this.props.match.params.boardId,
      boardInfo: '',
      tests: ''
    };
  };

  componentDidMount() {
    axios.get(`/boards/${this.state.boardId}/tests`, {headers: {
      "authorization" : localStorage.getItem('myData')
        }
      }
    )
    .then( res => {
      console.log(res);
      this.setState({ tests: res.data })
    })
  }

  render() {
    return (
      <div>
        <h1>Helloworld</h1>
        <Link to={'/board/' + this.state.boardId.toString() + '/test'} >
          <button type="button">Create Test</button>
        </Link>
        { this.state.tests ? this.state.tests.map( test => TestCard(test)   ) : <h1>No Tests</h1> }
      </div>
    )
  }
  /*
  <div className="row" key={props.category_id} >
    <div className="col s12">
      <div className="card medium">
        <div className="card-image">
          <img className='responsive-image' src={props.image} />
          <span className="card-title">{props.category_name}</span>
        </div>
        <div className="card-content">
          <p>{props.description}</p>
        </div>
        <div className="card-action">
          <a href="#" onClick={(e) => categoryUpdate(e, props.category_id)}>This is a link</a>
        </div>
      </div>
    </div>
  </div>;
*/
}
export default BoardInfo;
/*
class UserHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: this.props.match.params.userId,
      parentId: 1,
      categories: false,
      createCategory: false,
      boards: ''
    };

    this.updateCategoryCards = this.updateCategoryCards.bind(this);
  };

  componentDidMount() {
    axios.get(`/category/${this.state.parentId}/all`, {headers: {
      "authorization" : localStorage.getItem('myData')
        }
      }
    )
    .then( res => {
      console.log(res)
      this.setState({
        categories: res.data[1],
        boards: res.data[0]
      });
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

  toggleCreateCategory() {

  }

  render() {
    return (
      <div>
        <h1>Helloworld</h1>
        <h3>{ this.state.userId }</h3>
        <Link to={'/category/' + this.state.parentId.toString()} >
          <button type="button">Create Category</button>
        </Link>
        <Link to={'/user/' + this.state.userId.toString() + '/category/' + this.state.parentId.toString() + '/board'}>
          <button type="button">Create Board</button>
        </Link>
        <h2>Categories:</h2>
        { this.state.categories ? this.state.categories.map( category => CategoryCard(category, this.updateCategoryCards)   ) : <h1>No Categories</h1> }
        <h2>Boards:</h2>
        { this.state.boards ? this.state.boards.map( board => BoardCard(board, this.state.userId) ) : <h1>No Boards</h1> }
      </div>
    );
  };

};
*/
