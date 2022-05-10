import { combineReducers, createStore } from "redux";
import searchReducer from "./search/search_reducer";

export const rootReducer = combineReducers({});

export const store = createStore(rootReducer);
