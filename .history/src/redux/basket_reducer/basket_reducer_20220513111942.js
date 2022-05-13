import { ADD_GOOD_TO_CART } from "../types";

const initialState = {
  goods: [],
};

export const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GOOD_TO_CART:
        return {
            ...state, goods: 
        }

    default:
      return state;
  }
};
