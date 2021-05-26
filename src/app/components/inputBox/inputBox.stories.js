// import React from "react";
// import InputBox from "./inputBox";
// import "./../searchBar/searchBar.scss";
// import { store } from "./../../utils/storyStore";

// import { addDecorator, addParameters } from "@storybook/react";
// import { Store, withState } from "@sambego/storybook-state";
// console.log("store", store);
// const Input = (props) => {
//   return [
//     <p> Entered Text: {props.entered} </p>,

//     <InputBox
//       className="input-box form-control"
//       placeholder="Input Box"
//       value={props.entered}
//       setValue={props.handleUpdate}
//       style={{ border: "1px solid #20c8b4 !important" }}
//     />,
//   ];
// };

// // const store = new Store({
// //   entered: "d",
// //   handleUpdate: (e) => store.set({ entered: e }),
// // });

// addDecorator(withState());
// addParameters({
//   state: {
//     store,
//   },
// });

// export default {
//   title: "Input Box",
// };

// export const InputBoxComponent = () => Input;
