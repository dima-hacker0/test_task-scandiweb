import { CHANGE_CURRENCY } from "./types";

const actionCreatorCurrency = (symbol, label) => {
  return {
    type: CHANGE_CURRENCY,
  };
};
