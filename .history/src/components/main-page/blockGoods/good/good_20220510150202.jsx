import React from "react";
import classes from "./good.module.css";
class Good extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    const { img, price, symbol, title } = this.props;
    return (
      <div className={classes.card}>
        <img className={classes.img} src={img} alt="" />
        <p className={classes.title}>describe</p>
        <p className={classes.price}>{`${price} ${symbol}`}</p>
      </div>
    );
  }
}

export default Good;
