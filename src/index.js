import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import CreditCardForm from './components/CreditCardForm/CreditCardForm';

const App = () => (
  <React.Fragment>
    <CreditCardForm />
  </React.Fragment>
);

ReactDOM.render(<App />, document.getElementById('app'));
