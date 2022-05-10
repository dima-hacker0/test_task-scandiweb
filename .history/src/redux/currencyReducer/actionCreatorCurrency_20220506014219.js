import { CHANGE_CURRENCY } from "./types";

export const actionCreatorCurrency = (symbol, label) => {
  return {
    type: CHANGE_CURRENCY,
    payload: {
      symbol: symbol,
      label: label,
    },
  };
};
