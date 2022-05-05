import { gql } from "@apollo/client";
export const GET_GOODS = (...props) => {
  const items = props.join(" ");
  console.log(items);
  debugger;
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
