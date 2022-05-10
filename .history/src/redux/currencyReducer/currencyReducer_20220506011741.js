import { CHANGE_CURRENCY } from "./types";

const initialState = {
  label: "USD",
  symbol: "$",
};

export const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CURRENCY:
      break;

    default:
      return state;
  }
};
