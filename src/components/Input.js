import React from "react";

const Input = ({ children, ...rest }) => {
  return <input className="input" {...rest} />;
};

export default Input;
