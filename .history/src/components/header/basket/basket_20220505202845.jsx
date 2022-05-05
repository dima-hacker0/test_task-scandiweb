import { useQuery } from "@apollo/client";
import React from "react";
import Icons from "../../../icons/icons";
import { GET_GOODS } from "../../../query/query";
import classes from "./basket.module.css";
import { createObjectGetGoods } from "../../../query/query";
import { render } from "@testing-library/react";
import { client } from "../../..";

class Basket extends React.Component {
  constructor(props) {
    super(props);
    const data = client.query({
      query: GET_GOODS("id", "name", "brand"),
      variables: createObjectGetGoods("tech"),
    });
    console.log(createObjectGetGoods("tech"));
    data.then((result) => console.log(result));
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
