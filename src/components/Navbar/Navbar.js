import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import './navbar.css'

const Navbar = (props) => {
  return (
    <ul className="navbar-items">
      <li>
        <NavLink to="/TopNewsPage" className="navbar-item">
          Top News
        </NavLink>
      </li>
      <li>
        <NavLink to="/CategoriesPage" className="navbar-item">
          Categories
        </NavLink>
      </li>
      <li>
        <NavLink to="/SearchPage" className="navbar-item">
          Search
        </NavLink>
      </li>
    </ul>
  );
};

Navbar.propTypes = {};

export default Navbar;
