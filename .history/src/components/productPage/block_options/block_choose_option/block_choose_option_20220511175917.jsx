import React from "react";
import classes from "./block_choose_option.module.css";

class BlockChooseOption extends React.Component {
  render() {
    const { name, type, items: itemsFromProps } = this.props.data;
    let items = [];
    // console.log(itemsFromProps);
    if (type === "swatch") {
    } else {
      items = itemsFromProps.map((data) => {
        console.log(data);
        return <div className={classes.itemOption}>{data.value}</div>;
      });
    }
    return (
      <div>
        <p className={classes.optionName}>{name}</p>
        <div className={classes.options}>{items}</div>
      </div>
    );
  }
}

export default BlockChooseOption;
