import classes from "select_item.module.css";
import React from "react";
class SelectItem extends React.Component {
  render() {
    return (
      <div data-currency="$" className={classes.item}>
        $ USD
      </div>
    );
  }
}