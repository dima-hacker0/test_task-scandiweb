import React from "react";
import classes from "./good.module.css";
import { client } from "../../../../../query/query";
import { GET_GOOD_ID } from "../../../../../query/query";
import { connect } from "react-redux";
import { calculatePrice } from "../../../../../functions/functions";
import ChangeAmount from "../../../../../hoc/changeAmount/changeAmount";
import BlockСhooseOption from "../../../../../hoc/block_choose_option/block_choose_option";

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

  clickItem(e) {
    const { name } = this.props.data;
    console.log(this.props);
    const value = e.target.getAttribute("data-value");
    console.log(name);
    console.log(value);
  }

  render() {
    const { infoIsLoaded } = this.state;
    if (!infoIsLoaded) {
      return <div>Loading...</div>;
    }

    const { name, brand, prices, attributes, gallery, id } =
      this.good.data.product;
    const {
      currency: { label, symbol },
      data: { options: optionsGoodInBasket, amount },
    } = this.props;
    const price = calculatePrice(prices, label);

    const options = attributes.map((data, i) => (
      <BlockСhooseOption
        id={id}
        key={i}
        data={data}
        size={{
          swatchSize: 16,
          noSwatch: { noSwatchHeight: 24, noSwatchWidth: 24 },
        }}
        chooseOption={this.clickItem}
        good={optionsGoodInBasket}
        fontSizeItem={10}
      />
    ));

    return (
      <div className={classes.good}>
        <div className={classes.options}>
          <p className={classes.name}>{name}</p>
          <p className={classes.brand}>{brand}</p>
          <p className={classes.price}>{`${price}${symbol}`}</p>
          <div className={classes.options}>{options}</div>
        </div>
        <ChangeAmount amount={amount} size={24} />
        <img className={classes.img} src={gallery[0]} alt="img" />
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
