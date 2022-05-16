import React from "react";
import classes from "./ordered_goods.module.css";
import { connect } from "react-redux";

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

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, null)(OrderedGoods);
