import React from "react";
import classes from "./changeAmount.module.css";
import { connect } from "react-redux";
import { ChangeAmountGoodBasketCreator } from "../../redux/basket_reducer/basket_creator";

class ChangeAmount extends React.Component {
  constructor(props) {
    super(props);
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
  }

  add() {
    const { dispatch, id } = this.props;
    dispatch(ChangeAmountGoodBasketCreator(id, "add"));
  }

  subtract() {
    const { dispatch, id } = this.props;
    dispatch(ChangeAmountGoodBasketCreator(id, "subtract"));
  }

  render() {
    const { size, amount } = this.props;
    return (
      <div className={classes.amount}>
        <div
          style={{ width: size, height: size }}
          className={classes.changeAmount}
          onClick={this.add}
        >
          +
        </div>
        <div className={classes.titleAmount}>{amount}</div>
        <div
          style={{ width: size, height: size }}
          className={classes.changeAmount}
        >
          &#8211;
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return { dispatch };
};

export default connect(null, mapDispatchToProps)(ChangeAmount);
