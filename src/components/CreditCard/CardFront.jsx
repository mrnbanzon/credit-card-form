import React from 'react';

const CardFront = ({ cardNumber, cardHolder, month, year }) => (
  <div className="card-front">
    <div className="card-logos">Card Logos</div>
    <div className="card-number">{cardNumber}</div>
    <div className="card-holder">{cardHolder}</div>
    <div className="card-expiration">{month + '/' + year}</div>
  </div>
);

export default CardFront;