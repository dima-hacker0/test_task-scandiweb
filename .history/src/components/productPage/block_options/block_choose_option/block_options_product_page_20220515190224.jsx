import React from "react";
import classes from "./block_options_product_page.module.css";
import { connect } from "react-redux";
import {
  clearOptionsGoodCreator,
  setOptionsGoodCreator,
} from "../../../../redux/good_reducer/good_creator";
import BlockСhooseOption from "../../../../hoc/block_choose_option/block_choose_option";

class BlockChooseOptionProductPage extends React.Component {
  chooseOption(e) {
    const {
      data: { name },
      dispatch,
    } = this.props;
    const value = e.target.getAttribute("data-value");
    dispatch(setOptionsGoodCreator(name, value));
  }

  componentDidMount() {
    const {
      dispatch,
      data: { name, items },
    } = this.props;
    const defaultValue = items[0].value;
    dispatch(setOptionsGoodCreator(name, defaultValue));
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch(clearOptionsGoodCreator());
  }

  render() {
    console.log(this.props);
    const {
      data,
      good: { optionsCurrentGood },
    } = this.props;
    debugger;
    return (
      <BlockСhooseOption
        data={data}
        good={good}
        size={{
          swatchSize: 32,
          noSwatch: { noSwatchHeight: 45, noSwatchWidth: 63 },
        }}
        chooseOption={this.chooseOption.bind(this)}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, null)(BlockChooseOptionProductPage);
