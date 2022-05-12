import {
  CHANGE_CURRENT_GOOD,
  SET_DATA_CURRENT_GOOD,
  SET_OPTIONS_GOOD,
} from "../types";

const initialState = {
  currentCategory: null,
  idCurrentGood: null,
  dataCurrentGood: {},
  optionsCurrentGood: {},
};

export const goodReducer = (state = initialState, action) => {
  switch (action.type) {
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
