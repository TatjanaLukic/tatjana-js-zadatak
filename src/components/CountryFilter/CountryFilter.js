import React, { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import CountryContext from "../../context/countryContext";
import PropTypes from "prop-types";
import CountryFilterItem from "./CountryFilterItem/CountryFilterItem";

import "./countryFilter.css";

const CountryFilter = () => {
  const country = useContext(CountryContext);
  const [disabled, setDisabled] = useState(false);

  const regex = RegExp("/NewsPage*");
  const location = useLocation();
  useEffect(() => {
    if (regex.test(location.pathname)) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [location]);

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
        disabled={disabled}
      />
      <CountryFilterItem
        id="gb"
        value="gb"
        onChange={() => selectCF("gb")}
        checked={country.country === "gb"}
        labelName="GB"
        className="country-filter-item"
        disabled={disabled}
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
