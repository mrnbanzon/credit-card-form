import React from 'react';

import CreditCard from '../CreditCard/CreditCard';
import FieldSetInput from '../FieldSetInput';
import ExpirationDateInput from './ExpirationDateInput';

class CreditCardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      month: undefined,
      year: undefined,
      cardNumber: undefined,
      cardHolder: undefined,
      cvv: undefined,
      showCardBack: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleCardFaceDisplay = this.handleCardFaceDisplay.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleCardFaceDisplay(e) {
    let showCardBack = e.type === 'blur' ? false : true;
    this.setState({ showCardBack });
  }

  render() {
    let { month, year, cardNumber, cardHolder, cvv } = this.state;

    return (
      <form className="credit-card-form container">
        <CreditCard {...this.state} />
        <FieldSetInput
          className="card-info-fieldset"
          label="Card Number"
          val={cardNumber}
          name="cardNumber"
          handleChange={this.handleChange}
        />
        <FieldSetInput
          className="card-info-fieldset"
          label="Card Holder"
          val={cardHolder}
          name="cardHolder"
          handleChange={this.handleChange}
        />
        <div className="card-info-exp-and-cvv">
          <ExpirationDateInput
            selectMonth={month}
            selectYear={year}
            handleChange={this.handleChange}
          />
          <FieldSetInput
            className="card-info-fieldset cvv"
            label="CVV"
            val={cvv}
            name="cvv"
            handleChange={this.handleChange}
            handleFocus={this.handleCardFaceDisplay}
            handleBlur={this.handleCardFaceDisplay}
          />
        </div>
        <button className="credit-card-form-submit">Submit</button>
      </form>
    );
  }
}

export default CreditCardForm;
