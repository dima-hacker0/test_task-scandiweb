import React from "react";

class InfoGoodInBasket extends React.Component {
  render() {
    const { classesCurrentGood, name, brand, price, symbol, options } =
      this.props;
    return (
      <div className={classesCurrentGood.optionsBlock}>
        <p className={classesCurrentGood.name}>{name}</p>
        <p className={classesCurrentGood.brand}>{brand}</p>
        <p className={classesCurrentGood.price}>{`${symbol}${price}`}</p>
        <div className={classesCurrentGood.optionsBlock}>{options}</div>
      </div>
    );
  }
}

export default InfoGoodInBasket;
