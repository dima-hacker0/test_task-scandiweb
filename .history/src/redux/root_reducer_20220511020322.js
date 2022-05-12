import { combineReducers, createStore } from "@reduxjs/toolkit";
import { currencyReducer } from "./currency_reducer/currencyReducer";
import { mainPageReducer } from "./main_page_reducer/main_page_reducer";

export const rootReducer = combineReducers({
  currency: currencyReducer,
  mainPage: mainPageReducer,
});

export const store = createStore(rootReducer);

store.subscribe(() => {
  console.log(5);
});
