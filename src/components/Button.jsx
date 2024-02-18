import React from "react";

const Button = ({ text, className }) => {
  return (
    <button className={className}>
      <p>{text}</p>
    </button>
  );
};

export default Button;
