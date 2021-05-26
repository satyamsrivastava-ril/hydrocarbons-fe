import * as actions from "../actions";
import { put, takeLatest } from "redux-saga/effects";

export function* categorySaga(action) {
	try {
		// api call here
		yield put({
			type: actions.GET_CATEGORY_LIST_RESPONSE,
			data: [
				{ name: "Food", value: "Food" },
				{ name: "Cloth", value: "Cloth" },
			],
		});
		// onSuccess();
	} catch (error) {
		console.log("error", error);
	}
}

export function* categoryWatcher() {
	yield takeLatest(actions.GET_CATEGORY_LIST_REQUEST, categorySaga);
}
