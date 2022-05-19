import React from "react";
import { connect } from "react-redux";
import BlockСhooseOption from "../../../hoc/block_choose_option/block_choose_option";

class BlockOptionsMiniCart extends React.Component {
  chooseOption(e) {
    const value = e.target.getAttribute("data-value");
  }

  render() {
    const {
      data,
      good: { optionsCurrentGood },
    } = this.props;

    return (
      <BlockСhooseOption
        data={data}
        size={{
          swatchSize: 16,
          noSwatch: { noSwatchHeight: 24, noSwatchWidth: 24 },
        }}
        chooseOption={this.clickItem.bind(this)}
        good={optionsCurrentGood}
        fontSizeItem={10}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, null)(BlockOptionsMiniCart);
