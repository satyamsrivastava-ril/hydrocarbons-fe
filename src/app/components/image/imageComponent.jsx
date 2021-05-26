import React from "react";

const ImageComponent = (props) => {
  return (
    <img
      className={props.className}
      src={props.source}
      alt={props.alt}
      height={props.height}
      width={props.width}
    />
  );
};

export default ImageComponent;
