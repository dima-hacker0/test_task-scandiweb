import React from "react";

class InfoGoodInBasket extends React.Component {
  render() {
    const { classes } = this.props;
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

export default InfoGoodInBasket;
