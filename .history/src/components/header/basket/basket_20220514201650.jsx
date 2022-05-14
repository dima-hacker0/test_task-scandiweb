import React from "react";
import Icons from "../../../icons/icons";
import classes from "./basket.module.css";
import OrderedGoods from "./ordered_goods/ordered_goods";
import classesOrderedGoods from "./ordered_goods/ordered_goods.module.css";
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
    const { hideContent, basketIsOpened } = this.props;
    console.log(this.props.basketIsOpened);
    if (e.target.closest(`.${classes.blockBasketIcon}`) !== null) {
      basketIsOpened ? hideContent(false) : hideContent(true);
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
