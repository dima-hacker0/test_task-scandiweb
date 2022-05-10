import { combineReducers, legacy_createStore } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({});

export const store = legacy_createStore(rootReducer);
