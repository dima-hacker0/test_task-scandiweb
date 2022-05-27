import React from "react";
import classes from "./block_options.module.css";
import { connect } from "react-redux";
import { calculatePrice } from "../../../functions/functions";
import { addGoodToCartCreator } from "../../../redux/basket_reducer/basket_creator";
import BlockChooseOptionProductPage from "./block_options_product_page";

class BlockOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      goodIsAdded: false,
    };
    this.addGood = this.addGood.bind(this);
    this.checkBasket = this.checkBasket.bind(this);
    this.description = React.createRef();
  }

  addGood() {
    const {
      dispatch,
      optionsCurrentGood,
      currentGood: { id, prices },
      basket: { goods },
    } = this.props;

    const good = {
      options: optionsCurrentGood,
      id: id,
      amount: 1,
      prices: prices,
    };
    dispatch(addGoodToCartCreator(good));

    this.setState({ goodIsAdded: true });

    setTimeout(() => {
      this.setState({ goodIsAdded: false });
    }, 1000);
  }

  checkBasket(goods, id) {
    const { optionsCurrentGood } = this.props;
    console.log(optionsCurrentGood);
    for (let i = 0; i < goods.length; i++) {
      if (goods[i].id === id) return true;
    }
    return false;
  }

  increaseTheNumber() {}

  render() {
    if (this.props.currentGood === undefined) return;
    const {
      currentGood: { name, brand, attributes, description, prices, id },
      currency: { label, symbol },
      basket: { goods },
    } = this.props;

    const price = calculatePrice(prices, label);
    const options = attributes.map((data, i) => (
      <BlockChooseOptionProductPage key={i} data={data} />
    ));

    return (
      <div className={classes.block}>
        <p className={classes.name}>{name}</p>
        <p className={classes.brand}>{brand}</p>
        <div className={classes.options}>{options}</div>
        <p className={classes.priceTitle}>Price:</p>
        <p className={classes.price}>{`${price}${symbol}`}</p>
        <div className={classes.blocButton}>
          <button
            onClick={() => {
              this.addGood();
              const isInCart = this.checkBasket(goods, id);
              console.log(isInCart);
            }}
            className={classes.buttonAddToCart}
          >
            ADD TO CART
          </button>
          {this.state.goodIsAdded ? (
            <div className={classes.goodIsAdded}>Product added!</div>
          ) : null}
        </div>
        <div dangerouslySetInnerHTML={{ __html: description }}></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentGood: state?.good?.dataCurrentGood?.data?.product,
    optionsCurrentGood: state?.good?.optionsCurrentGood,
    currency: state.currency,
    basket: state.basket,
  };
};

export default connect(mapStateToProps, null)(BlockOptions);
