import React from "react";
import SearchBox from "./SearchBox";

export default {
  title: "App/SearchBox",
  component: SearchBox

};

const mockFn = ()=>{};
const Template = (args) => <SearchBox {...args} />;

export const Default = Template.bind({});
Default.args = {
term:"Search term",
onChangeHandler: {mockFn}
};
