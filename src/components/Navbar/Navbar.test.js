import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Navbar from "../Navbar/Navbar";
import { MemoryRouter } from "react-router-dom";

describe("<Navbar />", () => {
  it("should render three NavLinks", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(3);
   
    expect(links[0]).toHaveAttribute("href", "/TopNewsPage");
    expect(links[0].textContent).toBe("Top News");

    expect(links[1]).toHaveAttribute("href", "/CategoriesPage");
    expect(links[1].textContent).toBe("Categories");

    expect(links[2]).toHaveAttribute("href", "/SearchPage");
    expect(links[2].textContent).toBe("Search");

    expect(links[0].className).toBe("navbar-item");
    fireEvent.click(links[0]);
    expect(links[0].className).toBe("navbar-item navbar-item--checked");

  });

  it("spanshots matche", () => {
    const { container } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    const links = screen.getAllByRole("link");
    expect(container).toMatchSnapshot();

    fireEvent.click(links[0]);
    expect(container).toMatchSnapshot();
  });
});
