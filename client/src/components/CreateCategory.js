import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class CreateCategory extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.match.params)
    this.state = {
      categoryName: '',
      imageUrl: '',
      description: '',
      parentId: this.props.match.params.categoryId,
      redirect: false
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleNameChange(event) {
    this.setState({ categoryName: event.target.value });
  }

  handleImageChange(event) {
    this.setState({ imageUrl: event.target.value });
  }

  handleDescriptionChange(event) {
    this.setState({ description: event.target.value });
  }


  handleSubmit(event) {
    axios.post('/categories', { name: this.state.categoryName,
image: this.state.imageUrl, parent: this.state.parentId, status: true, description: this.state.description,
}, {headers: {
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
        state: { parentId: this.state.parentId }
      }}/>
    }
    return (
      <div className="row">
        <form className="col s12" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field col s8">
              <h3>Category Name:</h3>
              <input id="category_name" type="text" className="validate" onChange={this.handleNameChange}/>
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
            <h3>Description</h3>
              <input id="password" type="text" className="validate" onChange={this.handleDescriptionChange}/>
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

export default CreateCategory;
