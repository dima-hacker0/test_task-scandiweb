import React from "react";
import Icons from "../../../icons/icons";
import classes from "./basket.module.css";

class Basket extends React.Component {
  render() {
    return (
      <div>
        <Icons className={classes} name="basket" />
      </div>
    );
  }
}

export default Basket;
