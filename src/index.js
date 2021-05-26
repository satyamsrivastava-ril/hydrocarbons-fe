import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "../src/app/App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route } from "react-router-dom";
import store from "./app/store/store";
import { Provider } from "react-redux";

ReactDOM.render(
	<>
		<Provider store={store}>
			<BrowserRouter>
				<Route path="/" component={App} />
			</BrowserRouter>
		</Provider>
	</>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
