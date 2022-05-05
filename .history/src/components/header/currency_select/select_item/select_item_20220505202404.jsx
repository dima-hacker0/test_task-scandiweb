import classes from "select_item.module.css";
import React from "react";
import { GET_CURRENCIES } from "../../../../query/query";
class SelectItem extends React.Component {
  constructor(props) {
    // const data = client.query({
    //   query: GET_CURRENCY,
    //   variables: createObjectGetGoods("all"),
    // });
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
