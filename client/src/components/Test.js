import React from 'react';

const Test = (props, categoryUpdate) =>
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

export default Test;
