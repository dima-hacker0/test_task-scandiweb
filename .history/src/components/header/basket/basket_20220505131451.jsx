import { useQuery } from "@apollo/client";
import React from "react";
import Icons from "../../../icons/icons";
import { GET_GOODS } from "../../../query/query";
import classes from "./basket.module.css";
import { createObjectGetGoods } from "../../../query/query";

const Basket = () => {
  const { data, loading, error } = useQuery(
    GET_GOODS("category", "name", "brand"),
    createObjectGetGoods("tech")
  );
  console.log(data);

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
