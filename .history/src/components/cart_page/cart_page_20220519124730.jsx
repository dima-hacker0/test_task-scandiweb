import React from "react";
import classes from "./cart_page.module.css";
import BlockGoods from "./block_goods/block_goods";
import { connect } from "react-redux";
import { calculateTotalPrice } from "../../functions/functions";

class CartPage extends React.Component {
  render() {
    const {
      basket: { goods },
      currency: { label, symbol },
    } = this.props;

    const tax =
      Math.floor(calculateTotalPrice(goods, label) * 0.21 * 100) / 100;
    const totalPrice = calculateTotalPrice(goods, label);
    return (
      <section className={classes.cartSection}>
        <div className={classes.container}>
          <h2>CART PAGE</h2>
          <BlockGoods />
          <p className={classes.tax}>
            {"Tax 21%:     "}
            <span className={classes.boldSpan}>
              {tax}
              {symbol}
            </span>
          </p>
          <p className={classes.quantity}>
            Quantity: <span className={classes.boldSpan}>{goods.length}</span>
          </p>
          <p className={classes.total}>
            Total:{" "}
            <span className={classes.boldSpan}>
              {symbol}
              {totalPrice}
            </span>
          </p>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return { basket: state.basket, currency: state.currency };
};

export default connect(mapStateToProps, null)(CartPage);
