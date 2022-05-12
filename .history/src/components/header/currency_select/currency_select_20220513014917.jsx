import React from "react";
import Icons from "../../../icons/icons";
import classes from "./currency_select.module.css";
import { connect } from "react-redux";
import { actionCreatorCurrency } from "../../../redux/currency_reducer/currency_creator";
import { client, GET_CURRENCIES } from "../../../query/query";
import { createRef } from "react";

class CurrencySelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenu: false,
      currencies: [],
    };

    this.clickSelect = this.clickSelect.bind(this);
    this.clickItem = this.clickItem.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.listItems = createRef();
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    client
      .query({
        query: GET_CURRENCIES,
      })
      .then((result) => {
        this.setState({ currencies: result.data.currencies });
        const { symbol: defaultSymbol, label: defaultLabel } =
          result.data.currencies[0];
        dispatch(actionCreatorCurrency(defaultSymbol, defaultLabel));
      });

    document.addEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside(e) {
    console.log(e.target.className);
    // console.log(this.listItems.current);
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

  render() {
    const {
      clickSelect,
      state: { activeMenu, currencies },
      props: { symbol },
    } = this;

    const items = currencies.map((data, i) => {
      const { symbol, label } = data;
      return (
        <div
          key={i}
          data-symbol={symbol}
          data-label={label}
          className={classes.item}
          onClick={this.clickItem}
        >
          {`${symbol} ${label}`}
        </div>
      );
    });

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
          ref={this.listItems}
          className={
            activeMenu
              ? classes.selectBody
              : `${classes.selectBody} ${classes.hideBodySelect}`
          }
        >
          {items}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state.currency;
};

export default connect(mapStateToProps, null)(CurrencySelect);
