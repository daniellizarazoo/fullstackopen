import React from "react";

const Input = ({ type = "text", placeholder, value, onChange }) => (
  <input
    type={type} // Use the provided type or default to "text"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
);

export default Input;