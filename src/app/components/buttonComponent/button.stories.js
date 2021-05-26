import React from "react";
import Button from "./button";

export default {
  title: "button",
  component: Button,
};

export const Primary = () => (
  <Button className="btn btn-primary">Get Started</Button>
);
export const Secondary = () => (
  <Button className="btn">Continue {"<<"}</Button>
);
