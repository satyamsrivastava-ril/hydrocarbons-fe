import React, { useState } from "react";
import { Menubar } from "primereact/menubar";
import { BiSearch as BiSearchIcon } from "react-icons/bi";
import { InputText } from "primereact/inputtext";
import DropDownComponent from "../dropDown/dropDown";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../../utils/propsMapper";
import "./menubar.scss";

const MenubarComponent = (props) => {
	const [category, setCategory] = useState("");
	const [searchArticle, setSearchArticle] = useState("");
	const [status, setStatus] = useState("");
	const items = [{}];

	const onSearchUpdate = (value, tag) => {
		console.log("value", value);
		switch (tag) {
			case "Search":
				setSearchArticle(value);
				props.getArticleList({
					articleId: value.split(","),
					category: category,
					status: status,
					dateRange: "",
				});
				// action dispatch
				break;
			case "Category":
				setCategory(value || "");
				props.getArticleList({
					articleId: searchArticle.split(","),
					category: value || "",
					status: status,
					dateRange: "",
				});
				break;
			case "Status":
				setStatus(value || "");
				props.getArticleList({
					articleId: searchArticle.split(","),
					category: category,
					status: value || "",
					dateRange: "",
				});
				// action dispatch
				break;
			default:
				break;
		}
	};

	const getStatusOptions = () => {
		return [
			{
				name: (
					<div  className="d-flex align-items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="22.255"
							height="22.255"
							viewBox="0 0 22.255 22.255"
							className="mr-2"
						>
							<g
								id="Icon_Circle"
								data-name="Icon Circle"
								transform="translate(-17.001 -17.001)"
							>
								<g id="Base" transform="translate(17.001 17.001)">
									<circle
										id="Oval"
										cx="11.127"
										cy="11.127"
										r="11.127"
										fill="#7ad400"
									/>
								</g>
								<g
									id="Element_Icon_Check"
									data-name="Element/Icon/Check"
									transform="translate(23.704 24.589)"
								>
									<path
										id="_Icon_color"
										data-name="🎨 Icon color"
										d="M8.606,1.5,3.54,6.823a.805.805,0,0,1-1.18,0L.244,4.6a.911.911,0,0,1,0-1.241.806.806,0,0,1,1.18,0l1.526,1.6L7.426.257a.805.805,0,0,1,1.18,0,.908.908,0,0,1,0,1.24"
										fill="#fff"
										stroke="#fff"
										stroke-miterlimit="10"
										stroke-width="1"
									/>
								</g>
							</g>
						</svg>

						<span style={{ color: "#7AD400" }}>Success</span>
					</div>
				),
				value: "Success",
			},
			{
				name: (
					<div className="d-flex align-items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="22.255"
							height="22.255"
							viewBox="0 0 22.255 22.255"
							className="mr-2"
						>
							<g
								id="Icon_Circle"
								data-name="Icon Circle"
								transform="translate(-17.001 -17.001)"
							>
								<g id="Base" transform="translate(17.001 17.001)">
									<circle
										id="Oval"
										cx="11.127"
										cy="11.127"
										r="11.127"
										fill="#d80e0e"
									/>
									<g
										id="Group_113"
										data-name="Group 113"
										transform="translate(-14.013 -12.528)"
									>
										<g
											id="Element_Icon_Check"
											data-name="Element/Icon/Check"
											transform="translate(21.846 20.2)"
										>
											<path
												id="_Icon_color"
												data-name="🎨 Icon color"
												d="M9.2,1.462,4.253,6.66a.786.786,0,0,1-1.152,0L3.046,6.6c-.7-.813.666-1.689.631-1.757L8.045.251A.786.786,0,0,1,9.2.251a.887.887,0,0,1,0,1.211"
												transform="translate(-2.846 0)"
												fill="#fff"
												stroke="#fff"
												stroke-miterlimit="10"
												stroke-width="1"
											/>
										</g>
										<g
											id="Element_Icon_Check-2"
											data-name="Element/Icon/Check"
											transform="translate(21.846 20.2)"
										>
											<path
												id="_Icon_color-2"
												data-name="🎨 Icon color"
												d="M3.085,1.462,8.03,6.66a.786.786,0,0,0,1.152,0L9.236,6.6c.7-.813-.666-1.689-.631-1.757L4.237.251a.786.786,0,0,0-1.152,0,.887.887,0,0,0,0,1.211"
												transform="translate(-2.846 0)"
												fill="#fff"
												stroke="#fff"
												stroke-miterlimit="10"
												stroke-width="1"
											/>
										</g>
									</g>
								</g>
							</g>
						</svg>
						<span style={{ color: "#d80e0e" }}>Failure</span>
					</div>
				),
				value: "Failure",
			},
		];
	};

	const getCategoryOptions = () => {
		return [
			{
				name: (
					<div  className="d-flex align-items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="13.433"
							height="17.831"
							viewBox="0 0 13.433 17.831"
							className="mr-2"
						>
							<g id="Food" transform="translate(-18.2 -2)">
								<g
									id="Group_119"
									data-name="Group 119"
									transform="translate(18.2 2)"
								>
									<path
										id="Path_89"
										data-name="Path 89"
										d="M30.924,14.8,27.6,18.054,34.905,20.5l2.268-3.6Z"
										transform="translate(-27.185 -12.411)"
									/>
									<path
										id="Path_90"
										data-name="Path 90"
										d="M81.853,29.969,79.9,29l-1.7,2.7Z"
										transform="translate(-69.025 -24.153)"
									/>
									<path
										id="Path_91"
										data-name="Path 91"
										d="M54.945,3.06,48.8,1V2.523l6.145,2.06Z"
										transform="translate(-44.715 -1)"
									/>
									<path
										id="Path_92"
										data-name="Path 92"
										d="M25.2,47.264l7.461,2.493V40.91L25.2,38.4Z"
										transform="translate(-25.2 -31.926)"
									/>
									<path
										id="Path_93"
										data-name="Path 93"
										d="M73.7,50.166l5.037-2.372V39L73.7,41.372Z"
										transform="translate(-65.304 -32.422)"
									/>
								</g>
							</g>
						</svg>
						<span>Food</span>
					</div>
				),
				value: "Food",
			},
			{
				name: (
					<div  className="d-flex align-items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16.438"
							height="13.698"
							viewBox="0 0 16.438 13.698"
							className="mr-2"
						>
							<g id="Clothes" transform="translate(-18 -18)">
								<g id="Glyph_ComPath" data-name="Glyph ComPath">
									<path
										id="Path_88"
										data-name="Path 88"
										d="M34.438,18.548v4.109a.548.548,0,0,1-.429.535l-2.037.453V31.7H20.466V23.645l-2.037-.453A.548.548,0,0,1,18,22.657V18.548A.548.548,0,0,1,18.548,18h4.931a.548.548,0,0,1,.548.548,2.192,2.192,0,1,0,4.383,0A.548.548,0,0,1,28.959,18H33.89A.548.548,0,0,1,34.438,18.548Z"
									/>
								</g>
							</g>
						</svg>
						<span>Cloth</span>
					</div>
				),
				value: "Cloth",
			},
		];
	};

	const searchInput = (
		<>
			<div className="position-relative searchbar d-flex mr-4">
				<BiSearchIcon />
				<InputText
					placeholder="Search"
					type="text"
					className="form-control"
					value={searchArticle}
					onChange={(e) => onSearchUpdate(e.target.value, "Search")}
				/>
			</div>
			<div className="d-flex">
				<div className="px-2">
					<DropDownComponent
						placeholder={"Status"}
						options={getStatusOptions()}
						selectedOption={status}
						onChange={(value) => onSearchUpdate(value, "Status")}
					/>
				</div>
				<div className="px-2">
					<DropDownComponent
						placeholder={"Category"}
						options={getCategoryOptions()}
						onChange={(value) => onSearchUpdate(value, "Category")}
						selectedOption={category}
					/>
				</div>
			</div>
		</>
	);
	const categoryAndStatusInput = (
		<div className="d-flex">
			<ul className="list-unstyled d-flex align-items-center">
				<li className="pl-4">{`${props.articleCount} articles`}</li>
				<li className="pl-4">{`${props.imageCount} images`}</li>
			</ul>
		</div>
	);
	console.log("state", category, status, searchArticle);
	return (
		<div className="mt-3">
			<Menubar model={items} start={searchInput} end={categoryAndStatusInput} />
		</div>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(MenubarComponent);
