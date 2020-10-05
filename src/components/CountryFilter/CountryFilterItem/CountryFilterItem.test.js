import React from "react";
import { render, screen } from "@testing-library/react";
import CountryFilterItem from "./CountryFilterItem";

describe("<CountryFilterItem />", () => {
  let countryFilterItem;
  let fn = () => {};
  let data = {
    id: "us",
    value: "us",
    checked: false,
    onChange: fn,
    labelName: "us",
    className: "country-filter-item",
  };

  it("should render radio with hidden input and visible label", () => {
    render(<CountryFilterItem {...data} />);
    const countryFilterItem = screen.getByTestId("cf-item");

    expect(
      countryFilterItem.querySelector("input[type=radio]")
    ).toBeInTheDocument();
    expect(
      countryFilterItem.querySelector("input[type=radio]")
    ).toHaveAttribute("hidden");

    expect(countryFilterItem.querySelector("label")).toBeInTheDocument();
    expect(countryFilterItem.querySelector("label").textContent).toBe("us");
    expect(countryFilterItem.querySelector("label")).not.toHaveAttribute(
      "hidden"
    );
  });

  it("matches snapshoot ", async () => {
    const { container } = render(<CountryFilterItem {...data} />);
    expect(container).toMatchSnapshot();
  });
});
