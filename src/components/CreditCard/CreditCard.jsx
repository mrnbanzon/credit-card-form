import React from 'react';

const CreditCard = ({
  month,
  year,
  cardNumber,
  cardHolder,
  cvv,
  showCardBack
}) => {
  const cardFlipperClass = 'card-flipper container ' +
    `${showCardBack ? 'perform-flip' : ''}`;

  return (
    <div className="credit-card-container">
      <div className={cardFlipperClass}>
        <div className="card-front">
          <div className="card-logos">Card Logos</div>
          <div className="card-number">{cardNumber}</div>
          <div className="card-holder">{cardHolder}</div>
          <div className="card-expiration">{month + '/' + year}</div>
        </div>
        <div className="card-back">
          <div clasName="card-strip">Card Strip</div>
          <div className="card-cvv">{cvv}</div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;