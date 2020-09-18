import React from "react";
import Navbar from "../Navbar/Navbar";
import CountryFilter from "../CountryFilter/CountryFilter";
import "./header.css";

const Header = () => {
  return (
      <header className="header">
          <Navbar />
          <CountryFilter />
      </header>
  )
};

export default Header;
