import React from "react";
import classes from "./good.module.css";
import { client } from "../../../../../query/query";
import { GET_GOOD_ID } from "../../../../../query/query";

class Good extends React.Component {
  componentDidMount() {
    const { id } = this.props;
    console.log(this.props);
    client.query({
      query: GET_GOOD_ID(
        "id",
        "name",
        "brand",
        "prices {amount, currency { symbol, label } }",
        "description",
        "gallery",
        "attributes { id, name, type, items { displayValue, value, id}}"
      ),
      variables: {
        id: id,
      },
    });
  }

  render() {
    return (
      <div className={classes.good}>
        <div className={classes.options}></div>
        <div className={classes.amount}></div>
        <div className={classes.img}></div>
      </div>
    );
  }
}

export default Good;
