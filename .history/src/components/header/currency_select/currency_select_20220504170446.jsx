import React from "react";
import classes from "./currency_select.module.css";

class CurrencySelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCurrency: "$",
    };
    this.clickItem = this.clickItem.bind(this);
  }

  clickItem(e) {
    if (e.target.classList.contains(classes.selectItem)) {
      const value = e.target.getAttribute("data-currency");
      console.log(value);
      this.setState({
        currentCurrency: value,
      });
    } else {
      return;
    }
  }

  render() {
    return (
      <div className={classes.select}>
        <div className={classes.selectHeader}>
          <span className={classes.currentSelect}>
            {this.state.currentCurrency}
          </span>
        </div>
        <div onClick={this.clickItem} className={classes.selectBody}>
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
