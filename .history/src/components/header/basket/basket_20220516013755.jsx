import React from "react";
import Icons from "../../../icons/icons";
import classes from "./basket.module.css";
import OrderedGoods from "./ordered_goods/ordered_goods";
import classesOrderedGoods from "./ordered_goods/ordered_goods.module.css";
import { connect } from "react-redux";

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
    if (e.target.closest(`.${classes.blockBasketIcon}`) !== null) {
      basketIsOpened ? hideContent(false) : hideContent(true);
    } else if (
      e.target.closest(`.${classesOrderedGoods.orderedGoods}`) === null &&
      basketIsOpened
    ) {
      hideContent(false);
    }
  }

  render() {
    const { basketIsOpened, goods } = this.props;
    return (
      <div className={classes.basket}>
        <div className={classes.blockBasketIcon}>
          <Icons className={classes.iconBasket} name="basket" />
          {goods.length !== 0 ? (
            <div className={classes.amountGoods}>{goods.length}</div>
          ) : null}
        </div>
        <OrderedGoods basketIsOpened={basketIsOpened} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state.basket;
};

export default connect(mapStateToProps, null)(Basket);
