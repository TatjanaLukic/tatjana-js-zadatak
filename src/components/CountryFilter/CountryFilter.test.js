import React from "react";
import { shallow } from "enzyme";
import CountryFilterItem from "./CountryFilterItem/CountryFilterItem";
import CountryFilter from "./CountryFilter";

describe("<CountryFilter />", () => {
  let countryFilter;

  beforeEach(() => {
    countryFilter = shallow(<CountryFilter />);
  });

  it("should render 2 CountryFilterItem", () => {
    expect(countryFilter.find("CountryFilterItem")).toHaveLength(2);
  });

  it("spanshot matches", () => {
    expect(countryFilter).toMatchSnapshot();
  });
});
