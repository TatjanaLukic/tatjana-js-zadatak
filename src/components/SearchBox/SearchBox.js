import React from "react";
import "./searchBox.css";

const SearchBox = ({term, onChangeHandler}) => {

  return (
    <input
      className="searchBox"
      type="search"
      value={term}
      autoFocus={true}
      placeholder="Search term..."
      onChange={onChangeHandler}  
    />
  );
};

export default SearchBox;
