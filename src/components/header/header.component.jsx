import React from "react";
import "./header.styles.scss";

import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => (
  <div className="header">
    <div className="container">
      <div className="logo">
        <NavLink className="option" to="/">
          avi pate
        </NavLink>
      </div>

      <div className="links">
        <NavLink exact className="option" to="/" activeClassName="selected">
          home
        </NavLink>

        <HashLink className="option" to="/#work" smooth={true} duration={800}>
          work
        </HashLink>

        <NavLink
          exact
          className="option"
          to="/about"
          activeClassName="selected"
        >
          about
        </NavLink>
      </div>
    </div>
  </div>
);

export default Header;
