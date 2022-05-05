import React from "react";
import classes from "./currency_select.module.css";

class CurrencySelect extends React.Component {
  render() {
    return (
      <div className={classes.select}>
        <div className={classes.header}></div>
      </div>
    );
  }
}
export default CurrencySelect;
