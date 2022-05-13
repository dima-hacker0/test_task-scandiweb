import React from "react";
import Icons from "../../../icons/icons";
import classes from "./basket.module.css";
import OrderedGoods from "./ordered_goods/ordered_goods";

class Basket extends React.Component {
  constructor(props) {
    super(props);
    this.click = this.click.bind(this);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.click);
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.click);
  }

  click(e) {
    const pageHeight = document.documentElement.scrollHeight;
    console.log(pageHeight);
    if (e.target.closest(`.${classes.blockBasketIcon}`) !== null) {
      console.log(true);
    }
  }

  render() {
    const { basketIsOpened } = this.state;
    return (
      <div className={classes.basket}>
        <div className={classes.blockBasketIcon}>
          <Icons className={classes.iconBasket} name="basket" />
        </div>
        <OrderedGoods basketIsOpened={basketIsOpened} />
      </div>
    );
  }
}

export default Basket;
