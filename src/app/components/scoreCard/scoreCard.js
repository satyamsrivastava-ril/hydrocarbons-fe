import React from "react";
import "./scorecard.scss";
const ScoreCard = (props) => {
	return (
		<div className="col-12 col-md-3">
			<div className="box">
				<div className="media">
					<div
						className="circle d-flex align-items-center justify-content-center"
						style={{ backgroundColor: props.backgroundColor }}
					>
						{props.icon}
					</div>
					<div className="media-body">
						<h1 className="my-1">{props.score}</h1>
						<p>{props.text}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ScoreCard;
