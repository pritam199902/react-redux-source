import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension'
import counterReducer from "./reducer/counterReducer"

const compose = composeWithDevTools(applyMiddleware(thunk))

const state = combineReducers({counter: counterReducer})
const store = createStore(state, compose)
export default store 