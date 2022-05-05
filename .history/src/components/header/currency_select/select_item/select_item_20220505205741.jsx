import React from "react";
import classes from "./select_item.module.css";

class SelectItem extends React.Component {
  render() {
    return (
      <div data-currency="$" className={classes.item}>
        $ USD
      </div>
    );
  }
}

export default SelectItem;
