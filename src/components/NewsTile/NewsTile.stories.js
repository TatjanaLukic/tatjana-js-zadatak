import React from "react";
import { MemoryRouter } from "react-router-dom";
import NewsTile from "./NewsTile";
import {oneNewsMock as mock} from "../../__mocks__/oneNewsMock";

export default {
  title: "App/NewsTile",
  component: NewsTile,
  decorators: [(getStory) => <MemoryRouter>{getStory()}</MemoryRouter>],
};

const Template = (args) => <NewsTile {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: mock.title,
  urlToImage: mock.urlToImage,
  description: mock.description,
  author: mock.author,
  content: mock.content,
  publishedAt: mock.publishedAt,
};
