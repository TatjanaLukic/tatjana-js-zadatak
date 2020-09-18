import React from "react";
import PropTypes from "prop-types";
import Navbar from "../Navbar/Navbar";
import CountryFilter from "../CountryFilter/CountryFilter";

const Header = (props) => {
  return (
      <header>
          <Navbar />
          <CountryFilter />
      </header>
  )
};

Header.propTypes = {};

export default Header;
