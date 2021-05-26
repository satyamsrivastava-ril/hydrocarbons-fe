import React from "react";
import "./selectButton.scss";

import { SelectButton } from "primereact/selectbutton";

import "primeicons/primeicons.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
const SelectButtonComp = (props) => {
  return (
    <SelectButton
      // className="genderSelection"
      value={props.genderSelection}
      name={props.name}
      options={props.gender}
      onChange={(e) => {
        // console.log("e.value", e);
        props.setGenderSelection(e.value !== null ? e.value : "", props.name);
      }}
    />
  );
};

export default SelectButtonComp;
