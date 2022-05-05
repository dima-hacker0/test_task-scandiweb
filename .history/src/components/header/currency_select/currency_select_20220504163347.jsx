import React from "react";
import classes from "./currency_select.module.css";

class CurrencySelect extends React.Component {
  render() {
    clickItem() {

    } 
    return (
      <div className={classes.select}>
        <div className={classes.selectHeader}>
          <span className={classes.currentSelect}>value 1</span>
        </div>
        <div className={classes.selectBody}>
          <div data-currency="$" className={classes.selectItem}>
            $ USD
          </div>
          <div data-currency="€" className={classes.selectItem}>
            € EUR
          </div>
          <div data-currency="¥" className={classes.selectItem}>
            ¥ JPY
          </div>
        </div>
      </div>
    );
  }
}

export default CurrencySelect;
