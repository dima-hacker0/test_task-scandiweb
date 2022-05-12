import React from "react";
import classes from "./block_options.module.css";
import { connect } from "react-redux";
import BlockChooseOption from "./block_choose_option/block_choose_option";

class BlockOptions extends React.Component {
  isHTML(str) {
    let a = document.createElement("div");
    a.innerHTML = str;

    for (var c = a.childNodes, i = c.length; i--; ) {
      if (c[i].nodeType === 1) return true;
    }
    return false;
  }

  render() {
    if (this.props.product === undefined) return;
    const { name, brand, attributes, description } = this.props.product;
    console.log(this.props.product);
    const options = attributes.map((data) => <BlockChooseOption data={data} />);
    const a = this.isHTML("<p>dfsfs</p>");
    console.log(a);
    return (
      <div className={classes.block}>
        <p className={classes.name}>{name}</p>
        <p className={classes.brand}>{brand}</p>
        <div className={classes.options}>{options}</div>
        <p className={classes.priceTitle}>Price:</p>
        <p className={classes.price}>50.00$</p>
        <button className={classes.buttonAddToCart}>ADD TO CART</button>
        <div>{description}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state?.mainPage?.dataCurrentGood?.data;
};

export default connect(mapStateToProps, null)(BlockOptions);
