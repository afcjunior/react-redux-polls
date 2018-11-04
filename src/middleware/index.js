//combine middleware here

import { applyMiddleware, compose } from  'redux' //compose is for reduxDevtools
import thunk from 'redux-thunk'
import logger from './logger'

//this compose is for the reduxDevtools chrome extension. use this to wrap our applyMiddleware.
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


export default composeEnhancers(applyMiddleware(thunk, logger))