import React from "react";
import Icons from "../../../icons/icons";
import classes from "./basket.module.css";
import OrderedGoods from "./ordered_goods/ordered_goods";

class Basket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      basketIsOpened: false,
    };
    this.click = this.click.bind(this);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.click);
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.click);
  }

  click(e) {
    console.log(classes.blockBasketIcon, e.target);
    if (e.target.className === classes.blockBasketIcon) {
      console.log(true);
    }
  }

  render() {
    return (
      <div className={classes.basket}>
        <div className={classes.blockBasketIcon}>
          <Icons className={classes.iconBasket} name="basket" />
        </div>
        <OrderedGoods />
      </div>
    );
  }
}

export default Basket;
