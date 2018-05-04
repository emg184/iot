import React from 'react';

const Card = () =>
  <div className="row">
    <div className="col s12">
      <div className="card medium">
        <div className="card-image">
          <img className='responsive-image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSwcq4JeqF3CCZDdagRJ46QNojGanYTMcMwhH7SApoXHkTO2qVJg" />
          <span className="card-title">Card Title</span>
        </div>
        <div className="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div className="card-action">
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
  </div>;

export default Card;
