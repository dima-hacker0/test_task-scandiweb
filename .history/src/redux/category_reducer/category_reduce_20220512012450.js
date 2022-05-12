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
    case CHANGE_CURRENT_GOOD: {
      return { ...state, idCurrentGood: action.payload };
    }
    case SET_DATA_CURRENT_GOOD: {
      return { ...state, dataCurrentGood: action.payload };
    }
    case SET_OPTIONS_GOOD: {
      return { ...state, optionsCurrentGood: action.payload };
    }
    default:
      return state;
  }
};
