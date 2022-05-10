import { combineReducers, createStore } from "@reduxjs/toolkit";
import { currencyReducer } from "./currencyReducer/currencyReducer";

export const rootReducer = combineReducers({
  currency: currencyReducer,
});

export const store = createStore(rootReducer);
