import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class CreateBoard extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.match.params)
    this.state = {
      boardName: '',
      imageUrl: '',
      description: '',
      secretKey: '',
      userId: this.props.match.params.userId,
      categoryId: this.props.match.params.categoryId,
      redirect: false
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSecretChange = this.handleSecretChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleNameChange(event) {
    this.setState({ boardName: event.target.value });
  }

  handleImageChange(event) {
    this.setState({ imageUrl: event.target.value });
  }

  handleDescriptionChange(event) {
    this.setState({ description: event.target.value });
  }

  handleSecretChange(event) {
    this.setState({ secretKey: event.target.value });
  }


  handleSubmit(event) {
    axios.post('/boards', { board_name: this.state.boardName,
imageUrl: this.state.imageUrl, category_id: this.state.categoryId, active: true, description: this.state.description,
user_id: this.state.userId, secretKey: this.state.secretKey}, {headers: {
  "authorization" : localStorage.getItem('myData')
    }
  })
      .then((res) => {
          if (res.status === 200) {
            this.setState({ redirect: true })
          }
      })
    event.preventDefault();
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={{
        pathname: '/user',
        state: { parentId: this.state.categoryId }
      }}/>
    }

    return (
      <div className="row">
        <form className="col s12" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field col s8">
              <h3>Board Name:</h3>
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
          <div className="row">
            <div className="input-field col s8">
            <h3>Secret Key:</h3>
              <input id="secretKey" type="text" className="validate" onChange={this.handleSecretChange}/>
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

export default CreateBoard;
