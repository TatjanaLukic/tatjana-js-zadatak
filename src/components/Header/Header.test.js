import React from "react";
import { shallow } from "enzyme";
// import CountryFilter from "./CountryFilter";
// import Navbar from '../Navbar/Navbar';
import Header from "../Header/Header";

describe("<Header />", () => {
  let header;

  beforeEach(() => {
    header = shallow(<Header />);
  });

  it("should render 1 Navbar", () => {
    expect(header.find("Navbar")).toHaveLength(1);
  });

  it("should render 1 CountryFilter", () => {
    expect(header.find("Navbar")).toHaveLength(1);
  });
});
