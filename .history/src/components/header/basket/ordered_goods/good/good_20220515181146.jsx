import React from "react";
import classes from "./good.module.css";
import { client } from "../../../../../query/query";
import { GET_GOOD_ID } from "../../../../../query/query";
import { connect } from "react-redux";
import { calculatePrice } from "../../../../../functions/functions";

class Good extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      infoIsLoaded: false,
    };
    this.good = {};
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
          "gallery",
          "attributes { id, name, type, items { displayValue, value, id}}"
        ),
        variables: {
          id: id,
        },
      })
      .then((data) => {
        this.good = data;
        this.setState({ infoIsLoaded: true });
      });
  }

  render() {
    const { infoIsLoaded } = this.state;
    if (!infoIsLoaded) {
      return <div>Loading...</div>;
    }
    console.log(this.props);
    const { name, brand, prices } = this.good.data.product;
    debugger;
    const {
      currency: { label, symbol },
    } = this.props;
    const price = calculatePrice(prices, label);
    return (
      <div className={classes.good}>
        <div className={classes.options}>
          <p className={classes.name}>{name}</p>
          <p className={classes.brand}>{brand}</p>
          <p className={classes.price}></p>
        </div>
        <div className={classes.amount}></div>
        <div className={classes.img}></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currency: state.currency,
  };
};

export default connect(mapStateToProps, null)(Good);
