import React from "react";
import Icons from "../../../icons/icons";
import classes from "./currency_select.module.css";
import SelectItem from "./select_item/select_item";
import { connect } from "react-redux";
import { actionCreatorCurrency } from "../../../redux/currencyReducer/actionCreatorCurrency";
import { client, GET_CURRENCIES } from "../../../query/query";

class CurrencySelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenu: false,
    };

    this.clickSelect = this.clickSelect.bind(this);
    this.clickItem = this.clickItem.bind(this);

    this.data = client.query({
      query: GET_CURRENCIES,
    });
  }

  clickSelect() {
    const { activeMenu } = this.state;
    activeMenu
      ? this.setState({ activeMenu: false })
      : this.setState({ activeMenu: true });
  }

  clickItem(e) {
    const { dispatch } = this.props;

    const symbol = e.target.getAttribute("data-symbol");
    const label = e.target.getAttribute("data-label");
    this.setState({
      activeMenu: false,
    });
    dispatch(actionCreatorCurrency(symbol, label));
  }

  async sss() {}

  render() {
    const {
      clickSelect,
      state: { activeMenu },
    } = this;
    const { symbol } = this.props;

    return (
      <div className={classes.select}>
        <div onClick={clickSelect} className={classes.selectHeader}>
          <span className={classes.currentSelect}>{symbol}</span>
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
          {/* {items} */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state.currency;
};

export default connect(mapStateToProps, null)(CurrencySelect);
