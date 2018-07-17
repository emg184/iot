import React from 'react';
import { Link } from 'react-router-dom';

const BoardCard = (props, user) =>
  <div className="row">

      { props.map( board => {
          return(
            <div className="col s12 m4 l3">
            <div className="card" key={board.board_id}>
              <div className="card-image">
                <img className='responsive-image' src={board.image} />
                <span className="card-title">{board.board_name}</span>
              </div>
              <div className="card-content">
                <p>{board.description}</p>
              </div>
              <div className="card-action">
                <Link to={'/board/' + board.board_id.toString()}>
                  <a href="#">This is a link</a>
                </Link>
              </div>
              </div>
            </div>)
        })}

  </div>;


export default BoardCard;
