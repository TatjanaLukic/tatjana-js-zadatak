import React from "react";
import { shallow } from "enzyme";
import Navbar from "../Navbar/Navbar";
import { NavLink } from "react-router-dom";

describe("<navbar />", () => {
  let navbar;

  beforeEach(() => {
    navbar = shallow(<Navbar />);
  });

  it("should render three links", () => {
    expect(navbar.find("NavLink")).toHaveLength(3);
  });
});
