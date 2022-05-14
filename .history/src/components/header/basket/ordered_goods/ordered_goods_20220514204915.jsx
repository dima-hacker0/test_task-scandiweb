import React from "react";
import classes from "./ordered_goods.module.css";

class OrderedGoods extends React.Component {
  render() {
    const { basketIsOpened } = this.props;

    return (
      <div>
        <div
          className={
            basketIsOpened
              ? `${classes.orderedGoods} ${classes.orderedGoodsOn}`
              : classes.orderedGoods
          }
        ></div>
      </div>
    );
  }
}
export default OrderedGoods;
