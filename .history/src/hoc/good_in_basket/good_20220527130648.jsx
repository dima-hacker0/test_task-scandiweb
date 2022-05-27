import React from "react";
import { client } from "../../query/query";
import { GET_GOOD_ID } from "../../query/query";
import { connect } from "react-redux";
import { calculatePrice } from "../../functions/functions";
import ChangeAmount from "./change_amount/change_amount";
import BlockChooseOptionMiniCart from "../../components/header/basket/ordered_goods/good/block_options_mini_cart";
import InfoGoodInBasket from "./info_good_in_basket/info_good_in_basket";
import Slider from "./slider/slider";

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
      addSlider = false,
      classesCurrentGood,
      currency: { label, symbol },
      data: { options: optionsGoodInBasket, amount },
    } = this.props;

    const price = calculatePrice(prices, label);

    const options = attributes.map((data, i) => (
      <BlockChooseOptionMiniCart
        classesCurrentGood={classesCurrentGood}
        optionsGoodInBasket={optionsGoodInBasket}
        idGood={id}
        data={data}
        key={i}
      />
    ));
    debugger;
    return (
      <div className={classesCurrentGood.good}>
        <InfoGoodInBasket
          classesCurrentGood={classesCurrentGood}
          price={price}
          options={options}
          symbol={symbol}
          name={name}
          brand={brand}
        />
        <div className={classesCurrentGood.blockAmountAndImg}>
          <ChangeAmount
            classesCurrentGood={classesCurrentGood}
            id={id}
            amount={amount}
          />
          {addSlider ? (
            <Slider gallery={gallery} classesCurrentGood={classesCurrentGood} />
          ) : (
            <img
              className={classesCurrentGood.img}
              src={gallery[0]}
              alt="img"
            />
          )}
        </div>
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
