import React from "react";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import mockAxios from "axios";
import { MemoryRouter } from "react-router-dom";
import manyNews from "../../__mocks__/manyNews.json";
import manyBusinessNews from "../../__mocks__/manyNewsBusinessCategory.json";
import CountryContext from "../../context/countryContext";
import TopNewsPage from "./TopNewsPage";

describe("<TopNewsPage />", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("by default fetches news for us, displays title and news tiles", async () => {
    mockAxios.get.mockResolvedValueOnce({ data: manyNews });

    render(
      <CountryContext.Provider
        value={{ country: "us", selectCountry: () => {} }}
      >
        <TopNewsPage />
      </CountryContext.Provider>,
      { wrapper: MemoryRouter }
    );

    expect(screen.getByTestId("loading")).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.getByTestId("loading"));

    expect(mockAxios.get).toHaveBeenCalledTimes(1);

    expect(screen.getByText("Top news from United States")).toBeInTheDocument();

    const newsTile = screen.getAllByTestId("news-tile");
    expect(newsTile).toHaveLength(20);
  });

  it("fetches news for Great Britain, displays title and news tiles", async () => {
    mockAxios.get.mockResolvedValueOnce({ data: manyBusinessNews });
    render(
      <CountryContext.Provider
        value={{ country: "gb", selectCountry: () => {} }}
      >
        <TopNewsPage />
      </CountryContext.Provider>,
      { wrapper: MemoryRouter }
    );

    expect(screen.getByTestId("loading")).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.getByTestId("loading"));

    expect(mockAxios.get).toHaveBeenCalledTimes(1);

    expect(screen.getByText("Top news from Great Britain")).toBeInTheDocument();

    const newsTile = screen.getAllByTestId("news-tile");
    expect(newsTile).toHaveLength(20);
  });

  it("fetches news for some category, displays title and news tiles", async () => {
    const state = {
      categoryName: "business",
    };
    mockAxios.get.mockResolvedValueOnce({ data: manyBusinessNews });

    render(
      <CountryContext.Provider
        value={{ country: "gb", selectCountry: () => {} }}
      >
        <MemoryRouter initialEntries={[{ state: { ...state } }]}>
          <TopNewsPage />
        </MemoryRouter>
      </CountryContext.Provider>
    );

    expect(screen.getByTestId("loading")).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.getByTestId("loading"));

    expect(mockAxios.get).toHaveBeenCalledTimes(1);

    expect(
      screen.getByText("Top business news from Great Britain")
    ).toBeInTheDocument();

    const newsTile = screen.getAllByTestId("news-tile");
    expect(newsTile).toHaveLength(20);
  });

  it("to match loading spanshot ", async () => {
    mockAxios.get.mockResolvedValueOnce({ data: manyNews });

    const { container } = render(
      <CountryContext.Provider
        value={{ country: "us", selectCountry: () => {} }}
      >
        <TopNewsPage />
      </CountryContext.Provider>,
      { wrapper: MemoryRouter }
    );

    expect(container).toMatchSnapshot();
  });

  it("to match spanshot after fetchNews ", async () => {
    mockAxios.get.mockResolvedValueOnce({ data: manyNews });

    const { container } = render(
      <CountryContext.Provider
        value={{ country: "us", selectCountry: () => {} }}
      >
        <TopNewsPage />
      </CountryContext.Provider>,
      { wrapper: MemoryRouter }
    );

    await waitForElementToBeRemoved(() => screen.getByTestId("loading"));

    expect(container).toMatchSnapshot();
  });
});
