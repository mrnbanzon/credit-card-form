import React from 'react';

const DropDown = ({ name, placeholder, placeholderVal, val, options, handleChange }) => (
  <select name={name} defaultValue={placeholder} value={val} onChange={handleChange}>
    {placeholder ?
      <option key='placeholder' value={placeholder} disabled>
        {placeholderVal}
      </option> :
      ''}
    {options.map(item => (
      <option key={item} value={item}>{item}</option>
    ))}
  </select>
);

export default DropDown;