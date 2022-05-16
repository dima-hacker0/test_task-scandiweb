import React from "react";
import classes from "./ordered_goods.module.css";

class OrderedGoods extends React.Component {
  render() {
    const { basketIsOpened } = this.props;

    return (
      <div
        className={
          basketIsOpened
            ? `${classes.orderedGoods} ${classes.orderedGoodsOn}`
            : classes.orderedGoods
        }
      ></div>
    );
  }
}
export default OrderedGoods;
