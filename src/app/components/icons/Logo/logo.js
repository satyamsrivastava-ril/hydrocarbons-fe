import React from "react";
import { FaConfluence } from "../index";

function Logo(props) {
  // console.log(props);
  return (
    <FaConfluence
      className={props.className ? props.className : "color-primary"}
      style={{ color: props.color, fontSize: props.fontSize }}
    />
  );
}

export default Logo;
