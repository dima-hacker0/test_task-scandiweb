import { gql } from "@apollo/client";

import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: " http://localhost:4000/",
  cache: new InMemoryCache(),
});

export const GET_GOODS = (...props) => {
  const items = props.join(" ");

  return gql`
    query category($input: CategoryInput) {
      category(input: $input) {
        name
        products {
            ${items}
        }
      }
    }
  `;
};

export const GET_CURRENCIES = gql`
  query {
    currencies {
      label
      symbol
    }
  }
`;

export const createObjectGetGoods = (category) => {
  return {
    input: {
      title: category,
    },
  };
};
