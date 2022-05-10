import { CHANGE_CATEGORY } from "../types";

const initialState = {
  currentCategory: "CLOTHES",
};

export const mainPageReducer = (state, action) => {
  switch (action.type) {
    case CHANGE_CATEGORY:

    default:
      return state;
  }
};
