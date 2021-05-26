// import React from "react";
// import ProgressBar from "./progressBar";
// import { store } from "./../../utils/storyStore";
// import { addDecorator, addParameters } from "@storybook/react";
// import { Store, withState } from "@sambego/storybook-state";

// const Progress = (props) => {
//   return [
//     <p> Progress Value: {props.progress} </p>,
//     <ProgressBar showValue={true} value={props.progress} color="#229183" />,
//     <br />,
//     <button onClick={props.increaseProgress}>Click to Increase</button>,
//   ];
// };

// // const store = new Store({
// //   progress: 18,
// //   setProgress: (e) => store.set({ progress: e }),
// //   increaseProgress: () => store.set({ progress: store.get("progress") + 1 }),
// // });

// addDecorator(withState());
// addParameters({
//   state: {
//     store,
//   },
// });

// export default {
//   title: "Progress Bar",
// };

// export const ProgressBarComponent = () => Progress;
