import React from "react";
import Icons from "../../../icons/icons";
import classes from "./basket.module.css";

class Basket extends React.Component {
  check() {
    console.log("a");
  }
  render() {
    return (
      <div onClick={this.check}>
        <Icons className={classes.iconBasket} name="basket" />
      </div>
    );
  }
}

export default Basket;
