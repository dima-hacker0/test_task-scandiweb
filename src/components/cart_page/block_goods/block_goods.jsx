import React from "react";
import classes from "./block_goods.module.css";
import { connect } from "react-redux";
import Good from "../../../hoc/good_in_basket/good";
import classesCurrentGood from "../../../classes/good_basket_cart_page.module.css";

class BlockGoods extends React.Component {
  render() {
    const {
      basket: { goods },
    } = this.props;

    const items = goods.map((data, i) => (
      <Good
        addSlider={true}
        classesCurrentGood={classesCurrentGood}
        data={data}
        key={i}
      />
    ));

    return (
      <div className={classes.hideBlockGoods}>
        <div className={classes.blockGoods}>{items}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { basket: state.basket };
};

export default connect(mapStateToProps, null)(BlockGoods);
