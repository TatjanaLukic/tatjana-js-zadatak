import React from "react";
import { MemoryRouter } from "react-router-dom";
import CategoriesPage from "./CategoriesPage";

export default {
  title: "App/CategoriesPage",
  component: CategoriesPage
};

const Template = () => <CategoriesPage />;

export const Default = Template.bind({});
Default.decorators=  [(getStory) => <MemoryRouter>{getStory()}</MemoryRouter>]


