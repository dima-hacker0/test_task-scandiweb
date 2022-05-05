import classes from "select_item.module.css";
import React from "react";
class SelectItem extends React.Component {
  constructor(props) {
    const { currency, symbol } = props;
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
