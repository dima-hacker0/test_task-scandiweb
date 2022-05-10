import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { currencyReducer } from "./currencyReducer/currencyReducer";
debugger;
export const rootReducer = combineReducers({
  currency: currencyReducer,
});

export const store = configureStore(rootReducer);
