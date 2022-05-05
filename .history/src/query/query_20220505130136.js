import { gql } from "@apollo/client";
const GET_GOODS_CATEGORY = (category) => {};
export const GET_ALL_GOODS = gql`
  query category($input: CategoryInput) {
    category(input: $input) {
      name
      products {
        category
      }
    }
  }
`;
