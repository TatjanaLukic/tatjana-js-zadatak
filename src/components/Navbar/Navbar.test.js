import React from "react";
import { shallow } from "enzyme";
import Navbar from "../Navbar/Navbar";

describe("<navbar />", () => {
  let navbar;

  beforeEach(() => {
    navbar = shallow(<Navbar />);
  });

  it("should render three NavLinks", () => {
    expect(navbar.find("NavLink")).toHaveLength(3);
  });
});
