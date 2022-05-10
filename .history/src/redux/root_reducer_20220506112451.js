import { combineReducers, createStore } from "@reduxjs/toolkit";
import { currencyReducer } from "./currencyReducer/currencyReducer";
import { mainPageReducer } from "./mainPageReducer/mainPageReducer";

export const rootReducer = combineReducers({
  currency: currencyReducer,
  mainPage: mainPageReducer,
});

export const store = createStore(rootReducer);
