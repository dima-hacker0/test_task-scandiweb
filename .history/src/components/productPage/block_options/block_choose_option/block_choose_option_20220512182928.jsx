import React from "react";
import classes from "./block_choose_option.module.css";
import { connect } from "react-redux";
import { setOptionsGoodReducer } from "../../../../redux/good_reducer/good_creator";

class BlockChooseOption extends React.Component {
  constructor(props) {
    super(props);
    this.chooseOption = this.chooseOption.bind(this);
  }

  chooseOption(e) {
    const { name } = this.props.data;
    console.log(e.target.getAttribute("data-value"));
    console.log(name);
  }

  render() {
    const {
      data: { name, type, items: itemsFromProps },
      dispatch,
    } = this.props;

    const className =
      type === "swatch" ? classes.itemOptionSwatch : classes.itemOption;
    const selectedClass =
      type === "swatch" ? classes.selectedItemSwatch : classes.selectedItem;
    const items = itemsFromProps.map((data, i) => {
      if (i === 0) {
        dispatch(setOptionsGoodReducer(name, data.value));
      }
      debugger;
      console.log(this.props.good);
      return (
        <div
          key={i}
          data-value={data.value}
          onClick={this.chooseOption}
          className={i === 0 ? `${className} ${selectedClass}` : className}
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
