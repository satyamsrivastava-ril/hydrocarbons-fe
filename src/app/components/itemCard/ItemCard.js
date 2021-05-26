import React from "react";
import ImageComponent from "../image/imageComponent";
import "./itemcard.scss";
function ItemCardComponent({
	item,
	leftTopContent = "",
	leftBottomContent = "",
	rightTopContent = "",
	rightBottomContent = "",
	imageUrl = "",
	color = "",
	onItemClick,
}) {
	console.log("color", color);
	return (
		<div className="col-md-6 col-lg-4 col-xl-3 cardbox" onClick={() => onItemClick(item)}>
			<div className="box">
				{imageUrl && (
					<div className="profile-image d-flex align-items-center justify-content-center">
						<ImageComponent
							source={imageUrl}
							alt={item.name}
							className="img-fluid mh-100"
						/>
					</div>
				)}
				<div
					className="d-flex flex-column profile-content"
					style={{
						borderLeftColor: color,
						borderLeftWidth: 3,
						borderLeftStyle: "solid",
					}}
				>
					<div className="row">
						<div className="col-sm-8 col-6">{leftTopContent}</div>
						<div className="col-sm-4 col-6">{rightTopContent}</div>
					</div>
					<div className="row">
						<div className="col-md-6 col-6">{leftBottomContent}</div>
						<div className="col-md-6 col-6">{rightBottomContent}</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ItemCardComponent;
