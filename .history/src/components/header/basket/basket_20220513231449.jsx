import React from "react";
import Icons from "../../../icons/icons";
import classes from "./basket.module.css";
import OrderedGoods from "./ordered_goods/ordered_goods";

class Basket extends React.Component {
  render() {
    return (
      <div onClick={} className={classes.basket}>
        <Icons className={classes.iconBasket} name="basket" />
        <OrderedGoods />
      </div>
    );
  }
}

export default Basket;
