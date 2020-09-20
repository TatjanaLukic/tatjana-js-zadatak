import React from "react";
import { shallow } from "enzyme";
import SearchPage from "./SearchPage";

describe("<SearchPage />", () => {
  let searchPage;

  beforeEach(() => {
    searchPage = shallow(<SearchPage />);
  });
  it("should have h1", () => {
    expect(searchPage.find("h1")).toHaveLength(1);
  });

  it("should have SearhBox", () => {
    expect(searchPage.find("SearchBox")).toHaveLength(1);
  });

  it("spanshot matches", () => {
    expect(searchPage).toMatchSnapshot();
  });
});
