import { useQuery } from "@apollo/client";
import React from "react";
import Icons from "../../../icons/icons";
import { GET_ALL_GOODS } from "../../../query/query";
import classes from "./basket.module.css";

const Basket = () => {
  //   constructor(props) {
  //     super(props);
  //   }
  const { data, loading, error } = useQuery(GET_ALL_GOODS);

  const check = () => {
    console.log(this.data);
  };

  return (
    <div onClick={this.check}>
      <Icons className={classes.iconBasket} name="basket" />
    </div>
  );
};

export default Basket;
