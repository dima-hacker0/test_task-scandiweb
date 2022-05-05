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
    const data = client.query({
      query: GET_GOODS("id", "name", "brand"),
      variables: createObjectGetGoods("tech"),
    });
    console.log(createObjectGetGoods("tech"));
    data.then((result) => console.log(result));
  }

  clickSelect() {
    this.state.activeMenu
      ? this.setState({ activeMenu: false })
      : this.setState({ activeMenu: true });
  }

  clickItem(e) {
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
