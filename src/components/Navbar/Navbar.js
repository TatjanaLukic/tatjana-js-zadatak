import React from "react";
import {NavLink} from 'react-router-dom';
import PropTypes from "prop-types";

const Navbar = (props) => {
  return (
    <ul>
      <li>
        <NavLink to="/TopNewsPage">Top News</NavLink>
      </li>
      <li>
        <NavLink to="/CategoriesPage">Categories</NavLink>
      </li>
      <li>
        <NavLink to="/SearchPage">Search</NavLink>
      </li>
    </ul>
  );
};

Navbar.propTypes = {};

export default Navbar;
