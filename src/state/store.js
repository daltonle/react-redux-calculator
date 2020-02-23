/**
 * Create Redux store
 */

import {
  createStore, compose, combineReducers,
} from 'redux'
import * as reducers from './ducks'

const rootReducer = combineReducers({ ...reducers })

const initialState = {}

const store = createStore(
  rootReducer,
  initialState,
  compose(
    // eslint-disable-next-line no-underscore-dangle
    (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) || compose,
  ),
)

export default store
