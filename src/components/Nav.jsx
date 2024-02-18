import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

import like from "../images/like.svg";

const Nav = ({ liked }) => {
  return (
    <div className="flex-logo">
      <Link to="/">
        <img className="logo" alt="simpsons logo" src={logo} />
      </Link>
      <Link className="liked" to="/liked">
        <p>Liked: {liked}</p>
      </Link>
    </div>
  );
};

export default Nav;
