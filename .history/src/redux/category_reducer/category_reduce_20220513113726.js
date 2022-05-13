import { CHANGE_CATEGORY } from "../types";

const initialState = {
  currentCategory: null,
};

export const categoryReducer = (state = initialState, action) => {
  d;
  debugger;
  switch (action.type) {
    case CHANGE_CATEGORY:
      return {
        ...state,
        currentCategory: action.payload,
      };
    default:
      return state;
  }
};
