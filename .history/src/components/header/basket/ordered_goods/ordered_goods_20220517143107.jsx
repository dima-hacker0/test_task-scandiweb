import React from "react";
import classes from "./ordered_goods.module.css";
import { connect } from "react-redux";
import Good from "./good/good";

class OrderedGoods extends React.Component {
  render() {
    const { basketIsOpened, goods } = this.props;
    const items = goods.map((data, i) => <Good data={data} key={i} />);
    return (
      <div
        className={
          basketIsOpened
            ? `${classes.orderedGoods} ${classes.orderedGoodsOn}`
            : classes.orderedGoods
        }
      >
        <h5 className={classes.numberOfGoods}>
          My Bag,
          <span
            className={classes.numberItemsSpan}
          >{` ${goods.length} items`}</span>
        </h5>
        <div className={classes.items}>{items}</div>
        <div className={classes.priceBlock}>
          <div>Price</div>
          <div>50$</div>
        </div>
        {goods.length === 0 ? (
          <div className={classes.cartIsempty}>СART IS EMPTY</div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state.basket;
};

export default connect(mapStateToProps, null)(OrderedGoods);
