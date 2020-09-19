import React from "react";
import { MemoryRouter } from "react-router-dom";
import CountryFilter from "./CountryFilter";

export default {
  title: "App/CountryFilter",
  component: CountryFilter,
};

const Template = () => <CountryFilter />;

export const Default = Template.bind({});
Default.decorators = [
  (getStory) => (
    <MemoryRouter initialEntries={["/TopNewsPage"]}>{getStory()}</MemoryRouter>
  ),
];

export const Disabled = Template.bind({});
Disabled.decorators = [
  (getStory) => (
    <MemoryRouter initialEntries={["/TopNewsPage/NewsPage"]}>
      {getStory()}
    </MemoryRouter>
  ),
];
