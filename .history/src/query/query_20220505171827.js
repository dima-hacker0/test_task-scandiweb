import { gql } from "@apollo/client";

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
// const { data, loading, error } = useQuery(
//   GET_GOODS("category", "name", "brand"),
//   createObjectGetGoods("all")
// );
export const createObjectGetGoods = (category) => {
  return {
    variables: {
      input: {
        title: category,
      },
    },
  };
};
