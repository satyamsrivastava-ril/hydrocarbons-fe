// import React from 'react'
import * as actions from '../store/actions'

export const mapStateToProps = state => {
  return {
    unitReducer: state.unit
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    getUnits: () => dispatch({ type: actions.GET_UNIT_SAGA }),
    setUnit: data => dispatch({ type: actions.SET_UNIT, data: data }),
    getFeedsAndProducts: data =>
      dispatch({ type: actions.GET_FEED_AND_PRODUCTS_SAGA, data }),
    setFeedsAndProducts: data =>
      dispatch({ type: actions.SET_FEEDS_AND_PRODUCTS, data }),
    getConfigurations: () => dispatch({ type: actions.GET_CONFIGURATION_SAGA }),
    setConfiguration: data =>
      dispatch({ type: actions.SET_CONFIGURATION, data })
  }
}
