import React from "react";
import {
  render,
  screen,
} from "@testing-library/react";
import mockAxios from "axios";
import { MemoryRouter } from "react-router-dom";
import manyNews from "../../__mocks__/manyNews.json";
import CountryContext from "../../context/countryContext";
import SearchPage from "./SearchPage";

describe("<SearchPage />", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("by default fetches news for us, displays title and news tiles", async () => {
    mockAxios.get.mockResolvedValueOnce({ data: manyNews });

    render(
      <CountryContext.Provider
        value={{ country: "us", selectCountry: () => {} }}
      >
        <SearchPage />
      </CountryContext.Provider>,
      { wrapper: MemoryRouter }
    );

    expect(mockAxios.get).toHaveBeenCalledTimes(1);

    expect(
      screen.getByText("Search top news from United States by term")
    ).toBeInTheDocument();

    const searchInput = screen.getByRole("searchbox");
    expect(searchInput).toBeInTheDocument();

    const newsTile = await screen.findAllByTestId("news-tile");
    expect(newsTile).toHaveLength(20);
  });

  it("snapshot matches", async () => {
    mockAxios.get.mockResolvedValueOnce({ data: manyNews });

    const { container } = render(
      <CountryContext.Provider
        value={{ country: "us", selectCountry: () => {} }}
      >
        <SearchPage />
      </CountryContext.Provider>,
      { wrapper: MemoryRouter }
    );

    expect(container).toMatchSnapshot();

    await screen.findAllByTestId("news-tile");

    expect(container).toMatchSnapshot();
  });
});
