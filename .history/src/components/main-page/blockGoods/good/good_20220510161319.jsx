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
        <img className={classes.img} src={img} alt="" />
        <p className={classes.title}>{title}</p>
        <p className={classes.price}>{`${price} ${symbol}`}</p>
        {inStock ? <p>есть</p> : <p>нет</p>}
      </div>
    );
  }
}

export default Good;
