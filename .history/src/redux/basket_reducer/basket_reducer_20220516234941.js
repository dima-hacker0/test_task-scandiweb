import { ADD_GOOD_TO_CART, CHANGE_OPTIONS_GOOD_BASKET } from "../types";

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
    case CHANGE_OPTIONS_GOOD_BASKET:
    //   let { goods } = state;
    //   const { idGood, name, value } = action;
    //   goods.forEach((element) => {
    //     if (element.id === idGood) {
    //       element.options[name] = value;
    //     }
    //   });
    //   return {
    //     ...state,
    //     goods: [...goods],
    //   };
    default:
      return state;
  }
};
