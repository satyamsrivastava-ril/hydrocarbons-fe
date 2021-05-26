import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/root-saga'
import unitReducer from './reducers/unit-reducer'

const rootReducer = combineReducers({
  unit: unitReducer
})

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

export default store
