import React from "react";
import { shallow } from "enzyme";
import CategoryBlock from "./CategoryBlock";

describe("<CategoryBlock />", () => {
  let categoryBlock;
  let data = {
    categoryName:"entertainment"
  };

  beforeEach(() => {
    categoryBlock = shallow(<CategoryBlock {...data} />);
  });

  it("should have 1 Link", () => {
    expect(categoryBlock.find("Link")).toHaveLength(1);
  });
  it("should have 5 Slide", () => {
    expect(categoryBlock.find("Slide")).toHaveLength(5);
  });
  it("spanshot matches", () => {
    expect(categoryBlock).toMatchSnapshot();
  });
});
