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
  onChange: { onFn },
  checked: false,
  disabled: false,
  labelName: "US",
  className: "country-filter-item",
};

export const DefaultDisabled = Template.bind({});
DefaultDisabled.args = {
  ...Default.args,
  disabled: true,
};

export const Checked = Template.bind({});
Checked.args = {
  ...Default.args,
  checked: true,
};

export const CheckedDisabled = Template.bind({});
CheckedDisabled.args = {
  ...Default.args,
  checked: true,
  disabled: true,
};
