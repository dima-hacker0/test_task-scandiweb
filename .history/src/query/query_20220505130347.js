import { gql } from "@apollo/client";
export const GET_GOODS = (props) => {
  return gql`
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
