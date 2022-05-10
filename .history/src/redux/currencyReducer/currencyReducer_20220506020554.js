import { CHANGE_CURRENCY } from "../types";

const initialState = {
  label: "USD",
  symbol: "$",
};

export const currencyReducer = (state = initialState, action) => {
  const { label, symbol } = action;
  switch (action.type) {
    case CHANGE_CURRENCY:
      return action.payload;
    default:
      return state;
  }
};
