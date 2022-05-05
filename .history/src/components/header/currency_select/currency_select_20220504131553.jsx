import React from "react";
import classes from "currency_select.module.css";
class CurrencySelect extends React.Component {
  render() {
    return (
      <select className={classes.select}>
        <option value="">$ USD</option>
        <option value="">€ EUR</option>
        <option value="">¥ JPY</option>
      </select>
    );
  }
}
export default CurrencySelect;
