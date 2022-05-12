import React from "react";
import classes from "./block_choose_option.module.css";

class BlockChooseOption extends React.Component {
  render() {
    const { name } = this.props.data;
    console.log(this.props.data);
    return (
      <div>
        <p className={classes.optionName}></p>
      </div>
    );
  }
}

export default BlockChooseOption;
