import React from "react";
import classes from "./select_item.module.css";

class SelectItem extends React.Component {
  constructor(props) {
    const { label, symbol } = props;
  }
  render() {
    return (
      <div data-currency="$" className={classes.item}>
        $ USD
      </div>
    );
  }
}

export default SelectItem;
