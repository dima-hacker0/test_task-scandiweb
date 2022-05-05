import { gql } from "@apollo/client";

export const GET_ALL_GOODS = gql`
  query category($input: CategoryInpu) {
    category(input: $input) {
      name
      products {
        category
      }
    }
  }
`;
