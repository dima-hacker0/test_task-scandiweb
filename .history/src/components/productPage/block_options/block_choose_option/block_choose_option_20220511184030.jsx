import React from "react";
import classes from "./block_choose_option.module.css";

class BlockChooseOption extends React.Component {
  constructor(props) {
    super(props);
    this.chooseOption = this.chooseOption.bind(this);
  }

  chooseOption(e) {
    console.log(e.target);
  }
  render() {
    const { name, type, items: itemsFromProps } = this.props.data;
    let items = [];

    if (type === "swatch") {
      items = itemsFromProps.map((data) => {
        return (
          <div
            onClick={this.chooseOption}
            style={{ backgroundColor: data.value }}
            className={classes.itemOptionSwatch}
          ></div>
        );
      });
    } else {
      items = itemsFromProps.map((data) => {
        return (
          <div onClick={this.chooseOption} className={classes.itemOption}>
            {data.value}
          </div>
        );
      });
    }
    return (
      <div className={classes.block}>
        <p className={classes.optionName}>{name}</p>
        <div className={classes.options}>{items}</div>
      </div>
    );
  }
}

export default BlockChooseOption;
