import React from "react";
import classes from "./block_choose_option.module.css";

class BlockChooseOption extends React.Component {
  render() {
    const { data } = this.props;
    console.log(data);
    return (
      <div>
        <p className={classes.optionName}></p>
      </div>
    );
  }
}

export default BlockChooseOption;
