import {
  ADD_GOOD_TO_CART,
  CHANGE_OPTIONS_GOOD_BASKET,
  CHANGE_AMOUNT_GOOD_BAKSET,
} from "../types";

const initialState = {
  goods: [],
};

export const basketReducer = (state = initialState, action) => {
  const goods = JSON.parse(JSON.stringify(state.goods));

  switch (action.type) {
    case ADD_GOOD_TO_CART:
      return {
        ...state,
        goods: [...state.goods, action.payload],
      };
    case CHANGE_OPTIONS_GOOD_BASKET:
      goods.forEach((element) => {
        if (element.id === action.idGood) {
          element.options[action.name] = action.value;
        }
      });
      return {
        ...state,
        goods: [...goods],
      };
    case CHANGE_AMOUNT_GOOD_BAKSET:
      goods.forEach((element) => {
        if (element.id === action.id) {
          debugger;
          element.amount =
            element.addOrSubtract === "add"
              ? element.amount + 1
              : element.amount - 1;
        }
      });
      return {
        ...state,
        goods: [...goods],
      };

    default:
      return state;
  }
};
