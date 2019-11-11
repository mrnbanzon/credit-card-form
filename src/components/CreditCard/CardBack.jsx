import React from 'react';

const CardBack = ({ cvv }) => (
  <div className="card-back">
    <div clasName="card-strip">Card Strip</div>
    <div className="card-cvv">{cvv}</div>
  </div>
);

export default CardBack;