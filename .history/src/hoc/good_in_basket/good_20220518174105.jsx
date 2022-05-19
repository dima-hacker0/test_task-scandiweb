import React from "react";
import classes from "./good.module.css";
import { client } from "../../../../../query/query";
import { GET_GOOD_ID } from "../../../../../query/query";
import { connect } from "react-redux";
import { calculatePrice } from "../../../../../functions/functions";
import ChangeAmount from "../../../../../hoc/changeAmount/changeAmount";
import BlockChooseOptionMiniCart from "./block_options_mini_cart";
import BlockInfoGoodInBasket from "../../../../../hoc/block_info_good_in_basket/block_info_good_in_basket";

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

    const { name, brand, prices, attributes, gallery, id } =
      this.good.data.product;
    const {
      currency: { label, symbol },
      data: { options: optionsGoodInBasket, amount },
    } = this.props;
    const price = calculatePrice(prices, label);

    const options = attributes.map((data, i) => (
      <BlockChooseOptionMiniCart
        optionsGoodInBasket={optionsGoodInBasket}
        idGood={id}
        data={data}
        key={i}
      />
    ));

    return (
      <div className={classes.good}>
        <BlockInfoGoodInBasket
          classOptions={classes.options}
          className={classes.name}
          classBrand={classes.brand}
          classPrice={classes.price}
          price={price}
          options={options}
          symbol={symbol}
          name={name}
          brand={brand}
        />
        <ChangeAmount id={id} amount={amount} size={24} />
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
