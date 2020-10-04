import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Slide from "./Slide";
import { oneNewsMock as mock } from "../../__mocks__/oneNewsMock";

describe("<Slide />", () => {
  let data = {
    isCurrent: true,
    title: mock.title,
    urlToImage: mock.urlToImage,
    description: mock.description,
    author: mock.author,
    content: mock.content,
    publishedAt: mock.publishedAt,
    parentPath: "/categoriesPage",
  };

  it("should have 1 Link", () => {
    render(
      <MemoryRouter>
        <Slide {...data} />
      </MemoryRouter>
    );
    expect(
      screen.getByRole("heading", { name: mock.title })
    ).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByTestId("description")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: mock.title })).toBeInTheDocument();
  });

  it("spanshot matches", () => {
    const { container } = render(
      <MemoryRouter>
        <Slide {...data} />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
