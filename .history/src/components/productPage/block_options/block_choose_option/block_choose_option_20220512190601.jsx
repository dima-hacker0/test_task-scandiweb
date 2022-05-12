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
    const { name } = this.props.data;
    console.log(e.target.getAttribute("data-value"));
    console.log(name);
  }
  componentDidMount() {
    const {
      dispatch,
      data: { name, items },
    } = this.props;
    const defaultValue = items[0].value;
    dispatch(setOptionsGoodCreator(name, defaultValue));
    console.log(this.props.good);
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch(clearOptionsGoodCreator());
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
      // debugger;
      // if (i === 0) {
      //   dispatch(setOptionsGoodReducer(name, data.value));
      // }
      // debugger;
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
