import React from "react";
import classes from "./good.module.css";

class Good extends React.Component {
  render() {
    return (
      <div className={classes.good}>
        <div className={classes.options}></div>
        <div className={classes.amount}></div>
        <div></div>
      </div>
    );
  }
}

export default Good;
