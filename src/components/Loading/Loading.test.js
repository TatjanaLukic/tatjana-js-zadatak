import React from "react";
import { shallow } from "enzyme";
import Loading from "../Loading/Loading";

describe("<Loading />", () => {
  let loading;

  beforeEach(() => {
    loading = shallow(<Loading />);
  });

  it("spanshot matches", () => {
    expect(loading).toMatchSnapshot();
  });
});
