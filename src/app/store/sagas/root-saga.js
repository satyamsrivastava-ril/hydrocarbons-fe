import { all } from 'redux-saga/effects'
import { unitWatcher } from './unit-saga'

function * rootSaga () {
  yield all([unitWatcher()])
}

export default rootSaga
