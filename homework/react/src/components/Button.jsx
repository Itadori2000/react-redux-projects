import React from "react";

const Button = ({ startIcon, text, endIcon, variant}) => {
  return <button className={`button ${variant}`}>{startIcon} {text} {endIcon}</button>;
};

export default Button;
