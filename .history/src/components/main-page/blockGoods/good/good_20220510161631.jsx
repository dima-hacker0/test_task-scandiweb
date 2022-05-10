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
        <div>
          <img className={classes.img} src={img} alt="" />
        </div>
        <p className={classes.title}>{title}</p>
        <p className={classes.price}>{`${price} ${symbol}`}</p>
        {inStock ? <p>OUT OF STOCK</p> : null}
      </div>
    );
  }
}

export default Good;
