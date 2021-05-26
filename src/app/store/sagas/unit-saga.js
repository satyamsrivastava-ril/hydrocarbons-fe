import * as actions from '../actions'
import { put, takeLatest } from 'redux-saga/effects'
import {
  currentEnvironemt,
  ENVIRONMENTS,
  data,
  GET_HEADERS,
  GET_UNIT_ENDPOINT,
  GET_FEED_AND_PRODUCTS_ENDPOINT,
  GET_UNIT_CONFIGURATION_ENDPOUNT
} from '../../utils/constants'
import { httpGET, httpPOST } from '../../utils/http'

export function * getUnitSaga () {
  try {
    let data1 = {}
    if (currentEnvironemt === ENVIRONMENTS.DEVELOPMENT) {
      data1 = data.unitList
    } else {
      data1 = yield httpGET(GET_UNIT_ENDPOINT)
    }
    console.log('check data', data1)
    yield put({
      type: actions.GET_UNIT,
      data: data1
    })
  } catch (err) {}
}

export function * getFeedAndProducts () {
  try {
    let data1 = {}
    if (currentEnvironemt === ENVIRONMENTS.DEVELOPMENT) {
      data1 = {
        feeds: data.feedChemicals,
        products: data.productChemicals
      }
    } else {
      data1 = yield httpPOST(GET_FEED_AND_PRODUCTS_ENDPOINT, {}, GET_HEADERS)
    }
    yield put({
      type: actions.GET_FEED_AND_PRODUCTS,
      data: data1
    })
  } catch (err) {}
}

export function * getUnitConfiguration () {
  try {
    let data1 = {}
    if (currentEnvironemt === ENVIRONMENTS.DEVELOPMENT) {
      data1 = data.configurationOptions
    } else {
      data1 = yield httpPOST(GET_UNIT_CONFIGURATION_ENDPOUNT, {}, GET_HEADERS)
    }
    yield put({
      type: actions.GET_CONFIGURATION,
      data: data1
    })
  } catch (err) {}
}

export function * unitWatcher () {
  yield takeLatest(actions.GET_UNIT_SAGA, getUnitSaga)
  yield takeLatest(actions.GET_FEED_AND_PRODUCTS_SAGA, getFeedAndProducts)
  yield takeLatest(actions.GET_CONFIGURATION_SAGA, getUnitConfiguration)
}
