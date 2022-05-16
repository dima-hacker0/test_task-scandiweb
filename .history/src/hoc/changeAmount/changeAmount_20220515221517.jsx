import React from "react";
import classes from "./changeAmount.module.css";
class changeAmount extends React.Component {
  render() {
    return (
      <div className={classes.amount}>
        <div className={classes.changeAmount}></div>
        <div className={classes.titleAmount}>3</div>
        <div className={classes.changeAmount}></div>
      </div>
    );
  }
}

export default changeAmount;
