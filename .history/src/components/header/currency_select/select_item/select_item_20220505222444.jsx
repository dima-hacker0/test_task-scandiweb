import React from "react";
import classes from "./select_item.module.css";

class SelectItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div data-currency="$" className={classes.item}>
        {`${this.symbol} ${this.label}`}
      </div>
    );
  }
}

export default SelectItem;
