import React from "react";

class BlockСhooseOption extends React.Component {
  render() {
    const {
      chooseOption,
      data: { name, type, items: itemsFromProps },
      good: option,
      fontSizeItem,
      classesCurrentGood,
    } = this.props;
    const className =
      type === "swatch"
        ? classesCurrentGood.itemOptionSwatch
        : classesCurrentGood.itemOption;
    const selectedClass =
      type === "swatch"
        ? classesCurrentGood.selectedItemSwatch
        : classesCurrentGood.selectedItem;

    const items = itemsFromProps.map((data, i) => {
      return (
        <div
          key={i}
          data-value={data.value}
          onClick={chooseOption}
          className={
            option[name] === data.value
              ? `${className} ${selectedClass}`
              : className
          }
          style={
            type === "swatch"
              ? {
                  backgroundColor: data.value,
                }
              : null
          }
        >
          {type === "swatch" ? "" : data.value}
        </div>
      );
    });

    return (
      <div className={classesCurrentGood.block}>
        <p className={classesCurrentGood.optionName}>{name}:</p>
        <div className={classesCurrentGood.options}>{items}</div>
      </div>
    );
  }
}

export default BlockСhooseOption;
