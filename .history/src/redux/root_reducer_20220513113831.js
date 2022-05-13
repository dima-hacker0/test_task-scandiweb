import { combineReducers, createStore } from "@reduxjs/toolkit";
import { currencyReducer } from "./currency_reducer/currency_reducer";
import { categoryReducer } from "./category_reducer/category_reduce";
import { goodReducer } from "./good_reducer/good_reducer";
import { basketReducer } from "./basket_reducer/basket_reducer";

export const rootReducer = combineReducers({
  currency: currencyReducer,
  category: categoryReducer,
  good: goodReducer,
  basket: basketReducer,
});

export const store = createStore(rootReducer);
