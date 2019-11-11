import React from 'react';

const DropDown = ({ name, placeholder, val, options, handleChange }) => (
  <select name={name} defaultValue={placeholder} value={val} onChange={handleChange}>
    <option key='placeholder' value={placeholder} disabled>
      {placeholder}
    </option>
    {options.map(item => (
      <option key={item} value={item}>{item}</option>
    ))}
  </select>
);

export default DropDown;