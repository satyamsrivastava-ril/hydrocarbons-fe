// import React from "react";
// import SliderComp from "./slider";

// import { addDecorator, addParameters } from "@storybook/react";
// import { Store, withState } from "@sambego/storybook-state";
// import { store } from "./../../utils/storyStore";
// const Slider = (props) => {
//   return [
//     <p> Selected Value: {props.sliderValue} </p>,

//     <SliderComp
//       age={props.sliderValue}
//       setAge={props.setSliderValue}
//       name="slide"
//     />,
//   ];
// };

// // const store = new Store({
// //   sliderValue: 0,
// //   setSliderValue: (e) => store.set({ sliderValue: e }),
// // });

// addDecorator(withState());
// addParameters({
//   state: {
//     store,
//   },
// });

// export default {
//   title: "Slider",
// };

// export const SliderComponent = () => Slider;
