import React from "react";
import CountryFilterItem from "./CountryFilterItem";

export default {
  title: "App/CountryFilterItem",
  component: CountryFilterItem,
};

const onFn = () => {};

const Template = (args) => <CountryFilterItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: "us",
  value: "us",
  onChange: {onFn},
  checked: false,
  labelName: "US",
  className: "country-filter-item",
};

export const Checked = Template.bind({});
Checked.args = {
  ...Default.args,
  checked: true
};
