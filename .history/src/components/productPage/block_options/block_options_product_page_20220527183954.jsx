import React from "react";
import { connect } from "react-redux";
import {
  clearOptionsGoodCreator,
  setOptionsGoodCreator,
} from "../../../redux/good_reducer/good_creator";
import BlockСhooseOption from "../../../hoc/block_choose_option/block_choose_option";
import classesCurrentGood from "../../../classes/good_basket_product_page.module.css";

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
    const {
      data,
      good: { optionsCurrentGood },
    } = this.props;

    return (
      <BlockСhooseOption
        classesCurrentGood={classesCurrentGood}
        data={data}
        good={optionsCurrentGood}
        chooseOption={this.chooseOption.bind(this)}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, null)(BlockChooseOptionProductPage);
