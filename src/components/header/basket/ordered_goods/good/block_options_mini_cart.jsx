import React from "react";
import { connect } from "react-redux";
import BlockСhooseOption from "../../../../../hoc/block_choose_option/block_choose_option";

class BlockChooseOptionMiniCart extends React.Component {
  render() {
    const { data, optionsGoodInBasket, classesCurrentGood } = this.props;
    return (
      <BlockСhooseOption
        classesCurrentGood={classesCurrentGood}
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
