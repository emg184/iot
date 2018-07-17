import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class CreateTest extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.match.params)
    this.state = {
      testName: '',
      imageUrl: '',
      description: '',
      userId: this.props.match.params.userId,
      categoryId: this.props.match.params.categoryId,
      boardId: this.props.match.params.boardId,
      redirect: false
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleNameChange(event) {
    this.setState({ testName: event.target.value });
  }

  handleImageChange(event) {
    this.setState({ imageUrl: event.target.value });
  }

  handleDescriptionChange(event) {
    this.setState({ description: event.target.value });
  }

  handleSubmit(event) {
    axios.post('/tests', { board_id: this.state.boardId,
imageUrl: this.state.imageUrl, test_name: this.state.testName, active: true, description: this.state.description}, {headers: {
  "authorization" : localStorage.getItem('myData')
    }
  })
      .then((res) => console.log(res))
    event.preventDefault();
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={{
        pathname: '/user',
        state: { parentId: this.state.parentId }
      }}/>
    }
    return (
      <div className="row">
        <form className="col s12" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field col s8">
              <h3>Test Name:</h3>
              <input id="board_name" type="text" className="validate" onChange={this.handleNameChange}/>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s8">
            <h3>Image URL:</h3>
              <input id="image_url" type="text" className="validate" onChange={this.handleImageChange}/>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s8">
            <h3>Description:</h3>
              <input id="description" type="text" className="validate" onChange={this.handleDescriptionChange}/>
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

export default CreateTest;
