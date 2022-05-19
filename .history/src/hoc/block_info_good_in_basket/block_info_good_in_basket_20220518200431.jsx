import React from "react";

class BlockInfoGoodInBasket extends React.Component {
  render() {
    return (
      <div className={classes.options}>
        <p className={classes.name}>{name}</p>
        <p className={classes.brand}>{brand}</p>
        <p className={classes.price}>{`${price}${symbol}`}</p>
        <div className={classes.options}>{options}</div>
      </div>
    );
  }
}

export de