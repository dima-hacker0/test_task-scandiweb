import { CHANGE_CATEGORY } from "../types";

const changeCategoryCreator = (category) => {
  return {
    type: CHANGE_CATEGORY,
    payload: category,
  };
};
