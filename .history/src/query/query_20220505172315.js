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

export const createObjectGetGoods = (category) => {
  return {
    variables: {
      input: {
        title: category,
      },
    },
  };
};
