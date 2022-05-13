import { ADD_GOOD_TO_CART } from "../types";

const addGoodToCartCreator = (options) => {
  return {
    type: ADD_GOOD_TO_CART,
    payload: options,
  };
};
