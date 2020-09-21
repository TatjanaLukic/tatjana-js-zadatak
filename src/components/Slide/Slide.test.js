import React from "react";
import { shallow } from "enzyme";
import Slide from "./Slide";
import { oneNewsMock as mock } from "../../__mocks__/oneNewsMock";

describe("<Slide />", () => {
  let slide;
  let data = {
    isCurrent:true,
    title: mock.title,
    urlToImage: mock.urlToImage,
    description: mock.description,
    author: mock.author,
    content: mock.content,
    publishedAt: mock.publishedAt,
    parentPath:"/categoriesPage"
  };

  beforeEach(() => {
    slide = shallow(<Slide {...data} />);
  });

  it("should have 1 Link", () => {
    expect(slide.find("Link")).toHaveLength(1);
  });
  it("should have 1 h3", () => {
    expect(slide.find("h3")).toHaveLength(1);
  });
  it("should have 1 img", () => {
    expect(slide.find("img")).toHaveLength(1);
  });
  it("should have 1 paragraph", () => {
    expect(slide.find("p")).toHaveLength(1);
  });
  it("spanshot matches", () => {
    expect(slide).toMatchSnapshot();
  });
});
