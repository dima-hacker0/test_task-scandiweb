import React from "react";
import classes from "./block_choose_option.module.css";
import { connect } from "react-redux";
import {
  clearOptionsGoodCreator,
  setOptionsGoodCreator,
} from "../../../../redux/good_reducer/good_creator";

class BlockChooseOption extends React.Component {
  constructor(props) {
    super(props);
    this.chooseOption = this.chooseOption.bind(this);
  }

  chooseOption(e) {
    const {
      data: { name },
      dispatch,
    } = this.props;
    const value = e.target.getAttribute("data-value");
    dispatch(setOptionsGoodCreator(name, value));
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch(clearOptionsGoodCreator());
  }

  render() {
    const {
      data: { name, type, items: itemsFromProps },
      good: { optionsCurrentGood },
    } = this.props;

    const className =
      type === "swatch" ? classes.itemOptionSwatch : classes.itemOption;
    const selectedClass =
      type === "swatch" ? classes.selectedItemSwatch : classes.selectedItem;

    // console.log()

    const items = itemsFromProps.map((data, i) => {
      // console.log(optionsCurrentGood[name] === data.value);
      console.log(optionsCurrentGood[name], data.value);
      if (optionsCurrentGood[name] === undefined) {
        debugger;
      }
      return (
        <div
          key={i}
          data-value={data.value}
          onClick={this.chooseOption}
          className={
            optionsCurrentGood[name] === data.value
              ? `${className} ${selectedClass}`
              : className
          }
          style={type === "swatch" ? { backgroundColor: data.value } : null}
        >
          {type === "swatch" ? "" : data.value}
        </div>
      );
    });

    return (
      <div className={classes.block}>
        <p className={classes.optionName}>{name}</p>
        <div className={classes.options}>{items}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, null)(BlockChooseOption);
