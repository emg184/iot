import React, { Component } from 'react';
import axios from 'axios';

class CreateRootCategory extends Component {
  constructor(props) {
    super(props);
    console.log(this.props)
    this.state = {
      categoryName: '',
      imageUrl: '',
      description: '',
      userId: 2
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
image: this.state.imageUrl, parent: null, status: true, description: this.state.description,
id: this.state.userId}, {headers: {
  "authorization" : localStorage.getItem('myData')
    }
  })
      .then((res) => console.log(res))
    event.preventDefault();
  }

  render() {
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
            <h3>Image URL</h3>
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

export default CreateRootCategory;
