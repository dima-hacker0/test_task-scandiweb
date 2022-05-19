import React from "react";
import classes from "./cart_page.module.css";
import BlockGoods from "./block_goods/block_goods";

class CartPage extends React.Component {
  render() {
    return (
      <section className={classes.cartSection}>
        <div className={classes.container}></div>
      </section>
    );
  }
}

export default CartPage;
