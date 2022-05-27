import React from "react";
import { connect } from "react-redux";
import { ChangeAmountGoodBasketCreator } from "../../../redux/basket_reducer/basket_creator";

class ChangeAmount extends React.Component {
  constructor(props) {
    super(props);
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
  }

  add() {
    const { dispatch, id, optionsGoodInBasket } = this.props;
    dispatch(ChangeAmountGoodBasketCreator(id, "add", optionsGoodInBasket));
  }

  subtract() {
    const { dispatch, id, optionsGoodInBasket } = this.props;
    debugger;
    dispatch(
      ChangeAmountGoodBasketCreator(id, "subtract", optionsGoodInBasket)
    );
  }

  render() {
    const { amount, classesCurrentGood } = this.props;

    return (
      <div className={classesCurrentGood.amount}>
        <div className={classesCurrentGood.changeAmount} onClick={this.add}>
          +
        </div>
        <div className={classesCurrentGood.titleAmount}>{amount}</div>
        <div
          className={classesCurrentGood.changeAmount}
          onClick={this.subtract}
        >
          &#8211;
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return { dispatch };
};

export default connect(null, mapDispatchToProps)(ChangeAmount);
