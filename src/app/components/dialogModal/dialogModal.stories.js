// import React from "react";
// import DialogModal from "./dialogModal";

// import { addDecorator, addParameters } from "@storybook/react";
// import { Store, withState } from "@sambego/storybook-state";

// import { store } from "./../../utils/storyStore";
// import Button from "../buttonComponent/button";
// const DialogModalComp = (props) => {
//   return [
//     <Button className="btn" onClick={props.toggle}>
//       Click To Open{" "}
//     </Button>,
//     <div>
//       <DialogModal displayModal={props.chosen1} setOnHide={props.onHide}>
//         Modal content {props.chosen1.toString()}
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum omnis
//           error nesciunt. Quia minus eum unde distinctio delectus ab eius!
//         </p>
//       </DialogModal>
//     </div>,
//   ];
// };

// // const store = new Store({
// //   chosen1: true,
// //   onHide: () => store.set({ chosen1: false }),
// // });

// addDecorator(withState());
// addParameters({
//   state: {
//     store,
//   },
// });

// export default {
//   title: "dialog",
// };
// export const DialogModalComponent = () => DialogModalComp;
