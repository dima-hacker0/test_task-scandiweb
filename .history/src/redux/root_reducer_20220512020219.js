import { combineReducers, createStore } from "@reduxjs/toolkit";
import { currencyReducer } from "./currency_reducer/currency_reducer";
import { categoryReducer } from "./category_reducer/category_reduce";
export const rootReducer = combineReducers({
  currency: currencyReducer,
  category: categoryReducer,
});

export const store = createStore(rootReducer);
