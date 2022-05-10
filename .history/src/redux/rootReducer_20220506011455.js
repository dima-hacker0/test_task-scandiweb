import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { currencyReducer } from "./currencyReducer";
export const rootReducer = combineReducers({
  currency: currencyReducer,
});

export const store = configureStore(rootReducer);
