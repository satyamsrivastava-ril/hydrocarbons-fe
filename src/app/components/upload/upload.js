import React from "react";
import "./upload.scss";

const Upload = ({ onSubmit }) => {
	const fileSelectedHandler = (event) => {
		onSubmit({ selectedFile: event.target.files[0] });
	};
	return (
		<div className="form-group position-relative mb-0">
			<input
				type="file"
				id="files"
				style={{ display: "none" }}
				multiple="multiple"
				onChange={fileSelectedHandler}
			/>
			<label for="files" className="form-control mb-0">
				Upload images...
			</label>
			<i>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24.097"
					height="23.026"
					viewBox="0 0 24.097 23.026"
				>
					<g id="Attach" transform="translate(0.061 0.011)">
						<path
							id="Path"
							d="M5.021.025l10.81,1.861s1.22.144,1.523.715a1.424,1.424,0,0,1,.172,1.005L15.268,18.433s-.253,1.72-.831,2a5.837,5.837,0,0,1-2.306-.052L1.437,18.6S.346,18.42.107,17.99a4.459,4.459,0,0,1,0-1.81L2.4,1.607A2.382,2.382,0,0,1,3.056.346C3.592-.134,5.021.025,5.021.025Z"
							transform="translate(5.945 0.527)"
							fill="none"
							stroke="#babcc4"
							stroke-miterlimit="10"
							stroke-width="1.05"
						/>
						<path
							id="Path-2"
							data-name="Path"
							d="M0,4.912,9.959,6.751,8.735,0,5.684,3.835,3.427,1.514Z"
							transform="translate(8.833 9.598)"
							fill="none"
							stroke="#babcc4"
							stroke-miterlimit="10"
							stroke-width="1.05"
						/>
						<path
							id="Path-3"
							data-name="Path"
							d="M6.116,0,1.932.394A2.813,2.813,0,0,0,.443.954C-.21,1.481.052,2.7.052,2.7L2.323,17.359s.145,1.318.725,1.653a3.741,3.741,0,0,0,1.9.086l5.526-.966"
							transform="translate(0.489 3.286)"
							fill="none"
							stroke="#babcc4"
							stroke-miterlimit="10"
							stroke-width="1.05"
						/>
						<path
							id="Path-4"
							data-name="Path"
							d="M2.791,1.366A1.272,1.272,0,0,0,1.4,0,1.432,1.432,0,0,0,0,1.366,1.475,1.475,0,0,0,1.4,2.733,1.3,1.3,0,0,0,2.791,1.366Z"
							transform="translate(10.884 4.919)"
							fill="none"
							stroke="#babcc4"
							stroke-miterlimit="10"
							stroke-width="1.05"
						/>
					</g>
				</svg>
			</i>
		</div>
	);
};

export default Upload;
