import React from "react";
import Icons from "../../../icons/icons";
import classes from "./basket.module.css";

class Basket extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Icons className={classes.iconBasket} name="basket" />
      </div>
    );
  }
}

export default Basket;
