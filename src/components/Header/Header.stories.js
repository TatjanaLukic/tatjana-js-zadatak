import React from "react";
import Header from "./Header";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "App/Header",
  component: Header
};

const Template = () => <Header />;

export const Default = Template.bind({});
Default.decorators=  [(getStory) => <MemoryRouter initialEntries={["/TopNewsPage"]}>{getStory()}</MemoryRouter>]

export const CategoriesActive = Template.bind({});
CategoriesActive.decorators=  [(getStory) => <MemoryRouter initialEntries={["/CategoriesPage"]}>{getStory()}</MemoryRouter>]

export const SearchActive = Template.bind({});
SearchActive.decorators=  [(getStory) => <MemoryRouter initialEntries={["/SearchPage"]}>{getStory()}</MemoryRouter>]