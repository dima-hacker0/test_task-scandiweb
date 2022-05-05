import React from "react";
import classes from "./currency_select.module.css";

class CurrencySelect extends React.Component {
  render() {
    return (
      <div className={classes.select}>
        <div className={classes.selectHeader}>
          <span className={classes.currentSelect}></span>
        </div>
        <div className={classes.selectBody}>
          <div className={classes.selectItem}>value 1</div>
          <div className={classes.selectItem}>value 2</div>
          <div className={classes.selectItem}>value 3</div>
          <div className={classes.selectItem}>value 4</div>
        </div>
      </div>
    );
  }
}
export default CurrencySelect;
