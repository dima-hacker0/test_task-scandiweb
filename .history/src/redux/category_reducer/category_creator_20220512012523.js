export const changeCategoryCreator = (category) => {
  return {
    type: CHANGE_CATEGORY,
    payload: category,
  };
};
