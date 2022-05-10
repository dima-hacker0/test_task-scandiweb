import {
  CHANGE_CATEGORY,
  CHANGE_CURRENT_GOOD,
  SET_DATA_CURRENT_GOOD,
} from "../types";

const initialState = {
  currentCategory: "",
  idCurrentGood: "",
  dataCurrentGood: {},
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
    default:
      return state;
  }
};
