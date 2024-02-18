import React from "react";
import doh from "../images/doh.png";
import Button from "./Button";
import { Link } from "react-router-dom";

const NoLikes = ({ className }) => {
  return (
    <div className={className}>
      <img className="error-img" src={doh} alt="tbc" />
      <div>
        <h2>No likes yet</h2>
        <p>Go find some quotes!</p>
        <Link to="/">
          <Button className="btn" text="view quotes" />
        </Link>
      </div>
    </div>
  );
};

export default NoLikes;
