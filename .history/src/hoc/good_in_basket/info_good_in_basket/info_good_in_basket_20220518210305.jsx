import React from "react";

class InfoGoodInBasket extends React.Component {
  render() {
    const { classesCurrentGood, name, brand, price, symbol, options } =
      this.props;
    return (
      <div className={classesCurrentGood.options}>
        <p className={classesCurrentGood.name}>{name}</p>
        <p className={classesCurrentGood.brand}>{brand}</p>
        <p className={classesCurrentGood.price}>{`${price}${symbol}`}</p>
        <div className={classesCurrentGood.options}>{options}</div>
      </div>
    );
  }
}

export default InfoGoodInBasket;
