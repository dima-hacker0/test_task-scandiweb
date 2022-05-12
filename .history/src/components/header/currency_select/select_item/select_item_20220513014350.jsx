import React from "react";
import classes from "./select_item.module.css";

class SelectItem extends React.Component {
  render() {
    const { symbol, label, clickItem } = this.props;

    return (
      <div
        data-symbol={symbol}
        data-label={label}
        className={classes.item}
        onClick={clickItem}
      >
        {`${symbol} ${label}`}
      </div>
    );
  }
}

export default SelectItem;
