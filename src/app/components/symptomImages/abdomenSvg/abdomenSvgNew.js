import React from "react";
import "./abdomenSvg.scss";
import PropTypes from "prop-types";

const AbdomenSvgNew = () => {
  const onClick = (e) => {};

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
        width: "41%",
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
        viewBox="0 0 342 787"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs xmlns="http://www.w3.org/2000/svg">
          <filter
            x="-25.0%"
            y="-21.4%"
            width="149.9%"
            height="142.8%"
            filterUnits="objectBoundingBox"
            id="filter-1"
          >
            <feGaussianBlur stdDeviation="3.49553562" in="SourceGraphic" />
          </filter>
          <filter
            x="-25.0%"
            y="-28.3%"
            width="149.9%"
            height="156.7%"
            filterUnits="objectBoundingBox"
            id="filter-2"
          >
            <feGaussianBlur stdDeviation="3.49553562" in="SourceGraphic" />
          </filter>
          <filter
            x="-30.8%"
            y="-25.0%"
            width="161.7%"
            height="149.9%"
            filterUnits="objectBoundingBox"
            id="filter-3"
          >
            <feGaussianBlur stdDeviation="3.49553562" in="SourceGraphic" />
          </filter>
          <filter
            x="-30.8%"
            y="-25.0%"
            width="161.7%"
            height="149.9%"
            filterUnits="objectBoundingBox"
            id="filter-4"
          >
            <feGaussianBlur stdDeviation="3.49553562" in="SourceGraphic" />
          </filter>
          <filter
            x="-25.0%"
            y="-21.0%"
            width="149.9%"
            height="141.9%"
            filterUnits="objectBoundingBox"
            id="filter-5"
          >
            <feGaussianBlur stdDeviation="3.49553562" in="SourceGraphic" />
          </filter>
          <filter
            x="-30.8%"
            y="-29.1%"
            width="161.7%"
            height="158.3%"
            filterUnits="objectBoundingBox"
            id="filter-6"
          >
            <feGaussianBlur stdDeviation="3.49553562" in="SourceGraphic" />
          </filter>
          <filter
            x="-30.8%"
            y="-29.1%"
            width="161.7%"
            height="158.3%"
            filterUnits="objectBoundingBox"
            id="filter-7"
          >
            <feGaussianBlur stdDeviation="3.49553562" in="SourceGraphic" />
          </filter>
          <filter
            x="-25.6%"
            y="-21.8%"
            width="151.2%"
            height="143.7%"
            filterUnits="objectBoundingBox"
            id="filter-8"
          >
            <feGaussianBlur stdDeviation="3.49553562" in="SourceGraphic" />
          </filter>
          <filter
            x="-26.2%"
            y="-21.8%"
            width="152.4%"
            height="143.7%"
            filterUnits="objectBoundingBox"
            id="filter-9"
          >
            <feGaussianBlur stdDeviation="3.49553562" in="SourceGraphic" />
          </filter>

          <filter
            x="-24.8%"
            y="-21.6%"
            width="149.6%"
            height="143.2%"
            filterUnits="objectBoundingBox"
            id="filter-11"
          >
            <feGaussianBlur stdDeviation="3.88392857" in="SourceGraphic" />
          </filter>
          <filter
            x="-24.8%"
            y="-28.4%"
            width="149.6%"
            height="156.8%"
            filterUnits="objectBoundingBox"
            id="filter-21"
          >
            <feGaussianBlur stdDeviation="3.88392857" in="SourceGraphic" />
          </filter>
          <filter
            x="-30.5%"
            y="-25.1%"
            width="161.0%"
            height="150.2%"
            filterUnits="objectBoundingBox"
            id="filter-31"
          >
            <feGaussianBlur stdDeviation="3.88392857" in="SourceGraphic" />
          </filter>
          <filter
            x="-30.5%"
            y="-25.1%"
            width="161.0%"
            height="150.2%"
            filterUnits="objectBoundingBox"
            id="filter-41"
          >
            <feGaussianBlur stdDeviation="3.88392857" in="SourceGraphic" />
          </filter>
          <filter
            x="-24.9%"
            y="-21.0%"
            width="149.8%"
            height="142.1%"
            filterUnits="objectBoundingBox"
            id="filter-51"
          >
            <feGaussianBlur stdDeviation="3.88392857" in="SourceGraphic" />
          </filter>
          <filter
            x="-30.7%"
            y="-29.5%"
            width="161.4%"
            height="159.0%"
            filterUnits="objectBoundingBox"
            id="filter-61"
          >
            <feGaussianBlur stdDeviation="3.88392857" in="SourceGraphic" />
          </filter>
          <filter
            x="-30.7%"
            y="-29.5%"
            width="161.4%"
            height="159.0%"
            filterUnits="objectBoundingBox"
            id="filter-71"
          >
            <feGaussianBlur stdDeviation="3.88392857" in="SourceGraphic" />
          </filter>
          <filter
            x="-25.7%"
            y="-21.7%"
            width="151.3%"
            height="143.4%"
            filterUnits="objectBoundingBox"
            id="filter-81"
          >
            <feGaussianBlur stdDeviation="3.88392857" in="SourceGraphic" />
          </filter>
          <filter
            x="-26.2%"
            y="-21.7%"
            width="152.3%"
            height="143.4%"
            filterUnits="objectBoundingBox"
            id="filter-91"
          >
            <feGaussianBlur stdDeviation="3.88392857" in="SourceGraphic" />
          </filter>
        </defs>

        <g
          xmlns="http://www.w3.org/2000/svg"
          id="Group"
          transform="translate(2.000000, 2.000000)"
          stroke="#20C8B4"
          strokeWidth="2.3"
          strokeOpacity="1"
          fill="none"
          fillOpacity="0"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            xmlns="http://www.w3.org/2000/svg"
            id="Combined_Shape"
            data-name="Combined Shape"
            d="M182.649,780.965c-2.925-1.665-3.416-5.37-3.609-8.044-.408-5.663,3.118-10.475,3.118-13.118,0-3.4-.888-10.791,0-17.745.636-4.982,2.119-9.238,2.77-15.15,1.56-14.165-8.887-71.471-8.239-99.176s7.49-32.221,8.883-46.263-.424-30.51-1.229-34.183-4.53-11.657-5.3-22.874c-3.756-54.459-1.86-94.227-4.184-97.023a32.1,32.1,0,0,0-6.292-5.241,32.1,32.1,0,0,0-6.292,5.241c-2.325,2.8-.428,42.564-4.185,97.023-.774,11.218-4.5,19.2-5.3,22.874s-2.624,20.14-1.23,34.183,8.235,18.558,8.884,46.263-9.8,85.011-8.239,99.176c.651,5.911,2.133,10.167,2.769,15.15.888,6.954,0,14.344,0,17.745,0,2.643,3.526,7.456,3.118,13.118-.193,2.674-.684,6.379-3.608,8.044s-46.084.5-47.777.5c-.927,0-3.506-3.29-2.011-6.794,1.236-2.9,6.045-5.476,9.837-10.546,2.949-3.945,9.786-11.711,10.782-15.756.259-1.054-.271-4.261.456-6.8,1.136-3.964,6.14-12.884,6.14-16.659s-18.9-79.946-23.508-102.935,8.632-39.965,9.294-45.04,0-24.751,0-24.751-19.1-25.411-23.238-73.831-1.213-83.02-1.213-83.02,2.168-25.38,6.015-42.713S104.823,333.493,107.7,325s0-32.882-1-54.179a91.215,91.215,0,0,0-10.646-37.8s-6.3,28.021-8.858,43.74S85.608,298.6,82.33,308.209s-29.474,66.626-30.468,72.167.535,18.04-.941,30.432-6.152,29.134-7.668,30.533a39.086,39.086,0,0,0-3.719,4.456s-2.768,3.026-4.765,4.838-6.3,2.517-6.3,2.517a24.115,24.115,0,0,1-6.067-.555,12.171,12.171,0,0,1-4.223-2.892,41.268,41.268,0,0,1-3.258-5.135c-1.183-2.364,0-22.785,0-22.785s2.348-22.031,1.3-22.493-10.089,6.876-10.089,6.876-6.869,2.273-6.044.88,15.035-20.408,18.095-23.119,11.7-7.2,11.7-7.2,3.211-14.671,3.916-21.55c3.68-35.879,4.482-57.506,5.74-63.4,2.249-10.542,8.745-20.947,8.745-20.947s.179-13.023,1.157-19.24,5-26.481,5.765-31.07-.769-17.753.769-30.285,3.783-23.076,7.962-29.667,12.123-14.7,22.122-17.777,21.19-2.671,30.856-5.228,26.394-15.918,26.394-15.918,3.044-20.026,1.522-22.467-3.164-3.127-5.207-6.134-1.745-15.08-1.745-15.08-3.935-3.42-6.4-5.2-4.632-16.393-4.026-19.208,5.932-4.647,5.932-4.647-1.721-11.233-.912-17.966.912-15.584,12.356-23.771A38.821,38.821,0,0,1,168.763.144,37.918,37.918,0,0,1,192.3,7.171c11.443,8.187,11.547,17.038,12.356,23.771s-.913,17.966-.913,17.966,5.326,1.832,5.932,4.647-1.562,17.431-4.026,19.208-6.4,5.2-6.4,5.2.3,12.073-1.745,15.08-3.686,3.693-5.207,6.134,1.522,22.467,1.522,22.467S210.547,135,220.214,137.559s20.857,2.151,30.857,5.228,17.943,11.186,22.123,17.777,6.424,17.134,7.961,29.667,0,25.7.77,30.285,4.787,24.853,5.765,31.07,1.156,19.24,1.156,19.24,6.5,10.4,8.745,20.947c1.259,5.9,2.061,27.524,5.74,63.4.706,6.879,3.917,21.55,3.917,21.55s8.635,4.492,11.7,7.2,17.269,21.726,18.094,23.119-6.043-.88-6.043-.88-9.039-7.339-10.09-6.876,1.3,22.493,1.3,22.493-.113,18.422-1.3,20.786a65.916,65.916,0,0,1-3.924,6.249,6.881,6.881,0,0,1-3.406,3.071,24.7,24.7,0,0,1-5.666.706s-3.7-.684-5.7-2.5-4.163-4.3-4.163-4.3-2.66-3.056-4.177-4.456-6.19-18.143-7.667-30.533.053-24.89-.941-30.432-27.189-62.555-30.468-72.167-2.308-15.721-4.867-31.441-8.859-43.74-8.859-43.74a91.231,91.231,0,0,0-10.646,37.8c-1,21.3-3.876,45.691-1,54.179s4.6,10.281,8.444,27.614,6.015,42.713,6.015,42.713,2.93,34.6-1.212,83.02-23.239,73.831-23.239,73.831-.662,19.677,0,24.751,13.907,22.05,9.3,45.04-23.508,99.16-23.508,102.935,5,12.695,6.139,16.659c.728,2.541.2,5.747.457,6.8,1,4.045,7.833,11.812,10.782,15.756,3.791,5.071,8.6,7.651,9.837,10.546,1.495,3.5-1.084,6.794-2.012,6.794-.988,0-16.1.4-29.088.4C192.063,781.861,183.867,781.659,182.649,780.965Z"
            transform="translate(2.321 2.453)"
            fill="none"
            stroke="#20c8b4"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="4"
          />

          <path
            xmlns="http://www.w3.org/2000/svg"
            id="Path_10"
            data-name="Path 10"
            d="M19.921,0s8.846,21.369,4.071,38.1S0,59.16,0,59.16"
            transform="translate(217.334 175.963)"
            fill="none"
            stroke="#20c8b4"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="3"
          />
          <path
            xmlns="http://www.w3.org/2000/svg"
            id="Path_11"
            data-name="Path 11"
            d="M1.592,36.787A61.957,61.957,0,0,1,0,25.944C0,21.833,1.265,0,1.265,0"
            transform="translate(241.873 201.104)"
            fill="none"
            stroke="#20c8b4"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="3"
          />
          <path
            xmlns="http://www.w3.org/2000/svg"
            id="Path_10_Copy"
            data-name="Path 10 Copy"
            d="M-19.921,0s-8.846,21.369-4.071,38.1S0,59.16,0,59.16"
            transform="translate(123 175.963)"
            fill="none"
            stroke="#20c8b4"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="3"
          />
          <path
            xmlns="http://www.w3.org/2000/svg"
            id="Path_11_Copy"
            data-name="Path 11 Copy"
            d="M-1.592,36.787A61.957,61.957,0,0,0,0,25.944C0,21.833-1.265,0-1.265,0"
            transform="translate(98.466 201.104)"
            fill="none"
            stroke="#20c8b4"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="3"
          />
          <path
            xmlns="http://www.w3.org/2000/svg"
            id="Path_12"
            data-name="Path 12"
            d="M0,0S16.867,45.5,23.938,45.5,46.835,0,46.835,0"
            transform="translate(147.719 115.378)"
            fill="none"
            stroke="#20c8b4"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="3"
          />
          <path
            xmlns="http://www.w3.org/2000/svg"
            id="Path_13"
            data-name="Path 13"
            d="M0,0S5.667,2.528,10.831,2.528c4.253,0,8.759-.834,19.465,0C33.83,2.8,41.842,5.055,41.842,5.055"
            transform="translate(115.515 148.801)"
            fill="none"
            stroke="#20c8b4"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="3"
          />
          <path
            xmlns="http://www.w3.org/2000/svg"
            id="Path_13_Copy"
            data-name="Path 13 Copy"
            d="M0,0S-5.667,2.528-10.831,2.528c-4.253,0-8.759-.834-19.465,0C-33.83,2.8-41.842,5.055-41.842,5.055"
            transform="translate(228.357 148.801)"
            fill="none"
            stroke="#20c8b4"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="3"
          />
          <path
            xmlns="http://www.w3.org/2000/svg"
            id="Path_14_Copy"
            data-name="Path 14 Copy"
            d="M0,0S-1.48,10.8-6.869,12.894s-12.947-3.48-12.947-3.48"
            transform="translate(146.606 572.99)"
            fill="none"
            stroke="#20c8b4"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="3"
          />
          <path
            xmlns="http://www.w3.org/2000/svg"
            id="Path_15"
            data-name="Path 15"
            d="M0,30.673S6.656,19.826,10.5,15.336,26.278,0,26.278,0"
            transform="translate(204.577 326.651)"
            fill="none"
            stroke="#20c8b4"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="3"
          />
          <path
            xmlns="http://www.w3.org/2000/svg"
            id="Path_15_Copy"
            data-name="Path 15 Copy"
            d="M0,30.673S-6.656,19.826-10.5,15.336-26.278,0-26.278,0"
            transform="translate(135.855 326.651)"
            fill="none"
            stroke="#20c8b4"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="3"
          />

          <path
            xmlns="http://www.w3.org/2000/svg"
            id="Path_16"
            data-name="Path 16"
            d="M0,29.7s3.656-3.5,4.289-6.924S5.487,0,5.487,0"
            transform="translate(177.746 399.102)"
            fill="none"
            stroke="#20c8b4"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="3"
          />

          <path
            xmlns="http://www.w3.org/2000/svg"
            id="Path_16_Copy"
            data-name="Path 16 Copy"
            d="M0,29.7s-3.656-3.5-4.289-6.924S-5.487,0-5.487,0"
            transform="translate(164.232 399.102)"
            fill="none"
            stroke="#20c8b4"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="3"
          />
          <path
            xmlns="http://www.w3.org/2000/svg"
            id="Path_17"
            data-name="Path 17"
            d="M0,0S4.261,3.622,9.366,3.622,18.732,0,18.732,0"
            transform="translate(161.039 84.197)"
            fill="none"
            stroke="#20c8b4"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="3"
          />
          <path
            xmlns="http://www.w3.org/2000/svg"
            id="Path_18"
            data-name="Path 18"
            d="M0,4.2S.46,0,5.947,0s6.947,5.2,6.947,5.2"
            transform="translate(150.189 52.113)"
            fill="none"
            stroke="#20c8b4"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="2"
          />
          <path
            xmlns="http://www.w3.org/2000/svg"
            id="Path_18_Copy"
            data-name="Path 18 Copy"
            d="M0,5.2S1.46,0,6.947,0s5.947,4.2,5.947,4.2"
            transform="translate(178.189 52.113)"
            fill="none"
            stroke="#20c8b4"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="2"
          />
          <path
            xmlns="http://www.w3.org/2000/svg"
            id="Oval"
            fill-opacity="1"
            d="M4.5,7C6.985,7,9,3.5,9,3.5S6.985,0,4.5,0,0,3.5,0,3.5,2.015,7,4.5,7Z"
            transform="translate(152 52)"
            fill="#20c8b4"
          />
          <path
            xmlns="http://www.w3.org/2000/svg"
            id="Oval_Copy"
            fill-opacity="1"
            data-name="Oval Copy"
            d="M4.5,7C6.985,7,9,3.5,9,3.5S6.985,0,4.5,0,0,3.5,0,3.5,2.015,7,4.5,7Z"
            transform="translate(180 52)"
            fill="#20c8b4"
          />
          <path
            xmlns="http://www.w3.org/2000/svg"
            id="Path_19"
            data-name="Path 19"
            d="M0,0S1.482,1.9,5.406,1.9A8.517,8.517,0,0,0,11.24,0"
            transform="translate(165.122 74.459)"
            fill="none"
            stroke="#20c8b4"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="2"
          />
          <path
            xmlns="http://www.w3.org/2000/svg"
            id="Path_20"
            data-name="Path 20"
            d="M0,3.045A19.189,19.189,0,0,1,6.178.5a17.452,17.452,0,0,1,7.8,0"
            transform="translate(176.932 46.362)"
            fill="none"
            stroke="#20c8b4"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="2"
          />
          <path
            xmlns="http://www.w3.org/2000/svg"
            id="Path_20_Copy"
            data-name="Path 20 Copy"
            d="M0,3.045A19.189,19.189,0,0,0-6.178.5a17.452,17.452,0,0,0-7.8,0"
            transform="translate(164.905 46.362)"
            fill="none"
            stroke="#20c8b4"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="2"
          />
          <path
            xmlns="http://www.w3.org/2000/svg"
            id="Path_14"
            data-name="Path 14"
            d="M0,0S1.48,10.8,6.869,12.894s12.947-3.48,12.947-3.48"
            transform="translate(194.79 572.99)"
            fill="none"
            stroke="#20c8b4"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="3"
          />
        </g>

        <g>
          <g
            className="abdomen"
            onMouseOver={(evt) => showTooltip(evt, "RUQ")}
            onMouseOut={() => hideTooltip()}
          >
            <path
              className="abdomen-parts"
              d="M136.80634,290 L105,290 L105,242 L145,242 C142.916134,246.278341 141.01342,252.273654 139.291859,259.985938 C138.239227,264.701539 138.060327,270.613201 137.65386,277.040504 C137.481658,279.763465 137.199151,284.083297 136.80634,290 Z"
              id="Path-61-Copy"
              fill="#20C8B4"
              opacity="0.303272192"
              filter="url(#filter-9)"
              transform="translate(125.000000, 266.000000) scale(-1, 1) translate(-125.000000, -266.000000) "
            />
            <path
              className="abdomen-parts-show"
              xmlns="http://www.w3.org/2000/svg"
              d="M138.043892,292.951375 L102.645139,292.951375 L102.645139,239.209017 L147.162996,239.209017 C144.843765,243.999186 142.726146,250.711733 140.81014,259.346657 C139.638618,264.626397 139.439511,271.245286 138.987135,278.441502 C138.795484,281.490218 138.481069,286.326842 138.043892,292.951375 Z"
              id="Path-61-Copy"
              fill="#20C8B4"
              opacity="0.707540761"
              filter="url(#filter-91)"
              transform="translate(124.904068, 266.080196) scale(-1, 1) translate(-124.904068, -266.080196) "
            />
          </g>

          <g
            className="abdomen"
            onMouseOver={(evt) => showTooltip(evt, "Epigastric")}
            onMouseOut={() => hideTooltip()}
          >
            <rect
              className="abdomen-parts"
              xmlns="http://www.w3.org/2000/svg"
              id="Rectangle-2"
              fill="#20C8B4"
              opacity="0.303272192"
              filter="url(#filter-1)"
              x="149"
              y="242"
              width="42"
              height="49"
            />
            <rect
              className="abdomen-parts-show"
              xmlns="http://www.w3.org/2000/svg"
              id="Rectangle-2"
              fill="#20C8B4"
              opacity="0.707540761"
              filter="url(#filter-1)"
              x="147"
              y="239"
              width="47"
              height="54"
            />
          </g>

          <g
            className="abdomen"
            onMouseOver={(evt) => showTooltip(evt, "LUQ")}
            onMouseOut={() => hideTooltip()}
          >
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="M228.237355,290 L196,290 L196,242 L237,242 C234.611014,246.284677 232.551618,252.283158 230.821811,259.995443 C229.764137,264.711044 229.540441,270.522316 229.132028,276.949619 C228.959001,279.67258 228.660777,284.022707 228.237355,290 Z"
              id="Path-61"
              fill="#20C8B4"
              opacity="0.303272192"
              filter="url(#filter-8)"
              className="abdomen-parts"
            />

            <path
              className="abdomen-parts-show"
              xmlns="http://www.w3.org/2000/svg"
              d="M229.457126,292.951375 L193.749692,292.951375 L193.749692,239.209017 L239.162996,239.209017 C236.516856,244.006281 234.235783,250.722375 232.319777,259.357299 C231.148254,264.637039 230.900478,271.143528 230.448103,278.339744 C230.256451,281.38846 229.926126,286.259003 229.457126,292.951375 Z"
              id="Path-61"
              fill="#20C8B4"
              opacity="0.707540761"
              filter="url(#filter-81)"
            />
          </g>

          <g
            className="abdomen"
            onMouseOver={(evt) => showTooltip(evt, "Right Lumbar")}
            onMouseOut={() => hideTooltip()}
          >
            <path
              className="abdomen-parts"
              xmlns="http://www.w3.org/2000/svg"
              d="M144.181053,295 L112,295 L112,331 L146,331 C144.422341,327.686432 143.537547,324.130351 143.345618,320.331757 C143.153689,316.533162 143.432167,308.089244 144.181053,295 Z"
              id="Path-60-Copy"
              fill="#20C8B4"
              opacity="0.303272192"
              filter="url(#filter-7)"
              transform="translate(129.000000, 313.000000) scale(-1, 1) translate(-129.000000, -313.000000) "
            />

            <path
              className="abdomen-parts-show"
              xmlns="http://www.w3.org/2000/svg"
              d="M145.60501,293.137394 L109.69175,293.137394 L109.69175,332.645198 L147.63491,332.645198 C145.874281,329.00876 144.886873,325.106178 144.672685,320.937452 C144.458497,316.768726 144.769272,307.50204 145.60501,293.137394 Z"
              id="Path-60-Copy"
              fill="#20C8B4"
              opacity="0.707540761"
              filter="url(#filter-71)"
              transform="translate(128.663330, 312.891296) scale(-1, 1) translate(-128.663330, -312.891296) "
            />
          </g>

          <g
            className="abdomen"
            onMouseOver={(evt) => showTooltip(evt, "Umbilical")}
            onMouseOut={() => hideTooltip()}
          >
            <rect
              className="abdomen-parts"
              xmlns="http://www.w3.org/2000/svg"
              id="Rectangle"
              fill="#20C8B4"
              opacity="0.303272192"
              filter="url(#filter-2)"
              x="149"
              y="295"
              width="42"
              height="37"
            />

            <rect
              className="abdomen-parts-show"
              xmlns="http://www.w3.org/2000/svg"
              id="Rectangle"
              fill="#20C8B4"
              opacity="0.707540761"
              filter="url(#filter-21)"
              x="147"
              y="293"
              width="47"
              height="41"
            />
          </g>

          <g
            className="abdomen"
            onMouseOver={(evt) => showTooltip(evt, "Left Lumbar")}
            onMouseOut={() => hideTooltip()}
          >
            <path
              className="abdomen-parts"
              xmlns="http://www.w3.org/2000/svg"
              d="M228.181053,295 L196,295 L196,331 L230,331 C228.422341,327.686432 227.537547,324.130351 227.345618,320.331757 C227.153689,316.533162 227.432167,308.089244 228.181053,295 Z"
              id="Path-60"
              fill="#20C8B4"
              opacity="0.303272192"
              filter="url(#filter-6)"
            />

            <path
              className="abdomen-parts-show"
              xmlns="http://www.w3.org/2000/svg"
              d="M229.60501,293.137394 L193.69175,293.137394 L193.69175,332.645198 L231.63491,332.645198 C229.874281,329.00876 228.886873,325.106178 228.672685,320.937452 C228.458497,316.768726 228.769272,307.50204 229.60501,293.137394 Z"
              id="Path-60"
              fill="#20C8B4"
              opacity="0.707540761"
              filter="url(#filter-61)"
            />
          </g>

          <g
            className="abdomen"
            onMouseOver={(evt) => showTooltip(evt, "RLQ")}
            onMouseOut={() => hideTooltip()}
          >
            <path
              className="abdomen-parts"
              xmlns="http://www.w3.org/2000/svg"
              d="M111,335 L145,335 L145,377 C137.751255,368.196806 131.745499,361.452883 126.982732,356.76823 C124.254773,354.085012 117.093229,344.655552 115.387818,342.189772 C114.196759,340.467672 112.734153,338.071082 111,335 Z"
              id="Path-58"
              fill="#20C8B4"
              opacity="0.303272192"
              filter="url(#filter-3)"
            />

            <path
              className="abdomen-parts-show"
              xmlns="http://www.w3.org/2000/svg"
              d="M109.499891,332.92715 L147.711696,332.92715 L147.711696,379.319305 C139.565001,369.595516 132.815272,362.146346 127.462509,356.971795 C124.39662,354.00798 116.347928,343.592432 114.431256,340.868794 C113.092653,338.966605 111.448865,336.31939 109.499891,332.92715 Z"
              id="Path-58"
              fill="#20C8B4"
              opacity="0.707540761"
              filter="url(#filter-31)"
            />
          </g>

          <g
            className="abdomen"
            onMouseOver={(evt) => showTooltip(evt, "Pelvic/Lower Abdomen")}
            onMouseOut={() => hideTooltip()}
          >
            <path
              className="abdomen-parts"
              xmlns="http://www.w3.org/2000/svg"
              d="M150,336 L192,336 L192,376.926036 C188.693271,382.975345 181.693271,386 171,386 C160.306729,386 153.306729,382.975345 150,376.926036 L150,336 Z"
              id="Path-59"
              fill="#20C8B4"
              opacity="0.303272192"
              filter="url(#filter-5)"
            />

            <path
              className="abdomen-parts-show"
              xmlns="http://www.w3.org/2000/svg"
              d="M147.723372,333.033975 L194.498536,333.033975 L194.498536,378.383934 C190.81585,385.087147 183.019989,388.438753 171.110954,388.438753 C159.201918,388.438753 151.406058,385.087147 147.723372,378.383934 L147.723372,333.033975 Z"
              id="Path-59"
              fill="#20C8B4"
              opacity="0.707540761"
              filter="url(#filter-51)"
            />
          </g>

          <g
            className="abdomen"
            onMouseOver={(evt) => showTooltip(evt, "LLQ")}
            onMouseOut={() => hideTooltip()}
          >
            <path
              className="abdomen-parts"
              xmlns="http://www.w3.org/2000/svg"
              d="M196,335 L230,335 L230,377 C222.752043,368.196806 216.746939,361.452883 211.984689,356.76823 C209.257026,354.085012 202.09626,344.655552 200.391034,342.189772 C199.200104,340.467672 197.736426,338.071082 196,335 Z"
              id="Path-58-Copy"
              fill="#20C8B4"
              opacity="0.303272192"
              filter="url(#filter-4)"
              transform="translate(213.000000, 356.000000) scale(-1, 1) translate(-213.000000, -356.000000) "
            />

            <path
              className="abdomen-parts-show"
              xmlns="http://www.w3.org/2000/svg"
              d="M194.380103,332.92715 L232.596058,332.92715 L232.596058,379.319305 C224.449364,369.595516 217.699635,362.146346 212.346872,356.971795 C209.280983,354.00798 201.232291,343.592432 199.315619,340.868794 C197.977016,338.966605 196.331844,336.31939 194.380103,332.92715 Z"
              id="Path-58-Copy"
              fill="#20C8B4"
              opacity="0.707540761"
              filter="url(#filter-41)"
              transform="translate(213.488081, 356.123228) scale(-1, 1) translate(-213.488081, -356.123228) "
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

AbdomenSvgNew.propTypes = {
  /**
   * Function for showing and hiding abdomen svg component.
   */
  setShowAbdomen: PropTypes.func,
};

export default AbdomenSvgNew;
