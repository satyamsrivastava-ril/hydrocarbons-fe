import * as actions from "../actions";
import { put, takeLatest } from "redux-saga/effects";

export function* loginSaga(action) {
	const { username, onSuccess } = action.data;
	try {
		// api call here
		yield put({
			type: actions.LOGIN_RESPONSE,
			data: { accessToken: "", userType: "", username },
		});
		onSuccess();
	} catch (error) {
		console.log("error", error);
	}
}

export function* loginWatcher() {
	yield takeLatest(actions.LOGIN_REQUEST, loginSaga);
}
