import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "../Header/Header";

describe("<Header />", () => {
  it("should render Navbar and CountryFilter", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(screen.getByTestId("navbar")).toBeInTheDocument();
    expect(screen.getByTestId("country-filter")).toBeInTheDocument();
  });

  it("spanshots matche", () => {
    const { container } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();

    fireEvent.click(screen.getByText("Categories"));
    expect(container).toMatchSnapshot();

  });
});
