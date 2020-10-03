import React from "react";
import { render, screen } from "@testing-library/react";
import mockAxios from "axios";
import { MemoryRouter } from "react-router-dom";
import manyNewsUS from "../../__mocks__/manyNewsUS.json";
import TopNewsPage from "./TopNewsPage";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "/TopNewsPage",
    // state:{}
  }),
}));

const mockUseContext = jest.fn().mockImplementation(() => ({
  country: "us",
  selectCountry: () => {},
}));

React.useContext = mockUseContext;

describe("<TopNewsPage />", () => {
  it("should have loading", () => {
    render(<TopNewsPage />);
    expect(screen.getByTestId("loading")).toBeInTheDocument();
  });

  it("should have title", async () => {
    mockAxios.get.mockResolvedValueOnce({ data: manyNewsUS });
    render(<TopNewsPage />, { wrapper: MemoryRouter });

    expect(
      await screen.findByText("Top news from United States")
    ).toBeInTheDocument();
  });

  it("should fetch news and display newsTiles", async () => {
    mockAxios.get.mockResolvedValueOnce({ data: manyNewsUS });

    render(<TopNewsPage />, { wrapper: MemoryRouter });

    const newsTile = await screen.findAllByTestId("news-tile");
    expect(newsTile).toHaveLength(20);

    expect(mockAxios.get).toHaveBeenCalled();
  });
});
