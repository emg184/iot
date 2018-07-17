import React from 'react';
import { Link } from 'react-router-dom';

const BoardCard = (props) =>
  <div className="row" key={props.test_id} >
    <div className="col s12">
      <div className="card medium">
        <div className="card-image">
          <img className='responsive-image' src={props.image} />
          <span className="card-title">{props.test_name}</span>
        </div>
        <div className="card-content">
          <p>{props.test_description}</p>
        </div>
        <div className="card-action">
            <a href="#">This is a link</a>
        </div>
      </div>
    </div>
  </div>;

export default BoardCard;
