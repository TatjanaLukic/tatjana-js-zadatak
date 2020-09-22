import React, { useState as useStateMock } from "react";
import { shallow } from "enzyme";
import CategoryBlock from "./CategoryBlock";

const mockUseContext = jest.fn().mockImplementation(() => ({
  country: "us",
  selectCountry: () => {},
}));

React.useContext = mockUseContext;

describe("<CategoryBlock />", () => {
  let categoryBlock;
  let data = {
    categoryName: "entertainment",
  };

  beforeEach(() => {
    categoryBlock = shallow(<CategoryBlock {...data} />);
  });
  it("should have loading", () => {
    expect(categoryBlock.find("Loading")).toHaveLength(1);
  });
  it("spanshot matches", () => {
    expect(categoryBlock).toMatchSnapshot();
  });
});
