import React from "react";
import "./abdomenSvg.scss";
import PropTypes from "prop-types";

/**
 * Component for the abdomen svg
 * 
 * @component 
 * @example
 * const setShowAbdomen = () => {}
 * return (
 *  <AbdomenSvg setShowAbdomen={setShowAbdomen} />
 * )
 */
const AbdomenSvg = () => {
  const onClick = (e) => {
  };

  function showTooltip(evt, text) {
    let tooltip = document.getElementById("tooltip");
    tooltip.innerHTML = text;
    tooltip.style.display = "block";
  }

  function hideTooltip() {
    var tooltip = document.getElementById("tooltip");
    tooltip.style.display = "none";
  }

  return (
    <div
      style={{
        width: "95%",
        position: "absolute",
      }}
    >
      <div
        id="tooltip"
        display="none"
        style={{
          position: "absolute",
          display: "none",

          fontSize: "17px",
          top: "212px",
          left: "395px",
        }}
      ></div>
      <svg
        viewBox="0 0 600 547"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path
            className="body-part1"
            id="A01"
            value="outline"
            transform="matrix(1, 0, 0, 1, 166.8, 246.7)"
            strokeWidth="2.3"
            stroke="#20c8b4"
            strokeOpacity="1"
            fill="none"
            fillOpacity="0"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M108.4 -194.1 C104.6,-190.9 102.9,-187 100.1,-182.9 C95.5,-176.1 90.3,-169.2 84.4,-163.5 C79.6,-158.8 72.2,-153.6 65.7,-151.6 C51,-146.9 30.1,-153 18.4,-162.4 C14.5,-165.6 12,-169.3 10.1,-173.9 C8.6,-177.4 8.2,-180.7 5.7,-183.7 C3.9,-175.9 10.5,-166.4 16.2,-161.8 C26.5,-153.4 38.3,-149.4 51.4,-148.3 C57,-147.9 61.7,-147.4 67.2,-149.2 C72.2,-150.9 79.1,-156 82.9,-159.7 C85.8,-162.5 88.3,-166.1 91.9,-167.9 C91.9,-161 90.7,-153.8 89.8,-146.9 C88.9,-140.8 88.4,-134.1 86.7,-128.2 C84.7,-121.4 82.3,-114.5 79.9,-107.9 C77.9,-102.5 75.3,-96.3 74.3,-90.7 C73.8,-87.9 74,-85.2 73.9,-82.4 C73.7,-80.4 73.2,-78.4 73.2,-76.4 C73.2,-74.1 73.7,-71.9 73.6,-69.6 C73.6,-67.2 73.9,-64.7 73.9,-62.2 C74,-53.9 73.9,-45.7 73.9,-37.4 C73.9,-35.1 73.8,-32.8 74.6,-30.6 C75.5,-27.8 77.8,-25 79.3,-22.4 C82.5,-16.9 86,-9.4 85.5,-2.9 C85.4,-0.1 84.4,5.6 83.8,8.3 C83.2,10.5 81.9,12.8 82,15.1 C82,19.8 84.9,25.4 85.9,30.1 C88.6,41.9 91.2,54.7 91.2,66.8 C91.1,70.8 90.9,74.8 91.3,78.8 C91.8,83.4 92.9,87.8 93.9,92.3 C96.6,104.9 100.3,117.2 103,129.8 C105.8,142.7 108,155.7 109.3,168.8 C109.9,174.5 110.7,180.3 110.7,186.1 C110.7,193.6 110.7,201.1 110.7,208.6 C110.7,212.3 110,216.1 109.9,219.8 C109.9,223.7 109.7,227.2 109.3,231.1 C109.1,233.3 109.5,238.1 108.4,239.8 C107,241.9 103.9,241.6 101.7,241.6 C77.2,241.6 52.7,241.6 28.2,241.6 C26.4,241.6 23.4,241.9 22.2,240.4 C21.5,239.6 21.4,238.1 21.2,237.1 C20.8,234.6 20.7,232.1 20.4,229.6 C19.1,220.5 18.3,211.4 16.1,202.6 C13.7,192.9 11.9,183 9.7,173.3 C7.2,162.6 3.5,151.4 3.4,140.3 C3.4,137.6 3.4,134.8 3.4,132.1 C3.4,129.6 3.5,123.9 4.9,121.9 C6.2,120.3 10.4,119.3 12.4,118.2 C15.7,116.3 18.6,113.3 20.9,110.3 C24.7,105.7 24.9,102.5 27.3,97.6 C30.2,91.4 33.6,85.6 36.6,79.6 C38.1,76.5 44.2,66.2 44.5,63.8 C44.7,62.3 44.4,62.1 43.9,60.8 C39.6,65.2 35.3,74.7 32.5,80.3 C30.8,83.7 28.5,86.6 27,90.1 C24.9,95 23,101.3 20.2,105.8 C17.9,109.4 14.7,113.2 10.9,115.3 C2.4,120.2 -9.4,118.3 -15.9,111.1 C-20.8,105.6 -23,98.8 -26,92.3 C-29.5,84.8 -33.8,77.9 -37.6,70.6 C-39.8,66.4 -42,60.3 -45.3,57.1 C-45.7,58.3 -46.1,58.6 -45.9,60.1 C-45.6,62.4 -39.2,73.8 -37.8,76.6 C-35.5,80.8 -32.9,85 -31,89.3 C-25.1,102.3 -20.3,118.3 -4.1,120.8 C-4,123.4 -3.5,125.8 -3.4,128.3 C-3.1,132.3 -3.3,136.3 -3.3,140.3 C-3.3,146.5 -4.6,152.3 -6,158.3 C-7.9,166.8 -9.9,175.3 -11.8,183.8 C-13.4,190.8 -14.7,197.8 -16.1,204.8 C-16.5,206.6 -17.1,208.3 -17.4,210.1 C-19.3,221.8 -20.4,233.5 -21.3,245.3 C-50.3,245.3 -79.3,245.3 -108.3,245.3 C-108.3,237.3 -109.8,229.3 -109.8,221.3 C-109.8,216.3 -110.6,211.4 -110.6,206.3 C-110.6,200.3 -110.6,194.3 -110.6,188.3 C-110.6,185.3 -110.1,182.4 -109.9,179.3 C-108.9,164.9 -107.1,150.7 -104.2,136.6 C-103.4,132.5 -102,128.6 -101.1,124.6 C-100.3,121.4 -99.9,118 -99.1,114.8 C-96.6,104.1 -93.4,93.4 -91.5,82.6 C-91.2,80.6 -90.4,73.8 -90.5,72.1 C-90.6,69.8 -91.1,67.7 -91,65.3 C-90.8,59.8 -90.1,53.6 -89.2,48.1 C-88.1,41 -86.7,34 -85,27.1 C-84.2,23.4 -82.3,19.5 -82.1,15.8 C-82,11 -85.7,3.8 -85,-6.7 C-84.5,-12.8 -81.3,-18.7 -78.2,-23.9 C-76.9,-25.9 -75,-27.8 -74.2,-30 C-73.7,-31.6 -73.8,-33.5 -73.8,-35.1 C-73.8,-40.9 -73.8,-46.7 -73.8,-52.4 C-73.8,-56.4 -73,-60.4 -73,-64.4 C-73,-71.5 -72.8,-85.6 -74.2,-92.2 C-75.1,-96.6 -77.1,-101.4 -78.7,-105.6 C-81.6,-113.2 -84.5,-121.1 -86.6,-128.9 C-88.2,-134.9 -89,-142.2 -89.7,-148.4 C-90.4,-154.9 -91.3,-161.4 -91.8,-167.9 C-88.2,-166.1 -85.8,-162.6 -82.8,-159.9 C-75.9,-153.6 -68.4,-148.3 -58.8,-147.7 C-56.2,-147.6 -53.9,-148.1 -51.3,-148.3 C-38,-149.4 -24.6,-153.9 -14.6,-162.9 C-9.6,-167.3 -3.9,-176 -5.6,-182.9 C-7.9,-180.1 -8.7,-176.4 -10.2,-173.1 C-12.1,-169 -14.7,-165.3 -18.3,-162.4 C-30.3,-152.7 -50.5,-146.8 -65.5,-151.6 C-71.1,-153.3 -76.3,-156.7 -80.5,-160.5 C-87,-166.3 -92.7,-172.9 -97.7,-179.9 C-100.9,-184.4 -103.5,-189.7 -107.5,-193.4 C-107.3,-187.2 -99.9,-181 -97.1,-175.4 C-94.7,-170.4 -95.2,-167 -94.6,-161.9 C-94.1,-157.6 -92.8,-151.9 -93,-147.7 C-93.2,-143.8 -97.3,-134.9 -99.1,-131.2 C-100.7,-127.9 -101.9,-124.5 -103.6,-121.4 C-104.8,-119.4 -106.3,-117.9 -107.5,-116 C-109.8,-112.2 -114.1,-100.4 -115.1,-95.9 C-120.1,-96.6 -125.1,-98.1 -130.1,-99.4 C-137,-101.1 -144.1,-102.7 -151.1,-104.4 C-155,-105.4 -159,-106.6 -163,-107.1 C-163,-118.9 -161.5,-134 -158.6,-145.4 C-157.5,-150 -156.1,-154.5 -154.5,-158.9 C-153.9,-160.7 -152.5,-163.1 -152.3,-164.9 C-152.1,-166.7 -153.3,-169.8 -153.8,-171.7 C-155,-176.1 -156.2,-180.6 -157,-185.2 C-158.7,-194.6 -156.8,-204.4 -154.5,-213.6 C-152.8,-220.5 -150.8,-227.2 -148.9,-233.9 C-148.1,-236.6 -146.6,-242.1 -144.6,-243.9 C-142.9,-245.4 -140.4,-245.1 -138.3,-245.1 C-46.1,-245.3 46.2,-245.3 138.4,-245.1 C140.5,-245.1 143.1,-245.4 144.8,-243.9 C146.6,-242.4 147.7,-238.4 148.4,-236.2 C150.6,-229.7 152.4,-223.2 154.1,-216.7 C156.2,-208.3 158.6,-197.5 157.8,-188.9 C157.1,-181.3 153.6,-173.1 153,-167.2 C152.3,-161.3 156.7,-155.9 158.5,-150.7 C159.7,-147 159.9,-142.5 160.5,-138.6 C161.3,-133.2 162.6,-127.6 163,-122.1 C163.5,-115.8 158.3,-116.1 153.4,-114.9 C144.2,-112.6 134.9,-110.3 125.7,-108 C122.9,-107.3 116.5,-104.9 113.8,-105.6 C111.3,-106.3 108.7,-113 107.4,-115.4 C104,-121.8 100.7,-128.2 97.7,-134.9 C96,-138.7 93.7,-143.5 93.5,-147.7 C93.2,-152.2 94.3,-157.3 94.8,-161.9 C95.2,-166 95.1,-170.9 96.9,-174.6 C99.8,-180.8 107.9,-187.5 108.4,-194.1 Z "
          />
        </g>

        <g>
          <g className="one">
            <path
              onMouseOver={(evt) => showTooltip(evt, "RUQ")}
              onMouseOut={() => hideTooltip()}
              className="body-parts1"
              id="A02"
              value="left-foot"
              transform="matrix(1, 0, 0, 1, 105.1, 120.6)"
              strokeWidth="1.3"
              stroke="#20c8b4"
              strokeOpacity="1"
              onClick={onClick}
              fill="#fff"
              fillOpacity="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M-28.1 -44.1 C-23.8,-40.7 -20.7,-35.7 -16.4,-32.2 C-10.6,-27.5 -3.5,-23.6 4,-23.1 C12.3,-22.6 20.4,-25.5 28.5,-26.2 C28.5,-2.7 28.5,20.7 28.5,44.2 C15.8,44.2 3,44.2 -9.8,44.2 C-10.2,33 -15,23.3 -18.4,12.9 C-20.3,7 -22.5,1 -23.9,-5.1 C-25.4,-11.4 -26,-18.2 -26.8,-24.6 C-27.6,-30.4 -29.3,-38.4 -28.1,-44.1 Z "
            />
          </g>
          <g className="one">
            <path
              onMouseOver={(evt) => showTooltip(evt, "Epigastric")}
              onMouseOut={() => hideTooltip()}
              className="body-parts1"
              id="A03"
              value="left-foot"
              transform="matrix(1, 0, 0, 1, 163.8, 126.8)"
              strokeWidth="1.3"
              stroke="#20c8b4"
              strokeOpacity="1"
              onClick={onClick}
              fill="#fff"
              fillOpacity="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M27.9 -38.3 C27.9,-34.8 27.8,-31.4 28,-27.9 C28.2,-24.7 28.7,-21.6 28.7,-18.3 C28.7,-9.6 28.7,-0.7 28.7,8 C28.7,12.6 29.5,17 29.5,21.6 C29.5,27.4 29.5,33.3 29.5,39.1 C9.9,39.1 -9.8,39.1 -29.5,39.1 C-29.5,17.1 -29.5,-5 -29.5,-27.1 C-29.5,-29 -29.7,-31.7 -28.7,-33.3 C-26.3,-37.2 -17.8,-39.1 -13.5,-39.1 C-3.7,-39.1 6.1,-39.1 16,-39.1 C20,-39.1 23.9,-38.4 27.9,-38.3 Z "
            />
          </g>
          <g className="one">
            <path
              onMouseOver={(evt) => showTooltip(evt, "LUQ")}
              onMouseOut={() => hideTooltip()}
              className="body-parts1"
              id="A04"
              value="left-foot"
              transform="matrix(1, 0, 0, 1, 225, 120.6)"
              strokeWidth="1.3"
              stroke="#20c8b4"
              strokeOpacity="1"
              onClick={onClick}
              fill="#fff"
              fillOpacity="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M33.7 -44.1 C33.7,-39.4 32.9,-34.8 32.4,-30.1 C31.5,-21.6 30.8,-12.6 28.9,-4.3 C28,-0.9 26.8,2.5 25.8,5.8 C22.8,15.6 15.8,31.5 15.7,41 C15.7,42.1 15.7,43.1 15.7,44.2 C-0.2,44.2 -16.2,44.2 -32.2,44.2 C-32.2,35.5 -32.2,27 -32.2,18.4 C-32.3,14.7 -32.9,11.1 -33,7.4 C-33.1,-1.9 -33,-11.3 -33,-20.7 C-33,-24.2 -33.5,-27.4 -33.7,-30.9 C-29.5,-30 -25.8,-27.8 -21.7,-26.5 C-10.4,-23 3.6,-20.7 14.3,-27.2 C23.2,-32.7 29.5,-41.7 33.7,-44.1 Z "
            />
          </g>
          <g className="one">
            <path
              onMouseOver={(evt) => showTooltip(evt, "Right Lumbar")}
              onMouseOut={() => hideTooltip()}
              className="body-parts1"
              id="A05"
              value="left-foot"
              transform="matrix(1, 0, 0, 1, 108, 221)"
              strokeWidth="1.3"
              stroke="#20c8b4"
              strokeOpacity="1"
              onClick={onClick}
              fill="#fff"
              fillOpacity="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M24.8 -56.8 C24.8,-55.2 24.8,-53.6 24.8,-52 C24.8,-48 25.6,-44 25.6,-40 C25.6,-14.1 25.5,11.7 25.6,37.6 C25.6,43.8 26.4,49.8 26.4,56 C19.3,56 12.2,56 5.2,56 C0.7,56 -3.7,56.8 -8.2,56.8 C-13.9,56.8 -19.7,56.8 -25.5,56.8 C-24.7,52.9 -23,48.9 -23.2,44.8 C-23.3,41.6 -24.5,38.4 -25.1,35.2 C-26.1,30.3 -26.7,25 -26,20 C-25.1,13.3 -21.5,7.2 -17.9,1.6 C-17,0.2 -15.4,-1.7 -14.9,-3.3 C-14.3,-5 -14.5,-7 -14.5,-8.8 C-14.4,-24.8 -13.7,-40.8 -13.7,-56.8 C-0.9,-56.8 12,-56.8 24.8,-56.8 Z "
            />
          </g>

          <g className="one">
            <path
              onMouseOver={(evt) => showTooltip(evt, "Umbilical")}
              onMouseOut={() => hideTooltip()}
              className="body-parts1"
              id="A06"
              value="left-foot"
              transform="matrix(1, 0, 0, 1, 164.6, 221.8)"
              strokeWidth="1.3"
              stroke="#20c8b4"
              strokeOpacity="1"
              onClick={onClick}
              fill="#fff"
              fillOpacity="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M28.7 -55.2 C28.7,-44.5 28.7,-33.8 28.7,-23.1 C28.7,-18.6 29.5,-14.3 29.5,-9.8 C29.5,3.5 29.5,16.9 29.5,30.2 C29.5,34.4 30.3,38.5 30.3,42.7 C30.3,46.9 30.3,51.1 30.3,55.3 C10.4,55.3 -9.5,55.3 -29.5,55.3 C-29.5,46.9 -29.4,38.5 -29.5,30.2 C-29.5,26.2 -30.2,43 -30.2,18.4 C-30.3,-6.1 -30.2,-30.7 -30.2,-55.2 C-10.6,-55.2 9,-55.2 28.7,-55.2 Z "
            />
          </g>

          <g className="one">
            <path
              onMouseOver={(evt) => showTooltip(evt, "Left Lumbar")}
              onMouseOut={() => hideTooltip()}
              className="body-parts1"
              id="A07"
              value="left-foot"
              transform="matrix(1, 0, 0, 1, 222.4, 220)"
              strokeWidth="1.3"
              stroke="#20c8b4"
              strokeOpacity="1"
              onClick={onClick}
              fill="#fff"
              fillOpacity="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.6 -55 C17.7,-48.4 18.4,-41.8 18.4,-35.2 C18.4,-27 18.4,-18.9 18.4,-10.7 C18.4,-8.6 18.3,-6.3 18.8,-4.3 C19.6,-1.1 21.7,1.6 23.3,4.4 C24.7,6.8 26.1,9.7 27.2,12.3 C29.2,17 29.7,21.4 29.6,26.5 C29.5,35.8 26.7,41.3 26.4,44 C26.2,46.1 27.1,48.2 27.6,50.3 C28.1,52.5 28.1,53.6 28.1,55.8 C9.4,55.8 -9.4,55.8 -28.1,55.8 C-28.1,47.9 -28.1,40 -28.1,32.1 C-28.1,27.8 -28.8,23.7 -28.8,19.4 C-28.9,6 -28.8,-7.5 -28.8,-20.9 C-28.9,-25.5 -29.6,-29.9 -29.6,-34.4 C-29.6,-41.6 -29.6,-48.7 -29.6,-55.8 C-13.8,-55.8 1.8,-55 17.6,-55 Z "
            />
          </g>

          <g className="one">
            <path
              onMouseOver={(evt) => showTooltip(evt, "RLQ")}
              onMouseOut={() => hideTooltip()}
              className="body-parts1"
              id="A08"
              value="left-foot"
              transform="matrix(1, 0, 0, 1, 102.8, 322.6)"
              strokeWidth="1.3"
              stroke="#20c8b4"
              strokeOpacity="1"
              onClick={onClick}
              fill="#fff"
              fillOpacity="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M34 -45.4 C34,-24.1 34,-2.9 34,18.4 C34,22.4 34.8,26.3 34.8,30.4 C34.8,35.4 34.8,40.4 34.8,45.4 C11.6,45.4 -11.6,45.4 -34.8,45.4 C-34.2,41.5 -32.9,37.9 -32,34.1 C-29.9,25.4 -27.4,16.7 -25.8,7.9 C-25.2,4.8 -24.5,1.2 -24.5,-1.8 C-24.5,-4.1 -25.2,-6.3 -25.2,-8.6 C-25.2,-11.4 -24.7,-16.1 -24.3,-19.1 C-24.1,-22.1 -23.9,-25.2 -23.3,-28.1 C-22.3,-33.9 -20.2,-39.5 -19.8,-45.4 C-1.8,-45.4 16.1,-45.4 34,-45.4 Z "
            />
          </g>

          <g className="one">
            <path
              onMouseOver={(evt) => showTooltip(evt, "Pelvic/Lower Abdomen")}
              onMouseOut={() => hideTooltip()}
              className="body-parts1"
              id="A09"
              value="left-foot"
              transform="matrix(1, 0, 0, 1, 165.7, 322.2)"
              strokeWidth="1.3"
              stroke="#20c8b4"
              strokeOpacity="1"
              onClick={onClick}
              fill="#fff"
              fillOpacity="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M27.9 -45.7 C27.9,-37.7 27.9,-29.7 27.9,-21.7 C27.9,-17.4 28.7,-17 28.7,-9 C28.7,-1 28.7,7 28.7,15 C28.7,18.3 29.4,21.5 29.4,24.7 C29.4,27 28.8,29.2 28.8,31.5 C28.8,34.5 29.5,37.4 29.5,40.5 C29.5,42.2 29.5,44 29.5,45.8 C10.1,45.8 -9.3,45.8 -28.7,45.8 C-28.7,36.3 -28.7,26.7 -28.7,17.2 C-28.7,13 -29.5,8.8 -29.5,4.5 C-29.5,-12 -29.5,-28.5 -29.5,-45 C-25.4,-45 -21.3,-44.8 -17.2,-45 C-14.1,-45.2 -11.1,-45.7 -8,-45.7 C3.9,-45.8 15.9,-45.7 27.9,-45.7 Z "
            />
          </g>

          <g className="one">
            <path
              onMouseOver={(evt) => showTooltip(evt, "LLQ")}
              onMouseOut={() => hideTooltip()}
              className="body-parts1"
              id="A10"
              value="left-foot"
              transform="matrix(1, 0, 0, 1, 230.6, 322.2)"
              strokeWidth="1.3"
              stroke="#20c8b4"
              strokeOpacity="1"
              onClick={onClick}
              fill="#fff"
              fillOpacity="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M22.1 -45.7 C22.8,-37.2 25.7,-28.8 26.5,-20.2 C26.9,-16.5 27.3,-12.7 27.4,-9 C27.4,-6.5 27.1,-4 27.1,-1.5 C27.1,2 27.7,7.1 28.3,10.5 C29.8,18.3 31.8,26 33.6,33.7 C34.5,37.5 35.8,41.1 36.4,45 C32.4,45 28.3,44.8 24.4,45.1 C21.3,45.3 18.5,45.8 15.4,45.8 C-1.3,45.8 -18.1,45.8 -34.8,45.8 C-34.8,41.5 -34.8,37.2 -34.8,33 C-34.9,29.2 -35.6,25.6 -35.6,21.7 C-35.6,7.7 -35.6,-6.2 -35.6,-20.2 C-35.6,-24.3 -36.3,-28.2 -36.3,-32.2 C-36.4,-36.7 -36.3,-41.2 -36.3,-45.7 C-16.8,-45.7 2.6,-45.7 22.1,-45.7 Z "
            />{" "}
          </g>
        </g>
      </svg>
    </div>
  );
};

AbdomenSvg.propTypes = {
  /**
   * Function for showing and hiding abdomen svg component.
   */
  setShowAbdomen: PropTypes.func
}

export default AbdomenSvg;
