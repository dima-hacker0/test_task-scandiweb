import React from "react";
import classes from "./good.module.css";
class Good extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    const { img, price, symbol, title, inStock } = this.props;
    return (
      <div className={inStock ? classes.cardInStock : classes.cardOutOfStock}>
        <div className={classes.blockImg}>
          <img className={classes.img} src={img} alt="" />
          {inStock ? (
            <p className={classes.inscriptionOutOfStock}>OUT OF STOCK</p>
          ) : null}
        </div>
        <p className={classes.title}>{title}</p>
        <p className={classes.price}>{`${price} ${symbol}`}</p>
      </div>
    );
  }
}

export default Good;
