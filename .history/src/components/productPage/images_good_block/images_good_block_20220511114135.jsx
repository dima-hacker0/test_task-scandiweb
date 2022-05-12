import React from "react";
import classes from "./images_good_block.module.css";
import { connect } from "react-redux";

class ImagesGoodBlock extends React.Component {
  render() {
    debugger;
    const { images } = this.props;
    if (images === undefined) return <div></div>;

    const items = images.map((src) => (
      <img
        onClick={this.changeImg}
        className={classes.img}
        src={src}
        alt="good"
      />
    ));

    return (
      <div className={classes.hideBlockImages}>
        <div className={classes.blockImages}>{items}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { images: state.mainPage?.dataCurrentGood?.data?.product?.gallery };
};

export default connect(mapStateToProps, null)(ImagesGoodBlock);
