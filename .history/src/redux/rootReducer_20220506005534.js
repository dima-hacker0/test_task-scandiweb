import { combineReducers, legacy_createStore } from "redux";

export const rootReducer = combineReducers({});

export const store = legacy_createStore(rootReducer);
