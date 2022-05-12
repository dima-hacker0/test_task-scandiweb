import React from "react";
import classes from "./block_options.module.css";
import { connect } from "react-redux";

class BlockOptions extends React.Component {
  render() {
    if (this.props.product === undefined) return;
    console.log(this.props.product);
    const { name } = this.props.product;
    return (
      <div>
        <p className={classes.name}></p>
        <p className={classes.brand}></p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state?.mainPage?.dataCurrentGood?.data;
};

export default connect(mapStateToProps, null)(BlockOptions);
