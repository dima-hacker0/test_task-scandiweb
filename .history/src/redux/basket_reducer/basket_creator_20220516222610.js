import { ADD_GOOD_TO_CART, CHANGE_OPTIONS_GOOD } from "../types";

export const addGoodToCartCreator = (options) => {
  return {
    type: ADD_GOOD_TO_CART,
    payload: options,
  };
};

export const changeGoodBasketCreator = (name, value, idGood) => {
  return {
    type: CHANGE_OPTIONS_GOOD,
    name: name,
    value: value,
    idGood: idGood,
  };
};
