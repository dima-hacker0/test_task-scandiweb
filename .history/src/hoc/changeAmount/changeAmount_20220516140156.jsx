import React from "react";
import classes from "./changeAmount.module.css";
class ChangeAmount extends React.Component {
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
        <div className={classes.titleAmount}>3</div>
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

export default ChangeAmount;
