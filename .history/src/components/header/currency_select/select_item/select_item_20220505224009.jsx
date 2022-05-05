import React from "react";
import classes from "./select_item.module.css";

class SelectItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { symbol, label, clickItem } = this.props;

    return (
      <div
        data-currency={symbol}
        className={classes.item}
        onClick={clickItem(symbol)}
      >
        {`${symbol} ${label}`}
      </div>
    );
  }
}

export default SelectItem;
