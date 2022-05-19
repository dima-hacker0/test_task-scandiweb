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
      name,
    } = this.props;
    debugger;
    return (
      <div className={classOptions}>
        <p className={className}>{name}</p>
        <p className={classBrand}>{brand}</p>
        <p className={classPrice}>{`${price}${symbol}`}</p>
        <div className={classOptions}>{options}</div>
      </div>
    );
  }
}

export default BlockInfoGoodInBasket;
