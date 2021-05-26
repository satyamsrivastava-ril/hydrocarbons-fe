import React from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";
import "react-circular-progressbar/dist/styles.css";
import "./circularProgressBar.scss";

const CircularProgressBar = (props) => {
  console.log(props);
  return (
    // <div className="circle-progress">
    <CircularProgressbar
      value={props.value * 100}
      text={
        props.showScore
          ? props.value !== undefined
            ? `${(parseFloat(props.value) * 100).toFixed(2)}`
            : ""
          : ""
      }
      styles={buildStyles({
        pathColor: props.color,
      })}
    />
    // </div>
  );
};

export default CircularProgressBar;
