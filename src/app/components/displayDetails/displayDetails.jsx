import React, { useState, useEffect } from "react";
import InputBox from "../../components/inputBox/inputBox";
import { MdModeEdit } from "react-icons/md";
import { BiSave } from "react-icons/bi";
import "./dispalyDetails.scss";

const DisplayDetails = (props) => {
  console.log(props.detailList);
  const [detailList, setDetailList] = useState(props.detailList);
  useEffect(() => {
    setDetailList(props.detailList);
  }, [props.detailList]);

  const [editArticle, setEditArticle] = useState(false);
  const [editDetails, setEditDetails] = useState(false);
  const [readMore, setReadMore] = useState(false);

  const extraContent = (
    <div className="ar-specification">
      {
        <div className="ar-title position-relative">
          <h5>Article Specifications</h5>
          {props.isEditable ? editDetails ? (
            <BiSave
              style={{ fill: "orange" }}
              onClick={() => setEditDetails(false)}
            >
              Save{" "}
            </BiSave>
          ) : (
            <MdModeEdit
              style={{ fill: "orange" }}
              onClick={() => setEditDetails(true)}
            >
              Edit
            </MdModeEdit>
          ): null}
        </div>
      }
      <div className="ar-box">

      {Object.keys(detailList).map(
        (key, index) =>
        key !== "images" && key !== "name" && key !== "ean" && key !== "sapDescription" &&
          (editDetails ? (
            <div key={index} className="ar-content d-flex flex-wrap">
              <div className="ar-cn ar-cn-left col-md-6 col-6 d-flex align-items-center">{key} </div>
              <InputBox
                value={detailList[key]}
                setValue={(value) => {
                  setDetailList({
                    ...detailList,
                    [key]: value,
                  });
                }}
                placeholder={key}
              ></InputBox>
            </div>
          ) : (
            <div key={index} className="ar-content d-flex flex-wrap">
              <div  className="ar-cn ar-cn-left col-md-6 col-6">{key}</div>
              <div  className="ar-cn col-md-6 col-6">{detailList[key]}</div>
            </div>
          ))
      )}
      </div>
    </div>
  );

  const linkName = readMore ? "COLLAPSE " : "VIEW MORE";


const renderArticleHeading = (key) => {
  switch (key) {
    case 'name':
      return <h5>{detailList[key]}</h5>;
      case 'ean':
        return  <h4 className="article-number">{detailList[key]}</h4>;
        case 'sapDescription':
          return <p>{detailList[key]}</p>
          default:
            return null

  }
}

  return (
    <>
     {props.isEditable && <div className="ar-title position-relative">
        {editArticle ? (
          <BiSave
            style={{ fill: "orange" }}
            onClick={() => setEditArticle(false)}
          >
            Save{" "}
          </BiSave>
        ) : (
          <MdModeEdit
            style={{ fill: "orange" }}
            onClick={() => setEditArticle(true)}
          >
            {" "}
            Edit
          </MdModeEdit>
        )}{" "}
      </div>}
      {Object.keys(detailList).map(
        (key, index) =>
          key !== "images" &&
          (key === "name" || key === "ean" || key === "sapDescription") &&
          (editArticle ? (
            <div key={index} className="ar-details d-flex flex-wrap mb-3">
              { key === "sapDescription" ? 
              <textarea value={detailList[key]}
                setValue={(value) => {
                  setDetailList({
                    ...detailList,
                    [key]: value,
                  });
                }}
                placeholder={key}></textarea>
                :<InputBox
                value={detailList[key]}
                setValue={(value) => {
                  setDetailList({
                    ...detailList,
                    [key]: value,
                  });
                }}
                placeholder={key}
                
              ></InputBox>}
            </div>
          ) : (
            <div key={index} className="spec-box">
              {renderArticleHeading(key)}
            </div>
          ))
      )}
      <div>{readMore && extraContent}</div>
      <a
          onClick={() => {
            setReadMore(!readMore);
          }}
        >
          <h6 className="text-uppercase show-details">{linkName}<svg xmlns="http://www.w3.org/2000/svg" width="15" height="9" viewBox="0 0 15 9">
  <path id="Polygon_4" data-name="Polygon 4" d="M6.732.922a1,1,0,0,1,1.536,0L13.633,7.36A1,1,0,0,1,12.865,9H2.135a1,1,0,0,1-.768-1.64Z" transform="translate(15 9) rotate(180)" fill="#ff9300"/>
</svg></h6>
        </a>
    </>
  );
};

export default DisplayDetails;
