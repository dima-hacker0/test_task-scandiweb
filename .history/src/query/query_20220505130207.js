import { gql } from "@apollo/client";
export const GET_GOODS_CATEGORY = (category) => {
  return `
    query category($input: CategoryInput) {
        category(input: $input) {
          name
          products {
            category
          }
        }
      }
    `;
};
