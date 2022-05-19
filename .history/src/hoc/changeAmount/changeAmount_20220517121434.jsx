import React from "react";
import classes from "./changeAmount.module.css";
class ChangeAmount extends React.Component {
  add() {}

  subtract() {}

  render() {
    const { size, amount } = this.props;
    return (
      <div className={classes.amount}>
        <div
          style={{ width: size, height: size }}
          className={classes.changeAmount}
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

const mapStateToProps = (state) => {
  return state.basket;
};

export default ChangeAmount;
