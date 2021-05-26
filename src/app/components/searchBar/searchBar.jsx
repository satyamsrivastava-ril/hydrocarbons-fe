import React, { useState } from "react";
import "./searchBar.scss";
// import withI18n from "../../HOC/withI18n";
const SearchBar = (props) => {
  // const [value,setValue] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const searchSymptom = (e) => {
    // setValue(e.target.value)
    props.setSearchTerm(e.target.value);
  };

  return (
    <>
      <input
        autoComplete="off"
        className="input-box form-control"
        autoFocus={props.autoFocus}
        type="text"
        name="name"
        value={props.searchTerm}
        onSubmit={handleSubmit}
        onChange={searchSymptom}
        placeholder={"searchPlaceholder"}
        style={{ width: `${props.width}`, height: `${props.height}` }}
      />
    </>
  );
};

export default SearchBar;
