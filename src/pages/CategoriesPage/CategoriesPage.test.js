import React from "react";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import mockAxios from "axios";
import { MemoryRouter } from "react-router-dom";
import CountryContext from "../../context/countryContext";
import categoryNews from "../../__mocks__/categoryNews.json";
import CategoriesPage from "./CategoriesPage";

describe("<CategoriesPage />", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  it("should have h1", async () => {
    mockAxios.get.mockResolvedValue({ data: categoryNews });
    render(
      <CountryContext.Provider
        value={{ country: "us", selectCountry: () => {} }}
      >
        <CategoriesPage />
      </CountryContext.Provider>,
      { wrapper: MemoryRouter }
    );
    expect(
      screen.getByRole("heading", {
        name: "Top 5 news by categories from United States",
      })
    ).toBeInTheDocument();
    expect(screen.getAllByTestId("loading")).toHaveLength(6);

    await waitForElementToBeRemoved(() => screen.getAllByTestId("loading"));

    expect(screen.getAllByTestId("categoryBlock")).toHaveLength(6);
  });

  it("spanshot matches", async () => {
    mockAxios.get.mockResolvedValue({ data: categoryNews });
    const { container } = render(
      <CountryContext.Provider
        value={{ country: "us", selectCountry: () => {} }}
      >
        <CategoriesPage />
      </CountryContext.Provider>,
      { wrapper: MemoryRouter }
    );
    expect(container).toMatchSnapshot();

    await waitForElementToBeRemoved(() => screen.getAllByTestId("loading"));

    expect(container).toMatchSnapshot();
  });
});
