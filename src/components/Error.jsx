import React from "react";
import flanders from "../images/flanders.png";

const Error = ({ className }) => {
  return (
    <div className={className}>
      <img className="error-img" src={flanders} alt="ned flanders screaming" />
      <div>
        <h2>Oh-diddly-no!</h2>
        <p>No characters found, try widening your search</p>
      </div>
    </div>
  );
};

export default Error;
