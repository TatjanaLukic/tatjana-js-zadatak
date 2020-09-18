import React from "react";
import PropTypes from "prop-types";

import './countryFilter.css';

const CountryFilter = (props) => {
  return (
    <div className="country-filter">
      <div>US</div>
      <div>GB</div>
    </div>
  );
};

CountryFilter.propTypes = {};

export default CountryFilter;
