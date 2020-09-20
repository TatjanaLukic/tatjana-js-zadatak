import React from "react";
import { shallow,mount } from "enzyme";
import SearchBox from "./SearchBox";

describe("<SearchBox />", () => {
  let searchBox;
  const fn = () => {};

  it("should have input", () => {
    searchBox = mount(<SearchBox term="Search term" onChangeHandler={fn} />);
    expect(searchBox.find('input')).toHaveLength(1);
    searchBox.unmount();
  });
  it("spanshot matches", () => {
    searchBox = shallow(<SearchBox term="Search term" onChangeHandler={fn} />);
    expect(searchBox).toMatchSnapshot();
  });
});
