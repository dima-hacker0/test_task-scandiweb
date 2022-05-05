import { gql } from "@apollo/client";

export const GET_ALL_GOODS = gql`
  query category($input: CategoryInput) {
    category(input: $input) {
      name
      products {
        name
        category
      }
    }
  }
`;
