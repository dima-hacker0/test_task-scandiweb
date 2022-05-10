import { CHANGE_CATEGORY } from "../types";

const initialState = {
  currentCategory: "clothes",
};

export const mainPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CATEGORY:
      return {
        currentCategory: action.payload,
      };
    default:
      return state;
  }
};
