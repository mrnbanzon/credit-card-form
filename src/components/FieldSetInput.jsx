import React from 'react';

const FieldSetInput = ({ label, val, name, handleChange, handleFocus, handleBlur, className }) => (
  <fieldset className={className}>
    <legend>{label}</legend>
    <input
      value={val}
      name={name}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  </fieldset>
);

export default FieldSetInput;
