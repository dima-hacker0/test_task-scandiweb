import { combineReducers, createStore } from "redux";
import searchReducer from "./search/search_reducer";

export const rootReducer = combineReducers({
  createCardPage: reducerForm,
  pageSearch: searchReducer,
});

export const store = createStore(rootReducer);
