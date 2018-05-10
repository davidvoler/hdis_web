import { applyMiddleware, createStore } from 'redux';

import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import promise from "redux-promise-middleware"

import  rootReducer  from './root_reducer'

export default createStore(
  rootReducer,
  applyMiddleware(
    promise(),
    thunkMiddleware,
    createLogger()
  )
);