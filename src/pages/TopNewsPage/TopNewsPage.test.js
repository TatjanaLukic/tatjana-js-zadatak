import React from "react";
import { shallow } from "enzyme";
import TopNewsPage from "./TopNewsPage";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "/TopNewsPage",
    // state:{}
  }),
}));

const mockUseContext = jest.fn().mockImplementation(() => ({
  country: "us",
  selectCountry: () => {},
}));

React.useContext = mockUseContext;

describe("<TopNewsPage />", () => {
  let topNewsPage;
  beforeEach(() => {
    topNewsPage = shallow(<TopNewsPage />);
  });

  it("should have loading", () => {
    expect(topNewsPage.find("Loading")).toHaveLength(1);
  });

  it("spanshot matches", () => {
    expect(topNewsPage).toMatchSnapshot();
  });
});
