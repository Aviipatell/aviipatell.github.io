import React from "react";
import "./header.styles.scss";

import { NavLink } from "react-router-dom";

const Header = () => (
  <div className="header">
    <div className="container">
      <div className="logo">
        <NavLink className="option" to="/">
          avi patel
        </NavLink>
      </div>

      <div className="links">
        <NavLink exact className="option" to="/" activeClassName="selected">
          home
        </NavLink>

        <NavLink className="option" to="/">
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
      </div>
    </div>
  </div>
);

export default Header;
