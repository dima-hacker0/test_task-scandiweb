import React from "react";
import Icons from "../../../../icons/icons";
import classes from "./good.module.css";
class Good extends React.Component {
  constructor(props) {
    super(props);
    this.clickCard = this.clickCard.bind(this);
    console.log(props);
  }

  clickCard() {
    const { inStock } = this.props;
    if (!inStock) return;
  }

  render() {
    const { img, price, symbol, title, inStock } = this.props;
    return (
      <div
        onClick={this.clickCard}
        className={inStock ? classes.cardInStock : classes.cardOutOfStock}
      >
        <div className={classes.blockImg}>
          <img className={classes.img} src={img} alt="" />
          <Icons name="basketCard" />
          {inStock ? null : (
            <p className={classes.inscriptionOutOfStock}>OUT OF STOCK</p>
          )}
        </div>
        <p className={classes.title}>{title}</p>
        <p className={classes.price}>{`${price} ${symbol}`}</p>
      </div>
    );
  }
}

export default Good;
