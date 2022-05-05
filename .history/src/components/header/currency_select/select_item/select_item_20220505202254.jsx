import classes from "select_item.module.css";
import React from "react";
class SelectItem extends React.Component {
  constructor(props) {
    const data = client.query({
      query: GET_GOODS("id", "name", "brand"),
      variables: createObjectGetGoods("all"),
    });
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
