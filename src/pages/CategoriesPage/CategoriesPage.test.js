import React from "react";
import { shallow } from "enzyme";
import CategoriesPage from "./CategoriesPage";

describe("<CategoriesPage />", () => {
  let categoriesPage;

  beforeEach(() => {
    categoriesPage = shallow(<CategoriesPage />);
  });

  it("should have h1", () => {
    expect(categoriesPage.find("h1")).toHaveLength(1);
  });
  it("should have title=Top 5 news by categories from United States", () => {
    expect(categoriesPage.find("h1").text()).toEqual("Top 5 news by categories from United States")
  });
  it("should have 5 CategoryBlock", () => {
    expect(categoriesPage.find("CategoryBlock")).toHaveLength(6);
  });
  it("spanshot matches", () => {
    expect(categoriesPage).toMatchSnapshot();
  });
});
