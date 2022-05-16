import React from "react";
import classes from "./block_choose_option_hoc.module.css";
import { connect } from "react-redux";
// import {
//   clearOptionsGoodCreator,
//   setOptionsGoodCreator,
// } ;

class BlockСhooseOption extends React.Component {
  render() {
    // debugger;
    const {
      data: { name, type, items: itemsFromProps },
      good: { optionsCurrentGood },
    } = this.props.data;
    // debugger;
    const className =
      type === "swatch" ? classes.itemOptionSwatch : classes.itemOption;
    const selectedClass =
      type === "swatch" ? classes.selectedItemSwatch : classes.selectedItem;
    console.log(this.props.size);
    const items = itemsFromProps.map((data, i) => {
      return (
        <div
          key={i}
          data-value={data.value}
          // onClick={this.chooseOption}
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

export default BlockСhooseOption;
