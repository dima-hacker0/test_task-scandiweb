import { CHANGE_CURRENCY } from "../types";

const initialState = {
  label: "",
  symbol: "",
};

export const currencyReducer = (state = initialState, action) => {
  debugger;
  switch (action.type) {
    case CHANGE_CURRENCY:
      return action.payload;
    default:
      return state;
  }
};
