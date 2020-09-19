import React from "react";
import { MemoryRouter } from "react-router-dom";
import NewsPage from "./NewsPage";
import { oneNewsMock as mock } from "../../__mocks__/oneNewsMock";

const state = {
  title: mock.title,
  urlToImage: mock.urlToImage,
  author: mock.author,
  content: mock.content,
  publishedAt: mock.publishedAt,
};

export default {
  title: "App/NewsPage",
  component: NewsPage,
  decorators: [
    (getStory) => (
      <MemoryRouter initialEntries={[{ state: { ...state } }]}>
        {getStory()}
      </MemoryRouter>
    ),
  ],
};

const Template = (args) => <NewsPage />;

export const Default = Template.bind({});
