import React from "react";
import classes from "./images_good_block.module.css";
import { connect } from "react-redux";

class ImagesGoodBlock extends React.Component {
  render() {
    // console.log(this.props.mainPage.dataCurrentGood.data.product.gallery);
    return <div></div>;
  }
}

const mapStateToProps = (state) => {
  console.log(state.mainPage?.dataCurrentGood?.data?.product?);
  return state;
};

export default connect(mapStateToProps, null)(ImagesGoodBlock);
