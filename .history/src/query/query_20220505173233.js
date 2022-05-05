import { gql } from "@apollo/client";

// export const GET_GOODS = (...props) => {
//   const items = props.join(" ");

//   return gql`
//     query category($input: CategoryInput) {
//       category(input: $input) {
//         name
//         products {
//             ${items}
//         }
//       }
//     }
//   `;
// };

export const GET_GOODS = gql`
  query category($input: CategoryInput) {
    category(input: $input) {
      name
      products {
        name
      }
    }
  }
`;

export const createObjectGetGoods = (category) => {
  return {
    variables: {
      input: {
        title: category,
      },
    },
  };
};

const apolloClient = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

const qr = gql`
    query {
       getCustomers() {
           name
       }
    }
`;
const result = await apolloClient.query({
  query: qr,
  variables: {},
});
