import React from "react";
import Icons from "../../../icons/icons";
import classes from "./currency_select.module.css";

class CurrencySelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCurrency: "$",
      activeMenu: false,
    };
    this.clickSelect = this.clickSelect.bind(this);
    this.clickItem = this.clickItem.bind(this);
  }

  clickSelect() {
    this.activeMenu
      ? this.setState({ activeMenu: false })
      : this.setState({ activeMenu: true });
    // this.selectBody.current.classList.toggle(classes.hideBodySelect);
    // this.arrow.current.className.toggle();
  }

  clickItem(e) {
    const { target } = e;
    if (target.classList.contains(classes.selectItem)) {
      const value = target.getAttribute("data-currency");
      this.setState({
        currentCurrency: value,
      });
    }
  }

  render() {
    return (
      <div className={classes.select}>
        <div onClick={this.clickSelect} className={classes.selectHeader}>
          <span className={classes.currentSelect}>
            {this.state.currentCurrency}
          </span>
          <Icons name="arrow" width="6" height="3" className={classes.arrow} />
        </div>
        <div
          onClick={this.clickItem}
          className={
            this.activeMenu
              ? `${classes.selectBody} ${classes.hideBodySelect}`
              : classes.selectBody
          }
        >
          <div data-currency="$" className={classes.item}>
            $ USD
          </div>
          <div data-currency="€" className={classes.item}>
            € EUR
          </div>
          <div data-currency="¥" className={classes.item}>
            ¥ JPY
          </div>
        </div>
      </div>
    );
  }
}

export default CurrencySelect;
