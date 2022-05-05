import React from "react";
import Icons from "../../../icons/icons";
import classes from "./currency_select.module.css";
import { client, GET_CURRENCIES } from "../../../query/query";
import { currencies } from "../../../data/data";
import SelectItem from "./select_item/select_item";
class CurrencySelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCurrency: "$",
      activeMenu: false,
    };
    this.clickSelect = this.clickSelect.bind(this);
    this.clickItem = this.clickItem.bind(this);

    this.items = currencies.map((data) => (
      <SelectItem label={data.label} symbol={data.symbol} />
    ));
  }

  clickSelect() {
    this.state.activeMenu
      ? this.setState({ activeMenu: false })
      : this.setState({ activeMenu: true });
  }

  clickItem(e) {
    debugger;
    const { target } = e;
    if (target.classList.contains(classes.item)) {
      const value = target.getAttribute("data-currency");
      this.setState({
        currentCurrency: value,
        activeMenu: false,
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
          <span
            className={
              this.state.activeMenu
                ? classes.arrowWrap
                : classes.activeArrowWrap
            }
          >
            <Icons name="arrow" width="6" height="3" />
          </span>
        </div>
        <div
          onClick={this.clickItem}
          className={
            this.state.activeMenu
              ? classes.selectBody
              : `${classes.selectBody} ${classes.hideBodySelect}`
          }
        >
          {this.items}
        </div>
      </div>
    );
  }
}

export default CurrencySelect;