import React from "react";
import classes from "./images_good_block.module.css";
import { connect } from "react-redux";

class ImagesGoodBlock extends React.Component {
  render() {
    console.log(this.state);
    return <div></div>;
  }
}

const mapStateToProps = (state) => {
  return state.mainPage.dataCurrentGood.data.product;
};

export default connect(mapStateToProps, null)(ImagesGoodBlock);
