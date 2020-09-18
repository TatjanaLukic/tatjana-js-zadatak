import React, { useContext } from "react";
import CountryContext from "../../context/countryContext";
import PropTypes from "prop-types";
import CountryFilterItem from "./CountryFilterItem/CountryFilterItem";

import "./countryFilter.css";

const CountryFilter = () => {
  const country = useContext(CountryContext);

  const selectCF = (cf) => {
    country.selectCountry(cf);
  };

  return (
    <div className="country-filter">
      <CountryFilterItem
        id="us"
        value="us"
        onChange={() => selectCF("us")}
        checked={country.country === "us"}
        labelName="US"
        className="country-filter-item"
      />
      <CountryFilterItem
        id="gb"
        value="gb"
        onChange={() => selectCF("gb")}
        checked={country.country === "gb"}
        labelName="GB"
        className="country-filter-item"
      />
    </div>
  );
};

CountryFilter.propTypes = {
  country: PropTypes.shape({
    country: PropTypes.string.isRequired,
    selectCountry: PropTypes.func.isRequired,
  }),
};

export default CountryFilter;
