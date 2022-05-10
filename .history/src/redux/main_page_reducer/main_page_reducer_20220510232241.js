import { CHANGE_CATEGORY, CHANGE_CURRENT_GOOD } from "../types";

const initialState = {
  currentCategory: "",
  idCurrentObject: "",
};

export const mainPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CATEGORY:
      return {
        currentCategory: action.payload,
      };
    case CHANGE_CURRENT_GOOD: {
      return { ...state, idCurrentObject: action.payload };
    }
    default:
      return state;
  }
};
