import { useQuery } from "@apollo/client";
import React from "react";
import Icons from "../../../icons/icons";
import { GET_ALL_GOODS } from "../../../query/query";
import classes from "./basket.module.css";

const Basket = () => {
  const { data, loading, error } = useQuery(GET_ALL_GOODS, {
    variables: {
      name: "clothes",
    },
  });
  console.log(data);
  //   debugger;
  const check = () => {
    console.log(this.data);
  };
  return (
    <div>
      <Icons className={classes.iconBasket} name="basket" />
    </div>
  );
};

export default Basket;
