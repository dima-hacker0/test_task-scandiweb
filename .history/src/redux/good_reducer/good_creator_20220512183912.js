import {
  CHANGE_CURRENT_GOOD,
  SET_DATA_CURRENT_GOOD,
  SET_OPTIONS_GOOD,
} from "../types";

export const changeCurrentGoodCreator = (id) => {
  return {
    type: CHANGE_CURRENT_GOOD,
    payload: id,
  };
};

export const setDataCurrentGoodCreator = (data) => {
  return {
    type: SET_DATA_CURRENT_GOOD,
    payload: data,
  };
};

export const setOptionsGoodReducer = (name, value) => {
  return {
    type: SET_OPTIONS_GOOD,
    payload: { name: name, value: value },
  };
};
