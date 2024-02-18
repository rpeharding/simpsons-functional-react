import React from "react";
import Nav from "./Nav";
import homer from "../images/homer.png";

const Header = ({ onInput, liked }) => {
  return (
    <header className="header">
      <Nav liked={liked} />
      <div className="header-content">
        <div className="header-copy">
          <h1>Quotes from your favourite characters</h1>
          <input
            onInput={onInput}
            type="text"
            name="search"
            id="search"
            placeholder="find a character"
            className="input"
          />
          {/* <p>{this.props.errors.search}validation error</p> */}
        </div>
      </div>
      <img className="hero-image" alt="homer with donut" src={homer} />
    </header>
  );
};

export default Header;
