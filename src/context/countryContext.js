import React from "react";

const countryContext = React.createContext({
  country: "us",
  selectCountry: () => {},
});

export default countryContext;