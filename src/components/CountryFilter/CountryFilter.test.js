import React from "react";
import { render, screen } from "@testing-library/react";
import routeData from "react-router";
import CountryContext from "../../context/countryContext";
import CountryFilter from "./CountryFilter";

describe("<CountryFilter />", () => {
  let countryFilter;

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should render 2 CountryFilterItem, us checked by default", async () => {
    const mockLocation = {
      pathname: "/TopNewsPage",
      hash: "",
      search: "",
      state: {},
    };
    jest.spyOn(routeData, "useLocation").mockReturnValue(mockLocation);
    render(
      <CountryContext.Provider
        value={{ country: "us", selectCountry: () => {} }}
      >
        <CountryFilter />
      </CountryContext.Provider>
    );
    const countryFilterItems = await screen.findAllByTestId("cf-item");
    expect(countryFilterItems).toHaveLength(2);
    expect(countryFilterItems[0].querySelector("input").value).toBe("us");
    expect(countryFilterItems[0].querySelector("input")).toHaveAttribute(
      "checked"
    );
    expect(countryFilterItems[0].querySelector("input")).not.toHaveAttribute(
      "disabled"
    );
    expect(countryFilterItems[1].querySelector("input").value).toBe("gb");
    expect(countryFilterItems[1].querySelector("input")).not.toHaveAttribute(
      "checked"
    );
    expect(countryFilterItems[1].querySelector("input")).not.toHaveAttribute(
      "disabled"
    );
  });

  it("disabaled for any route containing /NewsPage  ", async () => {
    const mockLocation1 = {
      pathname: "/NewsPage",
      hash: "",
      search: "",
      state: {},
    };
    jest.spyOn(routeData, "useLocation").mockReturnValue(mockLocation1);
    render(
      <CountryContext.Provider
        value={{ country: "us", selectCountry: () => {} }}
      >
        <CountryFilter />
      </CountryContext.Provider>
    );
    const countryFilterItems = await screen.findAllByTestId("cf-item");
    expect(countryFilterItems).toHaveLength(2);

    expect(countryFilterItems[0].querySelector("input")).toHaveAttribute(
      "disabled"
    );
    expect(countryFilterItems[1].querySelector("input")).toHaveAttribute(
      "disabled"
    );
  });

  it("matches snapshoot for active ", async () => {
    const mockLocation = {
      pathname: "/TopNewsPage",
      hash: "",
      search: "",
      state: {},
    };
    jest.spyOn(routeData, "useLocation").mockReturnValue(mockLocation);
    const { container } = render(
      <CountryContext.Provider
        value={{ country: "us", selectCountry: () => {} }}
      >
        <CountryFilter />
      </CountryContext.Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
