import React from "react";
import classes from "block_options.module.css";
import { connect } from "react-redux";

class BlockOptions extends React.Component {
  render() {
    return (
      <div>
        <p className={classes.name}></p>
        <p className={classes.brand}></p>
      </div>
    );
  }
}

export default BlockOptions;
