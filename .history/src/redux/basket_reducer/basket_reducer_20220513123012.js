import { ADD_GOOD_TO_CART } from "../types";

const initialState = {
  goods: [],
};

export const basketReducer = (state = initialState, action) => {
  debugger;
  const a = {
    ...state,
    goods: [...state.goods, action.payload],
  };
  switch (action.type) {
    case ADD_GOOD_TO_CART:
      return {
        ...state,
        goods: [...state.goods, action.payload],
      };

    default:
      return state;
  }
};
