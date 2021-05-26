import * as actions from '../actions'
import at from 'v-at'

const initialState = {
  units: null,
  feeds: null,
  products: null,
  selectedUnit: null,
  selectedFeeds: null,
  selectedProducts: null,
  configs: null,
  selectedConfig: null
}

/**
 * Application reducer.
 * @redux
 * @type {Redux.Reducer}
 * @param {Redux.Store} state - The current redux state for userInfo.
 * @param {Redux.Action} action - A redux action
 * @return {Redux.Store} The updated redux state
 */
const unitReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_UNIT:
      return { ...state, units: action.data }
    case actions.GET_FEED_AND_PRODUCTS:
      return {
        ...state,
        feeds: at(action, `data.feeds`),
        products: at(action, `data.products`)
      }
    case actions.SET_UNIT:
      return { ...state, selectedUnit: at(action, `data`) }
    case actions.SET_FEEDS_AND_PRODUCTS:
      console.log(
        'check reducer',
        at(action, `data.feeds`) || state.selectedFeeds
      )
      return {
        ...state,
        selectedFeeds: at(action, `data.feeds`) || state.selectedFeeds,
        selectedProducts: at(action, `data.products`) || state.selectedProducts
      }
    case actions.GET_CONFIGURATION:
      return {
        ...state,
        configs: at(action, 'data')
      }
    case actions.SET_CONFIGURATION:
      return {
        ...state,
        selectedConfig: at(action, 'data')
      }
    default:
      return state
  }
}

export default unitReducer
