import React from "react";
import ImageComponent from "./imageComponent";
import doctor from "./../../Images/doctor.png";

export default {
  title: "Image Component",
  component: ImageComponent,
};

export const SampleImage = () => (
  <ImageComponent className="img-fluid" source={doctor} alt="doctor" />
);
