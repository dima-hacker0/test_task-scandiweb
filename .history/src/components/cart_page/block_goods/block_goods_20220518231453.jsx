import React from "react";
import classes from "./block_goods.module.css";
import { connect } from "react-redux";

class BlockGoods extends React.Component {
  render() {
    const { basket } = this.props;
    debugger;
    return <div className={classes.blockGoods}></div>;
  }
}

const mapStateToProps = (state) => {
  return { basket: state.basket };
};

export default connect(mapStateToProps, null)(BlockGoods);
