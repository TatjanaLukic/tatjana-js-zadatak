import React from "react";
import { shallow } from "enzyme";
import Navbar from "../Navbar/Navbar";
import { manyNewsMock as mockData } from "../../__mocks__/manyNewsMock";
import { NavLink } from "react-router-dom";

describe("<Navbar />", () => {
  let navbar;

  beforeEach(() => {
    navbar = shallow(<Navbar />);
  });

  it("should render three NavLinks", () => {
    expect(navbar.find("NavLink")).toHaveLength(3);
  });

  it("spanshot matches", () => {
    expect(navbar).toMatchSnapshot();
  });
});
