import { gql } from "@apollo/client";

export const GET_ALL_GOODS = gql`
  query {
    category {
      products
    }
  }
`;
