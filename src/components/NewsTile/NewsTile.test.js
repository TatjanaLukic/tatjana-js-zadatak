import React from "react";
import { shallow } from "enzyme";
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
  };

  beforeEach(() => {
    newsTile = shallow(<NewsTile {...data} />);
  });

  it("should have 1 Link", () => {
    expect(newsTile.find("Link")).toHaveLength(1);
  });
  it("spanshot matches", () => {
    expect(newsTile).toMatchSnapshot();
  });
});
