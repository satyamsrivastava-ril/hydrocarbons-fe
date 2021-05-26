import React from "react";
import { InputText } from "primereact/inputtext";
import "./inputBox.scss";

const InputBox = (props) => {
	const onChange = (e) => {
		props.setValue(e.target.value);
		// if (e.target.value == "") {
		//   setIconVisibility(true);
		// } else {
		//   setIconVisibility(false);
		// }
	};
	return (
		<div className="inputBoxContainer">
			<div className="iconContainer">
				{/* {iconVisibility == true && props.icon} */}
				{props.icon}
			</div>
			<InputText
				value={props.value}
				type={props.type}
				onChange={onChange}
				className={props.className}
				placeholder={props.placeholder}
			/>
		</div>
	);
};

export default InputBox;
