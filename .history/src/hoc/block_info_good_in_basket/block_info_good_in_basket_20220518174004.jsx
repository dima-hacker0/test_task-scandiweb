import React from "react";

class BlockInfoGoodInBasket extends React.Component {
  render() {
    console.log(this.props);
    const {
      classBrand,
      className,
      classOptions,
      classPrice,
      options,
      price,
      symbol,
    } = this.props;
    debugger;
    return (
      <div className={classOptions}>
        <p className={classes.name}>{name}</p>
        <p className={classes.brand}>{brand}</p>
        <p className={classPrice}>{`${price}${symbol}`}</p>
        <div className={classOptions}>{options}</div>
      </div>
    );
  }
}

export default BlockInfoGoodInBasket;
