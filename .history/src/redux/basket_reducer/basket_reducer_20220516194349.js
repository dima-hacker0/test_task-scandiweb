import { ADD_GOOD_TO_CART, CHANGE_OPTIONS_GOOD } from "../types";

const initialState = {
  goods: [],
};

export const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GOOD_TO_CART:
      return {
        ...state,
        goods: [...state.goods, action.payload],
      };
    case CHANGE_OPTIONS_GOOD:
      return {
        ...state,
        goods: [...state.goods, action.payload],
      };
    default:
      return state;
  }
};
