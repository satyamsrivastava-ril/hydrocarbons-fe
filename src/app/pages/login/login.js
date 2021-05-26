import React, { useState } from "react";
import InputBox from "../../components/inputBox/inputBox";
import { InputText } from "primereact/inputtext";
import { mapDispatchToProps, mapStateToProps } from "../../utils/propsMapper";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import "./login.scss";
import LoginBanner from "../../../app/assets/images/login.jpg";

function Login(props) {
	const [username, setUsername] = useState("admin");
	const [password, setPassword] = useState("password");
	const [passwordType, setPasswordType] = useState("password");
	let history = useHistory();
	const onSuccess = () => {
		history.push("/dashboard");
	};
	return (
		<section id="login" className="d-flex">
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-6 p-5 vh-100">
						<div className="header-box">
							<a href="#">
								<svg
									id="Loco_Icon_"
									data-name="Loco Icon "
									xmlns="http://www.w3.org/2000/svg"
									width="32.691"
									height="36.771"
									viewBox="0 0 32.691 36.771"
								>
									<path
										id="Rectangle"
										d="M21.653,0V14.436A21.653,21.653,0,0,1,0,36.089V21.653A21.653,21.653,0,0,1,21.653,0Z"
										transform="translate(0)"
										fill="#d00"
									/>
									<path
										id="Rectangle-2"
										data-name="Rectangle"
										d="M32.691,1.312,27.753,14.877A21.653,21.653,0,0,1,0,27.818L4.937,14.253A21.653,21.653,0,0,1,32.691,1.312Z"
										transform="translate(0 7.641)"
										fill="#ff9300"
									/>
								</svg>{" "}
								<span className="d-inline-block">CEPT</span>
							</a>
						</div>
						<div className="login-box d-flex flex-column justify-content-center mx-auto">
							<h2 className="mb-1">Sign in to CEPT</h2>
							<p className="mb-5 pb-3">
								Please enter your credentials to proceed.
							</p>
							<form
								onSubmit={(event) => {
									event.preventDefault();
									props.loginRequest({
										username,
										password,
										onSuccess: onSuccess,
									});
								}}
								noValidate
							>
								<div className="input-boxes">
									<div className="form-group position-relative">
										<label className="text-uppercase">Email address</label>
										<InputBox
											value={username}
											setValue={(value) => setUsername(value)}
											className={`input form-control`}
											// icon={<AiOutlineUser className="inputBoxIcon" />}
										/>
									</div>

									<div className="form-group position-relative">
										<label className="text-uppercase">Password</label>
										<label className="for-pwd position-absolute">
											<a href="#">Forgot Password</a>
										</label>
										{/* <AiFillLock
											className="icon position-absolute"
											color="rgba(85, 85, 85, 0.43)"
											size="25px"
										/> */}
										<InputText
											type={passwordType}
											value={password}
											onChange={(e) => setPassword(e.target.value)}
											className="form-control"
										/>
										{/* {password != undefined && password.length > 0 && (
											<AiFillEye
												className="icon position-absolute icon-eye"
												color="rgba(85, 85, 85, 0.43)"
												size="22px"
												onClick={() => {
													setPasswordType(
														passwordType === "password" ? "text" : "password"
													);
												}}
											/>
										)} */}
									</div>
								</div>
								<div className="text-center mt-5 pt-3 ">
									<button
										className="btn btn-primary text-uppercase"
										type="submit"
									>
										Sign in
									</button>
								</div>
							</form>
						</div>
					</div>
					<div className="col-md-6 p-0 d-none d-md-flex">
						<img
							src={LoginBanner}
							className="img-fluid l-right height-100 w-100"
							alt="login"
						></img>
					</div>
				</div>
			</div>
		</section>
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
