import React from "react";
import "./../../App.scss";
// import "./../../pages/newTriagePage/profile/profile.scss";
import "./button.scss";

function Button(props) {
	//   const { variant = "primary", children, ...rest } = props;
	return (
	
		<button
			className={props.className}
			type={props.type}
			disabled={props.disabled}
			onClick={props.onClick}>
			{props.children}
		</button>
	
	);
}

export default Button;
