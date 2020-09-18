import React from "react";
import Header from "./Header";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "App/Header",
  component: Header,
  decorators: [(getStory) => <MemoryRouter>{getStory()}</MemoryRouter>]
};

const Template = () => <Header />;

export const Default = Template.bind({});