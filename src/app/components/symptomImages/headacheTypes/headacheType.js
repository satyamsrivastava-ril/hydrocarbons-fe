import React from "react";
import migraine from "../../../Images/migraine.png";
import migraineGif from "../../../Images/migraineGif.gif";
import sinus from "../../../Images/sinus.png";
import sinusGif from "../../../Images/sinusGif.gif";
import tension from "../../../Images/tension.png";
import tensionGif from "../../../Images/tensionGif.gif";
import hypertension from "../../../Images/hypertension.png";
import hypertensionGif from "../../../Images/hypertensionGif.gif";
import migraineSide from "../../../Images/migraineSide.png";
import migraineSideGif from "../../../Images/migraineSideGif.gif";
import tensionSide from "../../../Images/tensionSide.png";
import tensionSideGif from "../../../Images/tensionSideGif.gif";
import ImageComponent from "../../image/imageComponent";

const HeadacheType = () => {
  const mapImagesToHeader = {
    " MIGRAINE": [migraine, migraineGif],
    " SINUS": [sinus, sinusGif],
    " TENSION": [tension, tensionGif],
    " TENSION_TYPE": [tensionSide, tensionSideGif],
    " MIGRAINE_SIDE": [migraineSide, migraineSideGif],
    " HYPERTENSION": [hypertension, hypertensionGif],
  };

  const selected = (e, name) => {
    console.log(e);

    let element = document.getElementsByClassName(name)[0];

    console.log("element", name, element);
    element.classList.toggle("selected-symptom");
  };

  return (
    <div className="symptom-container">
      {Object.entries(mapImagesToHeader).map((item) => {
        console.log("@@---", item);
        return (
          <div
            className={`image-container ${item[0]}`}
            onClick={(e) => {
              selected(e, item[0]);
            }}
          >
            <span>{item[0]}</span>
            <ImageComponent
              source={item[1][0]}
              alt="headache"
              height="auto"
              width="100%"
              className="image"
            />
            <div class="overlay">
              <div class="text">{item[0]}</div>
              <ImageComponent
                source={item[1][1]}
                alt="headache"
                height="100%"
                width="100%"
                className="image"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HeadacheType;
