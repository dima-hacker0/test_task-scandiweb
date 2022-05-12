import React from "react";
import classes from "./block_choose_option.module.css";

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
    const { name, type, items: itemsFromProps } = this.props.data;
    let items = [];

    // if (type === "swatch") {
    //   items = itemsFromProps.map((data, i) => {
    //     return (
    //       <div
    //         key={i}
    //         data-value={data.value}
    //         onClick={this.chooseOption}
    //         style={{ backgroundColor: data.value }}
    //         className={classes.itemOptionSwatch}
    //       ></div>
    //     );
    //   });
    // } else {
    //   items = itemsFromProps.map((data, i) => {
    //     return (
    //       <div
    //         key={i}
    //         data-value={data.value}
    //         onClick={this.chooseOption}
    //         className={classes.itemOption}
    //       >
    //         {data.value}
    //       </div>
    //     );
    //   });
    // }
    items = itemsFromProps.map((data, i) => {
      return (
        <div
          key={i}
          data-value={data.value}
          onClick={this.chooseOption}
          className={
            type === classes.itemOptionSwatch ? "" : classes.itemOption
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

export default BlockChooseOption;
