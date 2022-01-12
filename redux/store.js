import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import myReducer from "./reducer";

const rootReducer = combineReducers({ myReducer });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
