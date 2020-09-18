import React from "react";
import { NavLink } from "react-router-dom";

import "./navbar.css";

const Navbar = () => {
  return (
    <ul className="navbar-items">
      <li>
        <NavLink
          to="/TopNewsPage"
          className="navbar-item"
          activeClassName="navbar-item--checked"
        >
          Top News
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/CategoriesPage"
          className="navbar-item"
          activeClassName="navbar-item--checked"
        >
          Categories
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/SearchPage"
          className="navbar-item"
          activeClassName="navbar-item--checked"
        >
          Search
        </NavLink>
      </li>
    </ul>
  );
};

Navbar.propTypes = {};

export default Navbar;
