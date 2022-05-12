import React from "react";
import classes from "./block_options.module.css";
import { connect } from "react-redux";
import BlockChooseOption from "./block_choose_option/block_choose_option";
import { calculatePrice } from "../../../functions/functions";

class BlockOptions extends React.Component {
  constructor(props) {
    super(props);
    this.description = React.createRef();
  }

  render() {
    if (this.props.currentGood === undefined) return;
    const {
      currentGood: { name, brand, attributes, description, prices },
      currency: { label, symbol },
    } = this.props;
    const price = calculatePrice(prices, label);
    console.log(this.props.product);
    const options = attributes.map((data) => <BlockChooseOption data={data} />);
    return (
      <div className={classes.block}>
        <p className={classes.name}>{name}</p>
        <p className={classes.brand}>{brand}</p>
        <div className={classes.options}>{options}</div>
        <p className={classes.priceTitle}>Price:</p>
        <p className={classes.price}>{`${price}${symbol}`}</p>
        <button className={classes.buttonAddToCart}>ADD TO CART</button>
        <div dangerouslySetInnerHTML={{ __html: description }}></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentGood: state?.mainPage?.dataCurrentGood?.data?.product,
    currency: state.currency,
  };
};

export default connect(mapStateToProps, null)(BlockOptions);
