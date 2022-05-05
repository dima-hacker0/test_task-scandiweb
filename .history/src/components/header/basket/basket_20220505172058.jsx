import { useQuery } from "@apollo/client";
import React from "react";
import Icons from "../../../icons/icons";
import { GET_GOODS } from "../../../query/query";
import classes from "./basket.module.css";
import { createObjectGetGoods } from "../../../query/query";
import { render } from "@testing-library/react";
import { ApolloClient } from "@apollo/client";
class Basket extends React.Component {
  // const { data, loading, error } = useQuery(
  //   GET_GOODS("category", "name", "brand"),
  //   createObjectGetGoods("all")
  // );
  constructor() {
    const data = ApolloClient.query({
      query: GET_GOODS("all"),
      variables: {},
    });
    console.log(data);
  }
  render() {
    return (
      <div>
        <Icons className={classes.iconBasket} name="basket" />
      </div>
    );
  }
}

export default Basket;
