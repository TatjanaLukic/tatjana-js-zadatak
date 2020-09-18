import React from "react";
import PropTypes from "prop-types";

const CountryFilterItem = ({
  id,
  value,
  checked,
  onChange,
  labelName,
  className,
}) => {
  return (
    <div>
      <input
        type="radio"
        id={id}
        value={value}
        onChange={onChange}
        checked={checked}
        hidden
      />
      <label
        htmlFor={id}
        className={checked ? `${className} ${className}--checked` : className}
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
