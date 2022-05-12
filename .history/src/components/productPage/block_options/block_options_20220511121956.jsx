import React from "react";
import classes from "./block_options.module.css";
import { connect } from "react-redux";

class BlockOptions extends React.Component {
  render() {
    console.log(this.props);
    debugger;
    return (
      <div>
        <p className={classes.name}></p>
        <p className={classes.brand}></p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  debugger;
  return state;
};

export default connect(mapStateToProps, null)(BlockOptions);
