import * as actions from "../actions";

const initialState = {
	categoryList: [],
};

/**
 * Application reducer.
 * @redux
 * @type {Redux.Reducer}
 * @param {Redux.Store} state - The current redux state for userInfo.
 * @param {Redux.Action} action - A redux action
 * @return {Redux.Store} The updated redux state
 */
const categoryReducer = (state = initialState, action) => {
	switch (action.type) {
		case actions.GET_CATEGORY_LIST_RESPONSE:
			return { ...state, categoryList: [...action.data] };
		default:
			return state;
	}
};

export default categoryReducer;
