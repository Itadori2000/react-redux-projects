import React from "react";

const Button = ({ startIcon, text, endIcon, btnStyle}) => {
  return <button className={`button ${btnStyle}`}>{startIcon} {text} {endIcon}</button>;
};

export default Button;
