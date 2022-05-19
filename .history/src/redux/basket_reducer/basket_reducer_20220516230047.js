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
      const { goods } = state;
      const { idGood, name, value } = action;
      goods.forEach((element) => {
        if (element.id === idGood) {
          console.log(element);
        }
      });
      return {
        ...state,
      };
    default:
      return state;
  }
};
