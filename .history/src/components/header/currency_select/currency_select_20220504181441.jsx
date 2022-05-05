import React from "react";
import Icons from "../../../icons/icons";
import classes from "./currency_select.module.css";

class CurrencySelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCurrency: "$",
    };
    this.selectBody = React.createRef();
    this.arrow = React.createRef();
    this.clickSelect = this.clickSelect.bind(this);
    this.clickItem = this.clickItem.bind(this);
  }

  clickSelect() {
    console.log(this.selectBody);
    this.selectBody.current.classList.toggle(classes.hideBodySelect);
    console.log(this.arrow);
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
          <Icons
            ref={this.arrow}
            name="arrow"
            width="6"
            height="3"
            className={classes.arrow}
          />
        </div>
        <div
          ref={this.selectBody}
          onClick={this.clickItem}
          className={`${classes.selectBody} ${classes.hideBodySelect}`}
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
