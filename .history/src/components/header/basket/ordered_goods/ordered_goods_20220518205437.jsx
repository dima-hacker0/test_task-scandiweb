import React from "react";
import classes from "./ordered_goods.module.css";
import { connect } from "react-redux";
import Good from "../../../../hoc/good_in_basket/good";
import { calculateTotalPrice } from "../../../../functions/functions";
import { NavLink } from "react-router-dom";
import classesCurrentGood from "../../../../classes/good_basket_mini_cart.module.css";

class OrderedGoods extends React.Component {
  render() {
    const {
      basketIsOpened,
      basket: { goods },
      currency: { label, symbol },
    } = this.props;

    const items = goods.map((data, i) => (
      <Good classesCurrentGood={classesCurrentGood} data={data} key={i} />
    ));
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
        <div
          style={goods.length === 0 ? { height: 0 } : null}
          className={classes.itemsBlock}
        >
          <div className={classes.items}>{items}</div>
        </div>

        {goods.length !== 0 ? (
          <div className={classes.bottomBlock}>
            <div className={classes.priceBlock}>
              <div>Total</div>
              <div>{`${totalPrice}${symbol}`}</div>
            </div>
            <div className={classes.buttons}>
              <NavLink to="/cart-page">
                <button className={classes.buttonViewBag}>VIEW BAG</button>
              </NavLink>
              <button className={classes.buttonCheckOut}>CHECK OUT</button>
            </div>
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
