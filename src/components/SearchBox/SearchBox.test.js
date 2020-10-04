import React from "react";
import { render, screen } from "@testing-library/react";
import SearchBox from "./SearchBox";

describe("<SearchBox />", () => {
  const fn = () => {};

  it("should have input", () => {
    render(<SearchBox term="Search term" onChangeHandler={fn} />);
    expect(screen.getByRole("searchbox")).toBeInTheDocument();
    expect(screen.getByRole("searchbox")).toHaveAttribute("placeholder","Search term...")
  });
  
  it("spanshot matches", () => {
    const { container } = render(
      <SearchBox term="Search term" onChangeHandler={fn} />
    );
    expect(container).toMatchSnapshot();
  });
});
