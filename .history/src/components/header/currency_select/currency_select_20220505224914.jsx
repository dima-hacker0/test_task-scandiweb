import React from "react";
import Icons from "../../../icons/icons";
import classes from "./currency_select.module.css";
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
      <SelectItem
        label={data.label}
        symbol={data.symbol}
        clickItem={this.clickItem}
      />
    ));
  }

  clickSelect() {
    const { activeMenu } = this.state;
    activeMenu
      ? this.setState({ activeMenu: false })
      : this.setState({ activeMenu: true });
  }

  clickItem(e) {
    const value = e.target.getAttribute("data-currency");
    this.setState({
      currentCurrency: value,
      activeMenu: false,
    });
  }

  render() {
    const { activeMenu } = this.state;
    return (
      <div className={classes.select}>
        <div onClick={this.clickSelect} className={classes.selectHeader}>
          <span className={classes.currentSelect}>
            {this.state.currentCurrency}
          </span>
          <span
            className={activeMenu ? classes.arrowWrap : classes.activeArrowWrap}
          >
            <Icons name="arrow" width="6" height="3" />
          </span>
        </div>
        <div
          className={
            activeMenu
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
