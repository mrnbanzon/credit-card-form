import React from 'react';
import DropDown from '../DropDown';

const ExpirationDateInput = ({ selectMonth, selectYear, handleChange }) => {
  const months = [
    '01', '02', '03',
    '04', '05', '06',
    '07', '08', '09',
    '10', '11', '12'
  ];

  let years = [];
  const today = new Date();
  const currYear = today.getFullYear();

  for (var i = 0; i < 12; i += 1) {
    years.push(currYear + i);
  }

  return (
    <fieldset className="card-info-fieldset expiration-date-input">
      <legend>Expiration Date</legend>
      <DropDown
        name="month"
        placeholder="Month"
        val={selectMonth}
        options={months}
        handleChange={handleChange}
      />
      <DropDown
        name="year"
        placeholder="Year"
        val={selectYear}
        options={years}
        handleChange={handleChange}
      />
    </fieldset>
  )
};

export default ExpirationDateInput;
