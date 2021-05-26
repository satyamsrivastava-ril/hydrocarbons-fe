import React from "react";
import { ProgressBar } from "primereact/progressbar";
import "./progressBar.scss";
import "primeicons/primeicons.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
const ProgressBarComponent = (props) => {
  return (
    <ProgressBar
      showValue={props.showValue}
      value={props.value}
      color={props.color}
    />
  );
};

export default ProgressBarComponent;
