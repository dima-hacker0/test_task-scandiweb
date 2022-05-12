import React from "react";
import classes from "./block_options.module.css";
import { connect } from "react-redux";
import BlockChooseOption from "./block_choose_option/block_choose_option";

class BlockOptions extends React.Component {
  constructor(props) {
    super(props);
    this.description = React.createRef();
  }

  render() {
    if (this.props.currentGood === undefined) return;
    const { name, brand, attributes, description } =
      this.props.currentGood.product;
    debugger;
    console.log(this.props.product);
    const options = attributes.map((data) => <BlockChooseOption data={data} />);
    return (
      <div className={classes.block}>
        <p className={classes.name}>{name}</p>
        <p className={classes.brand}>{brand}</p>
        <div className={classes.options}>{options}</div>
        <p className={classes.priceTitle}>Price:</p>
        <p className={classes.price}>50.00$</p>
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
