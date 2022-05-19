import React from "react";
import classes from "./block_goods.module.css";
import { connect } from "react-redux";
import Good from "../../../hoc/good_in_basket/good";

class BlockGoods extends React.Component {
  render() {
    const {
      basket: { goods },
    } = this.props;

    const items = goods.map((data, i) => (
      <Good classesCurrentGood={classesCurrentGood} data={data} key={i} />
    ));
    debugger;
    return <div className={classes.blockGoods}></div>;
  }
}

const mapStateToProps = (state) => {
  return { basket: state.basket };
};

export default connect(mapStateToProps, null)(BlockGoods);
