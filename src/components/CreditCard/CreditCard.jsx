import React from 'react';

import CardFront from './CardFront';
import CardBack from './CardBack';

const CreditCard = ({ month, year, cardNumber, cardHolder, cvv, showCardBack }) => {

  const cardFrontData = { cardNumber, cardHolder, month, year };
  const cardFlipperClass = 'card-flipper container ' +
    `${showCardBack ? 'perform-flip' : ''}`;

  return (
    <div className="credit-card-container">
      <div className={cardFlipperClass}>
        <CardFront {...cardFrontData} />
        <CardBack cvv={cvv} />
      </div>
    </div>
  );
};

export default CreditCard;