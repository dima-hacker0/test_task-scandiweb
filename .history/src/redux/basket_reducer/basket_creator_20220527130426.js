import {
  ADD_GOOD_TO_CART,
  CHANGE_AMOUNT_GOOD_BAKSET,
  CHANGE_OPTIONS_GOOD_BASKET,
} from "../types";

export const addGoodToCartCreator = (options) => {
  return {
    type: ADD_GOOD_TO_CART,
    payload: options,
  };
};

export const changeGoodBasketCreator = (name, value, idGood) => {
  return {
    type: CHANGE_OPTIONS_GOOD_BASKET,
    name: name,
    value: value,
    idGood: idGood,
  };
};

export const ChangeAmountGoodBasketCreator = (id, addOrSubtract, options) => {
  return {
    type: CHANGE_AMOUNT_GOOD_BAKSET,
    id: id,
    addOrSubtract: addOrSubtract,
    options: options,
  };
};
