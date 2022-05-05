import { gql } from "@apollo/client";
export const GET_GOODS_CATEGORY = (props) => {
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
