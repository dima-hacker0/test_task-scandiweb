import { useQuery } from "@apollo/client";
import React from "react";
import Icons from "../../../icons/icons";
import { GET_ALL_GOODS } from "../../../query/query";
import classes from "./basket.module.css";

const Basket = () => {
    // const { data, loading, error } = useQuery(GET_ALL_GOODS);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    console.log(useQuery(GET_ALL_GOODS));
    debugger;

  check() {
    console.log(this.data);
  }
  render() {
    return (
      <div onClick={this.check}>
        <Icons className={classes.iconBasket} name="basket" />
      </div>
    );
  }
}

export default Basket;
