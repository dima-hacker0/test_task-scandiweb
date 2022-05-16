import React from "react";
import classes from "./block_choose_option.module.css";

class BlockСhooseOption extends React.Component {
  render() {
    const {
      chooseOption,
      data: { name, type, items: itemsFromProps },
      good: { optionsCurrentGood },
      size: {
        swatchSize,
        noSwatch: { noSwatchHeight, noSwatchWidth },
      },
    } = this.props;
    const className =
      type === "swatch" ? classes.itemOptionSwatch : classes.itemOption;
    const selectedClass =
      type === "swatch" ? classes.selectedItemSwatch : classes.selectedItem;

    const items = itemsFromProps.map((data, i) => {
      return (
        <div
          key={i}
          data-value={data.value}
          onClick={chooseOption}
          className={
            optionsCurrentGood[name] === data.value
              ? `${className} ${selectedClass}`
              : className
          }
          style={
            type === "swatch"
              ? {
                  backgroundColor: data.value,
                  width: swatchSize,
                  height: swatchSize,
                }
              : { width: noSwatchWidth, height: noSwatchHeight }
          }
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
