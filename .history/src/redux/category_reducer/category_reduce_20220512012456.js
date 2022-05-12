import { CHANGE_CATEGORY } from "../types";

const initialState = {
  currentCategory: null,
};

export const mainPageReducer = (state = initialState, action) => {
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
