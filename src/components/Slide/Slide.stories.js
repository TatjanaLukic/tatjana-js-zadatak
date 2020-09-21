import React from "react";
import { MemoryRouter } from "react-router-dom";
import Slide from "./Slide";
import { oneNewsMock as mock } from "../../__mocks__/oneNewsMock";

export default {
  title: "App/Slide",
  component: Slide,
  decorators: [(getStory) => <MemoryRouter>{getStory()}</MemoryRouter>],
};

const Template = (args) => <Slide {...args} />;

export const Default = Template.bind({});
Default.args = {
  isCurrent: true,
  title: mock.title,
  urlToImage: mock.urlToImage,
  description: mock.description,
  author: mock.author,
  content: mock.content,
  publishedAt: mock.publishedAt,
};
