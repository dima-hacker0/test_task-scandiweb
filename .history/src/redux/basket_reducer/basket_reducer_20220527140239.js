import {
  ADD_GOOD_TO_CART,
  CHANGE_OPTIONS_GOOD_BASKET,
  CHANGE_AMOUNT_GOOD_BAKSET,
  DELETE_GOOD_FROM_BASKET,
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
        if (
          element.id === action.id &&
          JSON.stringify(element.options) === JSON.stringify(action.options)
        ) {
          // if (element.amount === 1 && action.addOrSubtract !== "add") {
          //   return state;
          // }
          element.amount =
            action.addOrSubtract === "add"
              ? element.amount + 1
              : element.amount - 1;
        }
      });
      return {
        ...state,
        goods: [...goods],
      };
    case DELETE_GOOD_FROM_BASKET:
      let goodsAfterDelete = goods;
      goods.forEach((element, i) => {
        if (
          element.id === action.id &&
          JSON.stringify(element.options) === JSON.stringify(action.options)
        ) {
          goodsAfterDelete.splice(i, 1);
        }
      });
      return {
        ...state,
        goods: [...goodsAfterDelete],
      };
    default:
      return state;
  }
};
