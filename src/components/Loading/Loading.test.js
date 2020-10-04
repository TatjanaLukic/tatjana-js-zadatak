import React from "react";
import { render } from "@testing-library/react";
import Loading from "../Loading/Loading";

describe("<Loading />", () => {
  it("spanshot matches", () => {
    const { container } = render(<Loading />);
    expect(container).toMatchSnapshot();
  });
});
