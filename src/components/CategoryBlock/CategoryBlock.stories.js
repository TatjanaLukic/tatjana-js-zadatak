import React from "react";
import { MemoryRouter } from "react-router-dom";
import CategoryBlock from "./CategoryBlock";

export default {
  title: "App/CategoryBlock",
  component: CategoryBlock,
  decorators: [(getStory) => <MemoryRouter>{getStory()}</MemoryRouter>],
};

const Template = (args) => <CategoryBlock {...args} />;

export const Default = Template.bind({});
Default.args = {
    categoryName:"entertainment"
};
