import React from "react";
import classes from "./block_options.module.css";
import { connect } from "react-redux";
import BlockChooseOption from "./block_choose_option/block_choose_option";
import { calculatePrice } from "../../../functions/functions";
import { addGoodToCartCreator } from "../../../redux/basket_reducer/basket_creator";

class BlockOptions extends React.Component {
  constructor(props) {
    super(props);
    this.addGood = this.addGood.bind(this);
    this.description = React.createRef();
  }

  addGood() {
    const { dispatch } = this.props;
    const good = {
      options: this.props.optionsCurrentGood,
      id: this.props.currentGood.id,
    };

    dispatch(addGoodToCartCreator(good));
  }

  render() {
    if (this.props.currentGood === undefined) return;
    const {
      currentGood: { name, brand, attributes, description, prices },
      currency: { label, symbol },
    } = this.props;
    const price = calculatePrice(prices, label);
    const options = attributes.map((data, i) => (
      <BlockChooseOption key={i} data={data} />
    ));
    return (
      <div className={classes.block}>
        <p className={classes.name}>{name}</p>
        <p className={classes.brand}>{brand}</p>
        <div className={classes.options}>{options}</div>
        <p className={classes.priceTitle}>Price:</p>
        <p className={classes.price}>{`${price}${symbol}`}</p>
        <button onClick={this.addGood} className={classes.buttonAddToCart}>
          ADD TO CART
        </button>
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
  };
};

export default connect(mapStateToProps, null)(BlockOptions);
