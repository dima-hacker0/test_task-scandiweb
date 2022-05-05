import React from "react";
import classes from "./currency_select.module.css";

class CurrencySelect extends React.Component {
  render() {
    return (
      <div className={classes.select}>
        <div className={classes.selectHeader}></div>
        <div className={classes.selectBody}>
          <div className={classes.selectItem}></div>
        </div>
      </div>
    );
  }
}
export default CurrencySelect;
