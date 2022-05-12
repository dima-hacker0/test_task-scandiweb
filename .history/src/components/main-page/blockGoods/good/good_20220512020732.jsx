import React from "react";
import { NavLink } from "react-router-dom";
import Icons from "../../../../icons/icons";
import classes from "./good.module.css";
import { connect } from "react-redux";
import { changeCurrentGoodCreator } from "../../../../redux/good_reducer/good_creator";
class Good extends React.Component {
  constructor(props) {
    super(props);
    this.clickCard = this.clickCard.bind(this);
  }

  clickCard() {
    const { dispatch, id } = this.props;
    dispatch(changeCurrentGoodCreator(id));
  }

  render() {
    const { img, price, symbol, title, inStock } = this.props;
    return (
      <div
        onClick={this.clickCard}
        className={
          inStock ? classes.card : `${classes.cardOutOfStock} ${classes.card}`
        }
      >
        <NavLink to="product-page">
          <div className={classes.blockImg}>
            <img className={classes.img} src={img} alt="" />
            <Icons className={classes.basket} name="basketCard" />
            {inStock ? null : (
              <p className={classes.inscriptionOutOfStock}>OUT OF STOCK</p>
            )}
          </div>
          <p className={classes.title}>{title}</p>
          <p className={classes.price}>{`${price} ${symbol}`}</p>
        </NavLink>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { state };
};

export default connect(mapStateToProps, null)(Good);
