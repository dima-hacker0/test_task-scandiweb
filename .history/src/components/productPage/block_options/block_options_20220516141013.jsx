import React from "react";
import classes from "./block_options.module.css";
import { connect } from "react-redux";
import { calculatePrice } from "../../../functions/functions";
import { addGoodToCartCreator } from "../../../redux/basket_reducer/basket_creator";
import BlockChooseOptionProductPage from "./block_choose_option/block_options_product_page";

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
      currentGood: { id },
    } = this.props;

    const good = {
      options: optionsCurrentGood,
      id: id,
      amount: 1,
    };
    dispatch(addGoodToCartCreator(good));

    this.setState({ goodIsAdded: true });

    setTimeout(() => {
      this.setState({ goodIsAdded: false });
    }, 1000);
  }

  checkBasket(goods, id) {}

  render() {
    if (this.props.currentGood === undefined) return;
    const {
      currentGood: { name, brand, attributes, description, prices },
      currency: { label, symbol },
      basket,
    } = this.props;
    console.log(basket);
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
          <button onClick={this.addGood} className={classes.buttonAddToCart}>
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
