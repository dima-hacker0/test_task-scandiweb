import React from "react";
import classes from "./images_good_block.module.css";
import { connect } from "react-redux";

class ImagesGoodBlock extends React.Component {
  render() {
    // const
    // const images =
    return <div></div>;
  }
}

const mapStateToProps = (state) => {
  return state.mainPage.dataCurrentGood.data.product.gallery;
};

export default connect(mapStateToProps, null)(ImagesGoodBlock);
