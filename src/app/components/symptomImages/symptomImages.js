import React from "react";
import AbsomenSvg from "./abdomenSvg/abdomenSvg";
import AbdomenSvgNew from "./abdomenSvg/abdomenSvgNew";
import BackPainSvg from "./backPain/backPainSvg";
import BackPainSvgSpine from "./backPain/backPainSvgSpine";
import HeadacheType from "./headacheTypes/headacheType";
import ItchingSvg from "./itchingSvg/itchingSvg";
import JointPainSvg from "./jointPain/jointPainSvg";
import JointPainSvgGradient from "./jointPain/jointPainSvgGradient";
import JointPainSvgGradientCircle from "./jointPain/jointPainSvgGradientCircle";
import RadiatingPainSvg from "./radiatingPain/radiating1/radiatingSvg";
import RadiatingSvg2 from "./radiatingPain/radiating2/radiatingSvg2";
import RadiatingSvg3 from "./radiatingPain/radiating3/radiatingSvg3";

const SymptomImages = ({ symptomImage }) => {
  console.log(symptomImage);

  const musclePain = () => {
    return (
      <>
        <RadiatingPainSvg />
        <RadiatingSvg2 />
        <RadiatingSvg3 />
      </>
    );
  };
  const backPain = () => {
    return (
      <>
        {/* <BackPainSvg /> */}
        <BackPainSvgSpine />
      </>
    );
  };

  const jointPain = () => {
    return (
      <>
        {/* <JointPainSvg />
        <JointPainSvgGradient /> */}
        <JointPainSvgGradientCircle />
      </>
    );
  };
  return (
    <>
      {symptomImage === "Abdominal pain" && <AbdomenSvgNew />}
      {symptomImage === "Back pain" && backPain()}
      {symptomImage === "Joint pain" && jointPain()}
      {symptomImage === "Headache" && <HeadacheType />}
      {symptomImage === "Itching" && <ItchingSvg />}
      {symptomImage === "Muscle pain or aches" && musclePain()}
    </>
  );
};

export default SymptomImages;
