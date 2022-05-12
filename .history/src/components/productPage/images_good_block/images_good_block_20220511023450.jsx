import React from "react";
import classes from "./images_good_block.module.css";
import { connect } from "react-redux";

class ImagesGoodBlock extends React.Component {
  render() {
    const { images } = this.props;
    console.log(images);
    if (images === undefined) return;
    const items = images.map((src) => (
      <img className={classes.img} src={src} alt="good" />
    ));
    return <div>{items}</div>;
  }
}

const mapStateToProps = (state) => {
  return { images: state.mainPage?.dataCurrentGood?.data?.product?.gallery };
};

export default connect(mapStateToProps, null)(ImagesGoodBlock);