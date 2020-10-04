import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NewsTile from "./NewsTile";
import { oneNewsMock as mock } from "../../__mocks__/oneNewsMock";

describe("<NewsTile />", () => {
  let newsTile;
  let data = {
    title: mock.title,
    urlToImage: mock.urlToImage,
    description: mock.description,
    author: mock.author,
    content: mock.content,
    publishedAt: mock.publishedAt,
    parentPath:"TopNewsPage"
  };

  it("should have heading,img,decription and link", () => {
    render(
      <MemoryRouter>
        <NewsTile {...data} />
      </MemoryRouter>
    );
    expect(
      screen.getByRole("heading", { name: mock.title })
    ).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByTestId("description")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "More >" })).toBeInTheDocument();
  });

  it("spanshot matches", () => {
    const { container } = render(
      <MemoryRouter>
        <NewsTile {...data} />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
