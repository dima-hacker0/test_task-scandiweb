import React from "react";
import { connect } from "react-redux";
import BlockСhooseOption from "../../../../../hoc/block_choose_option/block_choose_option";
import { changeGoodBasketCreator } from "../../../../../redux/basket_reducer/basket_creator";

class BlockChooseOptionMiniCart extends React.Component {
  chooseOption(e) {
    // const {
    //   dispatch,
    //   data: { name },
    //   idGood,
    // } = this.props;
    // const value = e.target.getAttribute("data-value");
    // dispatch(changeGoodBasketCreator(name, value, idGood));
  }

  render() {
    const { data, optionsGoodInBasket, classesCurrentGood } = this.props;
    return (
      <BlockСhooseOption
        classesCurrentGood={classesCurrentGood}
        chooseOption={this.chooseOption.bind(this)}
        data={data}
        good={optionsGoodInBasket}
        size={{
          swatchSize: 16,
          noSwatch: { noSwatchHeight: 25, noSwatchWidth: 25 },
        }}
        fontSizeItem={12}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, null)(BlockChooseOptionMiniCart);
