import { CHANGE_CURRENCY } from "./types";

const initialState = {
  label: "USD",
  symbol: "$",
};

export const headerReducer = (state = initialState, action) => {
  const {label, symbol}
  switch (action.type) {
    case CHANGE_CURRENCY:
      return {
        label.
      }

    default:
      return state;
  }
};
