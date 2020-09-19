import React from "react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "./Navbar";

export default {
  title: "App/Navbar",
  component: Navbar
};

const Template = () => <Navbar />;

export const Default = Template.bind({});
Default.decorators=  [(getStory) => <MemoryRouter initialEntries={["/TopNewsPage"]}>{getStory()}</MemoryRouter>]

export const CategoriesActive = Template.bind({});
CategoriesActive.decorators=  [(getStory) => <MemoryRouter initialEntries={["/CategoriesPage"]}>{getStory()}</MemoryRouter>]

export const SearchActive = Template.bind({});
SearchActive.decorators=  [(getStory) => <MemoryRouter initialEntries={["/SearchPage"]}>{getStory()}</MemoryRouter>]
