import { combineReducers, createStore } from "@reduxjs/toolkit";
import { currencyReducer } from "./currency_reducer/currency_reducer";
import { mainPageReducer } from "./good_reducer/good_creator";

export const rootReducer = combineReducers({
  currency: currencyReducer,
  mainPage: mainPageReducer,
});

export const store = createStore(rootReducer);
