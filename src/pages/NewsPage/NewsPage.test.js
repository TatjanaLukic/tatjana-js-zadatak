import React from "react";
import { shallow } from "enzyme";
import NewsPage from "./NewsPage";
import { oneNewsMock as mock } from "../../__mocks__/oneNewsMock";
import routeData from "react-router";

describe("<NewsPage />", () => {
  let newsPage;

  const mockLocation = {
    pathname: "/NewsPage",
    hash: "",
    search: "",
    state: {
      title: mock.title,
      urlToImage: mock.urlToImage,
      author: mock.author,
      content: mock.content,
      publishedAt: mock.publishedAt,
    },
  };

  beforeEach(() => {
    jest.spyOn(routeData, "useLocation").mockReturnValue(mockLocation);
    newsPage = shallow(<NewsPage />);
  });

  it("should have 1 article", () => {
    expect(newsPage.find("article")).toHaveLength(1);
  });

  it("should have link", () => {
    expect(newsPage.find("Link")).toHaveLength(1);
  });

  it("spanshot matches", () => {
    expect(newsPage).toMatchSnapshot();
  });
});
