import React from "react";
import {
  fireEvent,
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import mockAxios from "axios";
import { MemoryRouter } from "react-router-dom";
import topBusinessNews from "../../__mocks__/categoryNews.json";
import CountryContext from "../../context/countryContext";
import CategoryBlock from "./CategoryBlock";

describe("<CategoryBlock />", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("displays slider with category news", async () => {
    const state = {
      categoryName: "business",
    };
    mockAxios.get.mockResolvedValueOnce({ data: topBusinessNews });

    render(
      <CountryContext.Provider
        value={{ country: "gb", selectCountry: () => {} }}
      >
        <MemoryRouter initialEntries={[{ state: { ...state } }]}>
          <CategoryBlock categoryName="business" />
        </MemoryRouter>
      </CountryContext.Provider>
    );

    expect(screen.getByTestId("loading")).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.getByTestId("loading"));

    expect(mockAxios.get).toHaveBeenCalledTimes(1);

    expect(screen.getByTestId("categoryBlock")).toBeInTheDocument();
    expect(screen.getByTestId("slider")).toBeInTheDocument();

    expect(screen.getAllByRole("link")).toHaveLength(6);

    expect(screen.getAllByRole("link")[0]).toHaveClass("category-block__link");

    expect(screen.getAllByTestId("slide")).toHaveLength(5);
    expect(screen.getAllByTestId("slide")[0]).toHaveClass("slide-show");
    expect(screen.getAllByTestId("slide")[1]).toHaveClass("slide-hide");
    expect(screen.getAllByTestId("slide")[2]).toHaveClass("slide-hide");
    expect(screen.getAllByTestId("slide")[3]).toHaveClass("slide-hide");
    expect(screen.getAllByTestId("slide")[4]).toHaveClass("slide-hide");
  });

  it("slider navigation changes displayed one news", async () => {
    const state = {
      categoryName: "business",
    };
    mockAxios.get.mockResolvedValueOnce({ data: topBusinessNews });

    render(
      <CountryContext.Provider
        value={{ country: "gb", selectCountry: () => {} }}
      >
        <MemoryRouter initialEntries={[{ state: { ...state } }]}>
          <CategoryBlock categoryName="business" />
        </MemoryRouter>
      </CountryContext.Provider>
    );

    expect(screen.getByTestId("loading")).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.getByTestId("loading"));

    expect(screen.getAllByTestId("slide")).toHaveLength(5);
    expect(screen.getAllByTestId("slide")[0]).toHaveClass("slide-show");
    expect(screen.getAllByTestId("slide")[1]).toHaveClass("slide-hide");
    expect(screen.getAllByTestId("slide")[2]).toHaveClass("slide-hide");
    expect(screen.getAllByTestId("slide")[3]).toHaveClass("slide-hide");
    expect(screen.getAllByTestId("slide")[4]).toHaveClass("slide-hide");

    fireEvent.click(screen.getByTestId("nav-right"));
    expect(screen.getAllByTestId("slide")).toHaveLength(5);
    expect(screen.getAllByTestId("slide")[0]).toHaveClass("slide-hide");
    expect(screen.getAllByTestId("slide")[1]).toHaveClass("slide-show");
    expect(screen.getAllByTestId("slide")[2]).toHaveClass("slide-hide");
    expect(screen.getAllByTestId("slide")[3]).toHaveClass("slide-hide");
    expect(screen.getAllByTestId("slide")[4]).toHaveClass("slide-hide");

    fireEvent.click(screen.getByTestId("nav-left"));
    expect(screen.getAllByTestId("slide")).toHaveLength(5);
    expect(screen.getAllByTestId("slide")[0]).toHaveClass("slide-show");
    expect(screen.getAllByTestId("slide")[1]).toHaveClass("slide-hide");
    expect(screen.getAllByTestId("slide")[2]).toHaveClass("slide-hide");
    expect(screen.getAllByTestId("slide")[3]).toHaveClass("slide-hide");
    expect(screen.getAllByTestId("slide")[4]).toHaveClass("slide-hide");
  });

  
  it("collapse/expand icon collapses/expands categoryBlock", async () => {
    const state = {
      categoryName: "business",
    };
    mockAxios.get.mockResolvedValueOnce({ data: topBusinessNews });

    render(
      <CountryContext.Provider
        value={{ country: "gb", selectCountry: () => {} }}
      >
        <MemoryRouter initialEntries={[{ state: { ...state } }]}>
          <CategoryBlock categoryName="business" />
        </MemoryRouter>
      </CountryContext.Provider>
    );

    expect(screen.getByTestId("loading")).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.getByTestId("loading"));

    fireEvent.click(screen.getByTestId("collapse"));

    expect(screen.getByTestId("slider")).toHaveClass("category-block--hide");

    fireEvent.click(screen.getByTestId("expand"));
    expect(screen.getByTestId("slider")).toHaveClass("category-block--show");
  });

  it("to match spanshots ", async () => {
    const state = {
      categoryName: "business",
    };

    mockAxios.get.mockResolvedValueOnce({ data: topBusinessNews });

    const { container } = render(
      <CountryContext.Provider
        value={{ country: "gb", selectCountry: () => {} }}
      >
        <MemoryRouter initialEntries={[{ state: { ...state } }]}>
          <CategoryBlock categoryName="business" />
        </MemoryRouter>
      </CountryContext.Provider>
    );

    expect(container).toMatchSnapshot();

    await waitForElementToBeRemoved(() => screen.getByTestId("loading"));
    expect(container).toMatchSnapshot();

    fireEvent.click(screen.getByTestId("collapse"));
    expect(container).toMatchSnapshot();
  });
});
