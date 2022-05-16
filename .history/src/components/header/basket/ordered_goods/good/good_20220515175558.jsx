import React from "react";
import classes from "./good.module.css";
import { client } from "../../../../../query/query";
import { GET_GOOD_ID } from "../../../../../query/query";

class Good extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      infoIsLoaded: false,
    };
    this.product = {};
  }
  componentDidMount() {
    const { id } = this.props.data;
    this.setState({ infoIsLoaded: false });
    client
      .query({
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
      })
      .then((data) => {
        this.product = data;
        this.setState({ infoIsLoaded: true });
      });
  }

  render() {
    const {
      state: { infoIsLoaded },
      product,
    } = this;
    console.log(this.product);
    if (infoIsLoaded) {
      return (
        <div className={classes.good}>
          <div className={classes.options}>
            <p className={classes.name}></p>
            <p className={classes.brand}></p>
          </div>
          <div className={classes.amount}></div>
          <div className={classes.img}></div>
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

export default Good;
