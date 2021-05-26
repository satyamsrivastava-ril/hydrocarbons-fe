// import React from "react";
// import SelectButtonComp from "./selectButton";
// import "./selectButton.scss";
// import "./../../pages/newTriagePage/profile/profile.scss";
// import { addDecorator, addParameters } from "@storybook/react";
// import { Store, withState } from "@sambego/storybook-state";

// import { store } from "./../../utils/storyStore";
// const Select = (props) => {
//   return [
//     <p> Selected Option: {props.selectButton} </p>,

//     <SelectButtonComp
//       className="genderSelection"
//       genderSelection={props.selectButton}
//       gender={props.options}
//       name="option"
//       setGenderSelection={props.onchange}
//     />,
//   ];
// };

// // const store = new Store({
// //   selectButton: "Yes",
// //   options: ["Yes", "No"],
// //   onchange: (e) => store.set({ selectButton: e }),
// // });

// addDecorator(withState());
// addParameters({
//   state: {
//     store,
//   },
// });

// export default {
//   title: "Select Box",
// };

// export const SelectButtonComponent = () => Select;
