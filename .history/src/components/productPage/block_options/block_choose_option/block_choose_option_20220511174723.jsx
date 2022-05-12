import React from "react";
import classes from "./block_choose_option.module.css";

class BlockChooseOption extends React.Component {
  render() {
    const { name, type, items: itemsFromData } = this.props.data;
    let items = [];
    if (type === "swatch") {
    } else {
    }
    return (
      <div>
        <p className={classes.optionName}>{name}</p>
        <div className={classes.options}></div>
      </div>
    );
  }
}

export default BlockChooseOption;
