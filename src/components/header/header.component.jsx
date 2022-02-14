import React from "react";
import "./header.styles.scss";

import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => (
  <div className="header" id="nav">
    <div className="container">
      <div className="logo">
        <NavLink className="option" to="/">
          avi patel
        </NavLink>
      </div>

      <div className="links">
        <NavLink exact className="option" to="/" activeClassName="selected">
          work
        </NavLink>

        <NavLink
          exact
          className="option"
          to="/about"
          activeClassName="selected"
        >
          about
        </NavLink>

        <NavLink
          exact
          className="option"
          to="/games"
          activeClassName="selected"
        >
          games
        </NavLink>
      </div>
    </div>
  </div>
);

export default Header;
