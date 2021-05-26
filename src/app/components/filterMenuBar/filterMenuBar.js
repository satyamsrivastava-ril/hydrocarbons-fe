import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import "primeicons/primeicons.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import "./filterMenuBar.scss";
import ImageComponent from "../image/imageComponent";
import DropDownComponent from "../dropDown/dropDown";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../../utils/propsMapper";
import { Accordion, AccordionTab } from 'primereact/accordion';

const FilterMenuBar = (props) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [searchArticle, setSearchArticle] = useState("");

  const [status, setStatus] = useState("STATUS");
  const [timeframe, setTimeframe] = useState("TIMEFRAME");
  const [category, setCategory] = useState("CATEGORY");

  const getCategoryOptions=[
	{ name: (<div  class="mb-3 d-flex align-items-center">
    <svg xmlns="http://www.w3.org/2000/svg" className="mr-2" width="13.433" height="17.831" viewBox="0 0 13.433 17.831" class="mr-2"><g id="Food" transform="translate(-18.2 -2)"><g id="Group_119" data-name="Group 119" transform="translate(18.2 2)"><path id="Path_89" data-name="Path 89" d="M30.924,14.8,27.6,18.054,34.905,20.5l2.268-3.6Z" transform="translate(-27.185 -12.411)"></path><path id="Path_90" data-name="Path 90" d="M81.853,29.969,79.9,29l-1.7,2.7Z" transform="translate(-69.025 -24.153)"></path><path id="Path_91" data-name="Path 91" d="M54.945,3.06,48.8,1V2.523l6.145,2.06Z" transform="translate(-44.715 -1)"></path><path id="Path_92" data-name="Path 92" d="M25.2,47.264l7.461,2.493V40.91L25.2,38.4Z" transform="translate(-25.2 -31.926)"></path><path id="Path_93" data-name="Path 93" d="M73.7,50.166l5.037-2.372V39L73.7,41.372Z" transform="translate(-65.304 -32.422)"></path></g></g></svg>
   <span> {"Food"}</span></div>), value: "Food" },
	{ name: (<div class="mb-3 d-flex align-items-center">
    <svg xmlns="http://www.w3.org/2000/svg" className="mr-2" width="16.438" height="13.698" viewBox="0 0 16.438 13.698" class="mr-2"><g id="Clothes" transform="translate(-18 -18)"><g id="Glyph_ComPath" data-name="Glyph ComPath"><path id="Path_88" data-name="Path 88" d="M34.438,18.548v4.109a.548.548,0,0,1-.429.535l-2.037.453V31.7H20.466V23.645l-2.037-.453A.548.548,0,0,1,18,22.657V18.548A.548.548,0,0,1,18.548,18h4.931a.548.548,0,0,1,.548.548,2.192,2.192,0,1,0,4.383,0A.548.548,0,0,1,28.959,18H33.89A.548.548,0,0,1,34.438,18.548Z"></path></g></g></svg>
  <span> {"Cloth"}</span> </div>), value: "Cloth" },
  ];

  const onSearchUpdate = (value, tag) => {
    switch (tag) {
      case "Search":
        setSearchArticle(value);
        props.getArticleList({
          articleId: value.split(","),
          category: category,
          status: status,
          dateRange: "",
        });
        break;
      case "Category":
        setCategory(value);
        props.getArticleList({
          articleId: searchArticle.split(","),
          category: value || "",
          status: status,
          dateRange: "",
        });
        break;
      case "Status":
        setStatus(value);
        props.getArticleList({
          articleId: searchArticle.split(","),
          category: category,
          status: value || "",
          dateRange: "",
        });
        break;
      case "StartDate":
        setStartDate(value);
        props.getArticleList({
          articleId: searchArticle.split(","),
          category: category,
          status: status,
          dateRange: "",
        });
        break;
      case "EndDate":
        setEndDate(value);
        props.getArticleList({
          articleId: searchArticle.split(","),
          category: category,
          status: status,
          dateRange: "",
        });
        break;
      case "TimeFrame":
        setTimeframe(value);
        break;
      default:
        break;
    }
  };

  const getStatusOptions = [
      {
        name: (
          <div className="mb-3 d-flex align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22.255"
              height="22.255"
              viewBox="0 0 22.255 22.255"
              className="mr-2"
            >
              <g
                id="Icon_Circle"
                data-name="Icon Circle"
                transform="translate(-17.001 -17.001)"
              >
                <g id="Base" transform="translate(17.001 17.001)">
                  <circle
                    id="Oval"
                    cx="11.127"
                    cy="11.127"
                    r="11.127"
                    fill="#7ad400"
                  />
                </g>
                <g
                  id="Element_Icon_Check"
                  data-name="Element/Icon/Check"
                  transform="translate(23.704 24.589)"
                >
                  <path
                    id="_Icon_color"
                    data-name="🎨 Icon color"
                    d="M8.606,1.5,3.54,6.823a.805.805,0,0,1-1.18,0L.244,4.6a.911.911,0,0,1,0-1.241.806.806,0,0,1,1.18,0l1.526,1.6L7.426.257a.805.805,0,0,1,1.18,0,.908.908,0,0,1,0,1.24"
                    fill="#fff"
                    stroke="#fff"
                    stroke-miterlimit="10"
                    stroke-width="1"
                  />
                </g>
              </g>
            </svg>
            <span style={{ color: "#79D400" }}>Approved</span>
          </div>
        ),
        value: "Approved",
      },
      {
        name: (
          <div className="mb-3 d-flex align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22.255"
              height="22.255"
              viewBox="0 0 22.255 22.255"
              className="mr-2"
            >
              <g
                id="Icon_Circle"
                data-name="Icon Circle"
                transform="translate(-17.001 -17.001)"
              >
                <g id="Base" transform="translate(17.001 17.001)">
                  <circle
                    id="Oval"
                    cx="11.127"
                    cy="11.127"
                    r="11.127"
                    fill="#00c1d4"
                  />
                </g>
                <g
                  id="Element_Icon_Check"
                  data-name="Element/Icon/Check"
                  transform="translate(23.704 24.589)"
                >
                  <path
                    id="_Icon_color"
                    data-name="🎨 Icon color"
                    d="M8.606,1.5,3.54,6.823a.805.805,0,0,1-1.18,0L.244,4.6a.911.911,0,0,1,0-1.241.806.806,0,0,1,1.18,0l1.526,1.6L7.426.257a.805.805,0,0,1,1.18,0,.908.908,0,0,1,0,1.24"
                    fill="#fff"
                    stroke="#fff"
                    stroke-miterlimit="10"
                    stroke-width="1"
                  />
                </g>
              </g>
            </svg>
            <span style={{ color: "#00C1D4" }}>Content Extracted</span>
          </div>
        ),
        value: "Content Extracted",
      },
      {
        name: (
          <div className="mb-3 d-flex align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22.255"
              height="22.255"
              viewBox="0 0 22.255 22.255"
              className="mr-2"
            >
              <g
                id="Icon_Circle"
                data-name="Icon Circle"
                transform="translate(-17.001 -17.001)"
              >
                <g id="Base" transform="translate(17.001 17.001)">
                  <circle
                    id="Oval"
                    cx="11.127"
                    cy="11.127"
                    r="11.127"
                    fill="#ff9300"
                  />
                </g>
                <g
                  id="Element_Icon_Check"
                  data-name="Element/Icon/Check"
                  transform="translate(23.704 24.589)"
                >
                  <path
                    id="_Icon_color"
                    data-name="🎨 Icon color"
                    d="M8.606,1.5,3.54,6.823a.805.805,0,0,1-1.18,0L.244,4.6a.911.911,0,0,1,0-1.241.806.806,0,0,1,1.18,0l1.526,1.6L7.426.257a.805.805,0,0,1,1.18,0,.908.908,0,0,1,0,1.24"
                    fill="#fff"
                    stroke="#fff"
                    stroke-miterlimit="10"
                    stroke-width="1"
                    className="mr-2"
                  />
                </g>
              </g>
            </svg>
            <span style={{ color: "#FF9300" }}>Pending</span>
          </div>
        ),
        value: "Pending",
      },
      {
        name: (
          <div className="mb-3 d-flex align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22.255"
              height="22.255"
              viewBox="0 0 22.255 22.255"
              className="mr-2"
            >
              <g
                id="Icon_Circle"
                data-name="Icon Circle"
                transform="translate(-41.397 -17.001)"
              >
                <g id="Base" transform="translate(41.397 17.001)">
                  <circle
                    id="Oval"
                    cx="11.127"
                    cy="11.127"
                    r="11.127"
                    fill="#d80e0e"
                  />
                  <g
                    id="Group_113"
                    data-name="Group 113"
                    transform="translate(7.833 7.672)"
                  >
                    <g
                      id="Element_Icon_Check"
                      data-name="Element/Icon/Check"
                      transform="translate(0 0)"
                    >
                      <path
                        id="_Icon_color"
                        data-name="🎨 Icon color"
                        d="M3.085,1.462l4.944,5.2a.786.786,0,0,0,1.152,0L9.236,6.6c.7-.813-.666-1.689-.631-1.757L4.237.251a.786.786,0,0,0-1.152,0,.887.887,0,0,0,0,1.211"
                        transform="translate(-2.846 0)"
                        fill="#fff"
                        stroke="#fff"
                        stroke-miterlimit="10"
                        stroke-width="1"
                      />
                    </g>
                    <g id="Element_Icon_Check-2" data-name="Element/Icon/Check">
                      <path
                        id="_Icon_color-2"
                        data-name="🎨 Icon color"
                        d="M9.2,1.462,4.253,6.66a.786.786,0,0,1-1.152,0L3.046,6.6c-.7-.813.666-1.689.631-1.757L8.045.251A.786.786,0,0,1,9.2.251a.887.887,0,0,1,0,1.211"
                        transform="translate(-2.846 0)"
                        fill="#fff"
                        stroke="#fff"
                        stroke-miterlimit="10"
                        stroke-width="1"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </svg>

            <span style={{ color: "#D80E0E" }}>Rejected</span>
          </div>
        ),
        value: "Rejected",
      },
    ];

  const getTimeframeOptions = [
      {
        name: (
          <div className="mb-3 d-flex align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14.131"
              height="15.59"
              viewBox="0 0 14.131 15.59"
              className="mr-2"
            >
              <g id="noun_hourglass_188242" transform="translate(-9.5 -5.319)">
                <g
                  id="Group_141"
                  data-name="Group 141"
                  transform="translate(9.5 5.319)"
                >
                  <path
                    id="Path_27"
                    data-name="Path 27"
                    d="M29.351,16.309c0,2.686,1.285,4.792,2.475,5.2a.684.684,0,0,1,.461.649v.3a.684.684,0,0,1-.475.649c-1.54.493-2.46,2.9-2.46,4.934,0,.005,0,.01,0,.015h7.205a.115.115,0,0,1,0-.015c0-2.021-.91-4.416-2.433-4.925a.684.684,0,0,1-.467-.661l.006-.323a.684.684,0,0,1,.45-.63c1.51-.547,2.444-3.121,2.444-5.191,0-.005,0-.01,0-.015h-7.2C29.349,16.3,29.351,16.3,29.351,16.309Zm4.574,7.216c1.27.424,2.028,2.421,2.028,4.106,0,0,0,.009,0,.013H29.949s0-.008,0-.013c0-1.7.767-3.7,2.051-4.113Z"
                    transform="translate(-25.886 -14.379)"
                    fill="none"
                  />
                  <path
                    id="Path_28"
                    data-name="Path 28"
                    d="M32.787,61.811s0,.009,0,.013h6.006s0-.008,0-.013c0-1.685-.758-3.681-2.028-4.106L34.838,57.7C33.554,58.109,32.787,60.111,32.787,61.811Z"
                    transform="translate(-28.724 -48.56)"
                    fill="#f7c137"
                  />
                  <path
                    id="Path_29"
                    data-name="Path 29"
                    d="M23.631,6.276a.958.958,0,0,0-.957-.957H10.457a.957.957,0,1,0,0,1.915H11.6c0,.005,0,.01,0,.015,0,1.775.686,4.684,2.461,6A6.916,6.916,0,0,0,11.6,18.979c0,.005,0,.01,0,.015H10.457a.957.957,0,1,0,0,1.915H22.674a.957.957,0,1,0,0-1.915H21.533c0-.005,0-.01,0-.015,0-1.768-.668-4.5-2.438-5.75,1.759-1.324,2.438-4.222,2.438-5.981,0-.005,0-.01,0-.015h1.141A.957.957,0,0,0,23.631,6.276Zm-3.465.972c0,2.07-.934,4.644-2.444,5.191a.684.684,0,0,0-.45.63l-.006.323a.684.684,0,0,0,.467.661c1.523.509,2.433,2.9,2.433,4.925a.115.115,0,0,0,0,.015H12.963c0-.005,0-.01,0-.015,0-2.038.92-4.441,2.46-4.934A.684.684,0,0,0,15.9,13.4v-.3a.684.684,0,0,0-.461-.649c-1.191-.41-2.475-2.516-2.475-5.2,0-.005,0-.01,0-.015h7.2C20.167,7.239,20.167,7.243,20.167,7.249Z"
                    transform="translate(-9.5 -5.319)"
                    fill="#f7c137"
                  />
                </g>
              </g>
            </svg>
            <span>Last 24 hours</span>
          </div>
        ),
        value: "Last 24 Hours",
      },
      {
        name: (
          <div className="mb-3 d-flex align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14.131"
              height="14.131"
              viewBox="0 0 14.131 14.131"
              className="mr-2"
            >
              <g id="noun_clock_491353" transform="translate(-68.5 -68.5)">
                <g
                  id="Group_140"
                  data-name="Group 140"
                  transform="translate(68.5 68.5)"
                >
                  <path
                    id="Path_26"
                    data-name="Path 26"
                    d="M75.566,68.5a7.066,7.066,0,1,0,7.066,7.066A7.068,7.068,0,0,0,75.566,68.5Zm1.617,9.681-2.325-2.325V71.323H76.27v3.945l1.914,1.914Z"
                    transform="translate(-68.5 -68.5)"
                    fill="#f7c137"
                  />
                </g>
              </g>
            </svg>
            <span>Last week</span>
          </div>
        ),
        value: "Last week",
      },
      {
        name: (
          <div className="mb-3 d-flex align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14.131"
              height="14.005"
              viewBox="0 0 14.131 14.005"
              className="mr-2"
            >
              <g id="noun_Calendar_861179" transform="translate(-3.167 -3.335)">
                <path
                  id="Path_25"
                  data-name="Path 25"
                  d="M13.275,6.327a.566.566,0,0,0,.566-.566V3.9a.566.566,0,1,0-1.132,0V5.761A.566.566,0,0,0,13.275,6.327Zm-6.085,0a.566.566,0,0,0,.566-.566V3.9a.566.566,0,1,0-1.132,0V5.761A.566.566,0,0,0,7.19,6.327Zm9.354-1.609H14.52V5.761a1.245,1.245,0,0,1-2.489,0V4.718h-3.6V5.761a1.245,1.245,0,0,1-2.489,0V4.718H3.921a.754.754,0,0,0-.754.754V8.565H17.3V5.472A.754.754,0,0,0,16.544,4.718ZM3.167,16.586a.754.754,0,0,0,.754.754H16.544a.754.754,0,0,0,.754-.754V9.168H3.167ZM13.61,10.96h1.93v1.93H13.61Zm0,2.753h1.93v1.93H13.61Zm-2.9-2.753h1.93v1.93h-1.93Zm0,2.753h1.93v1.93h-1.93ZM7.82,10.96H9.75v1.93H7.82Zm0,2.753H9.75v1.93H7.82Zm-2.9-2.753h1.93v1.93H4.925Zm0,2.753h1.93v1.93H4.925Z"
                  fill="#f7c137"
                />
              </g>
            </svg>
            <span>Last month</span>
          </div>
        ),
        value: "Last month",
      },
    ];

  const [activeIndex, setActiveIndex] = useState(null);

  const onClick = (itemIndex) => {
    let _activeIndex = activeIndex ? [...activeIndex] : [];

    if (_activeIndex.length === 0) {
      _activeIndex.push(itemIndex);
    } else {
      const index = _activeIndex.indexOf(itemIndex);
      if (index === -1) {
        _activeIndex.push(itemIndex);
      } else {
        _activeIndex.splice(index, 1);
      }
    }

    setActiveIndex(_activeIndex);
  };

  console.log(getStatusOptions)

  return (
    <div className="filter-menu-left">
      <div className="searchbar position-relative">
        <InputText
          className="form-control"
          placeholder="Search"
          type="text"
          value={searchArticle}
          onChange={(e) => onSearchUpdate(e.target.value, "Search")}
        ></InputText>
        <i className="position-absolute">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16.653"
            height="17.551"
            viewBox="0 0 16.653 17.551"
          >
            <path
              id="Path_3"
              data-name="Path 3"
              d="M20.045,16.851l-3.186-3.186a7.538,7.538,0,1,0-1.62,1.368l3.312,3.312a1.043,1.043,0,0,0,1.476,0A1.038,1.038,0,0,0,20.045,16.851ZM5.806,8.642a5.427,5.427,0,1,1,5.436,5.436A5.443,5.443,0,0,1,5.806,8.642Z"
              transform="translate(-3.7 -1.1)"
              fill="#ff9300"
            />
          </svg>
        </i>
      </div>
      <div className="accordion-menu">
        <div>
          <Accordion className="accordion-custom" >
            <AccordionTab
              header={
                <React.Fragment>
                  <span>{status}</span>
                </React.Fragment>
              }
            >
			  {getStatusOptions.map((key,index) => (
				  <a onClick={() => setStatus(getStatusOptions[index].name)}>{getStatusOptions[index].name}</a>
			  ))}
            </AccordionTab>
            <AccordionTab
              header={
                <React.Fragment>
                  <span>{category}</span>
                </React.Fragment>
              }
            >
			  {getCategoryOptions.map((key,index) => (
				  <a onClick={() => setCategory(getCategoryOptions[index].name)}>{getCategoryOptions[index].name}</a>
			  ))}
            </AccordionTab>
            <AccordionTab
              header={
                <React.Fragment>
                  <span>{timeframe}</span>
                </React.Fragment>
              }
            >
			  {getTimeframeOptions.map((key,index) => (
				  <a onClick={() => setTimeframe(getTimeframeOptions[index].name)}>{getTimeframeOptions[index].name}</a>
			  ))}
            </AccordionTab>
          </Accordion>
        </div>
      </div>

      <div className="menu">
        <div className="p-fluid p-grid p-formgrid">
          <div className="p-field col-12 d-flex py-3 mb-0">
            <Calendar
              placeholder="From"
              id="basic1"
              value={startDate}
              onChange={(e) => onSearchUpdate(e.value, "StartDate")}
              inputStyle={{ width: 60 }}
            />
            <Calendar
              placeholder="To"
              id="basic2"
              value={endDate}
              onChange={(e) => onSearchUpdate(e.value, "EndDate")}
              inputStyle={{ width: 60 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterMenuBar);
