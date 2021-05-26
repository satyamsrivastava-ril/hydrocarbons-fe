import * as actions from "../actions";

const initialState = {
	articleCount: null,
	articleList: [],
	articleInformation: null,
	uploadMessage:""
};

/**
 * Application reducer.
 * @redux
 * @type {Redux.Reducer}
 * @param {Redux.Store} state - The current redux state for userInfo.
 * @param {Redux.Action} action - A redux action
 * @return {Redux.Store} The updated redux state
 */
const articleReducer = (state = initialState, action) => {
	switch (action.type) {
		case actions.GET_ARTICLE_COUNT_RESPONSE:
			return { ...state, articleCount: { ...action.data } };
		case actions.GET_ARTICLE_FILTER_RESPONSE:
			return { ...state, articleList: [...action.data] };
		case actions.GET_ARTICLE_INFORMATION_RESPONSE:
			return { ...state, articleInformation: { ...action.data } };
		case actions.UPLOAD_IMAGE_RESPONSE:
			return {...state, uploadMessage: {...action.data}};
		case actions.UPDATE_ARTICLE_INFORMATION_RESPONSE:
			return {...state, articleInformation: {...action.data}};
		default:
			return state;
	}
};

export default articleReducer;
