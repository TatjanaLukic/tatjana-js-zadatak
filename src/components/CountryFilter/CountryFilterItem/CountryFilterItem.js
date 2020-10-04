import React from "react";
import PropTypes from "prop-types";
import "./countryFilterItem.css";

const CountryFilterItem = ({
  id,
  value,
  checked,
  onChange,
  labelName,
  className,
  disabled
}) => {
  let classes = checked ? `${className} ${className}--checked` : className;
  classes = disabled ? `${classes} ${className}--disabled` : classes;
  return (
    <div data-testid="cf-item">
      <input
        type="radio"
        id={id}
        value={value}
        onChange={onChange}
        checked={checked}
        disabled={disabled}
        hidden
      />
      <label
        htmlFor={id}
        className={classes}
      >
        {labelName}
      </label>
    </div>
  );
};

CountryFilterItem.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  labelName: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default CountryFilterItem;
