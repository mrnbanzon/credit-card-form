import React from 'react';

const CardBack = ({ cvv }) => (
  <div className="card-back">
    <div className="card-strip"></div>
    <fieldset>
      <legend>CVV</legend>
      <p className="card-cvv">{cvv}</p>
    </fieldset>
  </div>
);

export default CardBack;