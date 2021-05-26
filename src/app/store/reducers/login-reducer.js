import * as actions from "../actions";

const initialState = {
	isLoggedIn: false,
	username: "",
	accessToken: null,
	userType: null,
};

/**
 * Application reducer.
 * @redux
 * @type {Redux.Reducer}
 * @param {Redux.Store} state - The current redux state for userInfo.
 * @param {Redux.Action} action - A redux action
 * @return {Redux.Store} The updated redux state
 */
const loginReducer = (state = initialState, action) => {
	switch (action.type) {
		case actions.LOGIN_RESPONSE:
			return { ...state, isLoggedIn: true, ...action.data };
		default:
			return state;
	}
};

export default loginReducer;
