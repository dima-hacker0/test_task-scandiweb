import React from "react";
import classes from "./ordered_goods.module.css";
import { connect } from "react-redux";
import Good from "./good/good";
import { calculateTotalPrice } from "../../../../functions/functions";

class OrderedGoods extends React.Component {
  render() {
    const {
      basket: { basketIsOpened, goods },
      currency: { label, symbol },
    } = this.props;
    const items = goods.map((data, i) => <Good data={data} key={i} />);
    const totalPrice = calculateTotalPrice(goods, label);
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

        {goods.length !== 0 ? (
          <div className={classes.priceBlock}>
            <div>Total</div>
            <div>50$</div>
          </div>
        ) : (
          <div className={classes.cartIsempty}>СART IS EMPTY</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { basket: state.basket, currency: state.currency };
};

export default connect(mapStateToProps, null)(OrderedGoods);
