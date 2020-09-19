import React from "react";
import { shallow } from "enzyme";
import routeData from "react-router";
import CountryFilter from "./CountryFilter";

describe("<CountryFilter />", () => {
  let countryFilter;

  const mockLocation = {
    pathname: "/TopNewsPage",
    hash: "",
    search: "",
    state: {},
  };

  beforeEach(() => {
    jest.spyOn(routeData, "useLocation").mockReturnValue(mockLocation);
    countryFilter = shallow(<CountryFilter />);
  });

  it("should render 2 CountryFilterItem", () => {
    expect(countryFilter.find("CountryFilterItem")).toHaveLength(2);
  });

  it("spanshot matches", () => {
    expect(countryFilter).toMatchSnapshot();
  });
});
