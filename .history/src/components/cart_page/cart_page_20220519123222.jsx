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
    const totalPrice = tax + calculateTotalPrice(goods, label);
    return (
      <section className={classes.cartSection}>
        <div className={classes.container}>
          <h2>CART PAGE</h2>
          <BlockGoods />
          <p>
            Tax 21%:
            <span className={classes.priceSpan}>
              {tax}
              {symbol}
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
