import React from "react";
import { connect } from "react-redux";
import BlockСhooseOption from "../../../../../hoc/block_choose_option/block_choose_option";

class BlockChooseOptionMiniCart extends React.Component {
  constructor(props) {
    super(props);
    this.chooseOption = this.chooseOption.bind(this);
  }
  chooseOption(e) {
    console.log(this.props);
    const value = e.target.getAttribute("data-value");
  }
  render() {
    const {
      data,
      good: { optionsCurrentGood },
    } = this.props;

    return (
      <BlockСhooseOption
        chooseOption={this.chooseOption}
        data={data}
        good={optionsCurrentGood}
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
