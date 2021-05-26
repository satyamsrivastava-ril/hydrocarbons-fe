import React from "react";
// import "font-awesome/css/font-awesome.min.css";
import SearchBar from "../searchBar/searchBar";
import { useState } from "react";
import { diseases } from "./utils/diseaseModalData";
import { BsArrowRight } from "./../icons/index";
import "./diseaseModal.scss";

const DiseaseModal = (props) => {
  const [searchTerm, setSearchTerm] = useState("feve");
  console.log('props.itemList',props.itemList)
  function handleRemove(item) {
    //props.deleteDisease(item);
    console.log("handleRemkove=-----", item);
    const newList = props.itemList.filter(
      (tempItem) => tempItem.id !== item.id
    );
    props.setItemList(newList);
  }
  const handleCheck = (item) => {
    console.log("entered");
    const newList = props.itemList.filter(
      (tempItem) => tempItem.id === item.id
    );
    if (newList.length === 0) {
      console.log(props.selectedItem.length);
      if(props.selectedItem.length == 0 )   {
        props.setItemList(() => {
        return [item, ...props.itemList];
        })
      }
      else {
        console.log("entered---else",props.selectedItem[0].id,props.itemList[0].id)
        let tempId = props.itemList.findIndex(
          (tempItem) => tempItem.id === props.selectedItem[0].id
        );
        console.log(tempId,"-----id")
        console.log(...props.itemList.slice(0,tempId-1))
        props.setItemList(() => {
        return [...props.itemList.slice(0,tempId), item , ...props.itemList.slice(tempId,props.itemList.length-1)];
        })
      }
    }
  };

  console.log(props.itemList);
  return (
    <div className="center-content">
      {}
      <SearchBar setSearchTerm={setSearchTerm} />
      <div className="list">
        {diseases.map((item) => 
            props.itemList.find(obj => obj.name === item.name) === undefined ?
            (
              <div className="text selected-item" onClick={() => handleCheck(item)}>
                <BsArrowRight className="color-primary"></BsArrowRight>
                {item.name}
              </div>
            )
            :
            null
        )}
      </div>
      <div className="total-select-options d-flex flex-wrap">
        {props.itemList != null &&
          props.itemList.length > 0 &&
          props.itemList.map((select) => (
            <div className="selected-option">
              <p className="d-flex mb-0">
                <span className="x-button d-flex align-items-center justify-content-center" onClick={() => handleRemove(select)}>
                  <a href="#"> {"x"}</a>
                </span>
                <span className="select-text">{select.name}</span>
              </p>
            </div>
          ))}
      </div>
      
    </div>
  );
};

export default DiseaseModal;
