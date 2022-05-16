import React from "react";
import classes from "./ordered_goods.module.css";
import { connect } from "react-redux";

class OrderedGoods extends React.Component {
  render() {
    const { basketIsOpened, goods } = this.props;
    console.log(this.props);
    return (
      <div
        className={
          basketIsOpened
            ? `${classes.orderedGoods} ${classes.orderedGoodsOn}`
            : classes.orderedGoods
        }
      >
        <h5>{`My Bag ${goods.length} items`}</h5>
        <div className={classes.items}></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state.basket;
};

export default connect(mapStateToProps, null)(OrderedGoods);
