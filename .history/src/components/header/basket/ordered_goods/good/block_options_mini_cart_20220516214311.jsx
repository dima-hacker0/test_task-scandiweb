import React from "react";
import { connect } from "react-redux";

import BlockСhooseOption from "../../../hoc/block_choose_option/block_choose_option";

class BlockChooseOptionMiniCart extends React.Component {
  render() {
    const {
      data,
      good: { optionsCurrentGood },
    } = this.props;
    return (
      <BlockСhooseOption
        data={data}
        good={optionsCurrentGood}
        size={{
          swatchSize: 32,
          noSwatch: { noSwatchHeight: 45, noSwatchWidth: 63 },
        }}
        chooseOption={this.chooseOption.bind(this)}
        fontSizeItem={18}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, null)(BlockChooseOptionMiniCart);
