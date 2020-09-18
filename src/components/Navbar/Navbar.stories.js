import React from "react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "./Navbar";

export default {
  title: "App/Navbar",
  component: Navbar,
  decorators: [(getStory) => <MemoryRouter>{getStory()}</MemoryRouter>],
};

const Template = () => <Navbar />;

export const Default = Template.bind({});
