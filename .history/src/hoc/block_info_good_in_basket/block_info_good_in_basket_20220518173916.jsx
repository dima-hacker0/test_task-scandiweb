import React from "react";

class BlockInfoGoodInBasket extends React.Component {
  render() {
    console.log(this.props);
    const { classBrand, className, classOptions, classPrice, options, price } =
      this.props;
    debugger;
    return (
      <div></div>
        <div className={classes.options}>
          <p className={classes.name}>{name}</p>
          <p className={classes.brand}>{brand}</p>
          <p className={classes.price}>{`${price}${symbol}`}</p>
          <div className={classes.options}>{options}</div>
        </div>
    );
  }
}

export default BlockInfoGoodInBasket;
