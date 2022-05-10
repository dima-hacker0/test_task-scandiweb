import {
  CHANGE_CATEGORY,
  CHANGE_CURRENT_GOOD,
  SET_DATA_CURRENT_GOOD,
} from "../types";

export const changeCategoryCreator = (category) => {
  return {
    type: CHANGE_CATEGORY,
    payload: category,
  };
};

export const changeCurrentGoodCreator = (id) => {
  return {
    type: CHANGE_CURRENT_GOOD,
    payload: id,
  };
};

export const setDataCurrentGood = (data) => {
  return {
    action: SET_DATA_CURRENT_GOOD,
    payload: data,
  };
};
