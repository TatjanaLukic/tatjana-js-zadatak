import React from "react";
import { shallow } from "enzyme";
import CountryFilterItem from "./CountryFilterItem";

describe("<CountryFilterItem />", () => {
  let countryFilterItem;
  let fn = () => {};
  let data = {
    id: "us",
    value: "us",
    checked: false,
    onChange: fn,
    labelName: "us",
    className: "country-filter-item",
  };

  beforeEach(() => {
    countryFilterItem = shallow(<CountryFilterItem {...data} />);
  });

  it("should render label", () => {
    expect(countryFilterItem.find("label")).toHaveLength(1);
  });
});
