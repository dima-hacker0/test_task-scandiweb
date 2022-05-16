import React from "react";
import classes from "./block_choose_option_hoc.module.css";
import { connect } from "react-redux";
import {
  clearOptionsGoodCreator,
  setOptionsGoodCreator,
} from "../../redux/good_reducer/good_creator";

export const MakeOptions = (width, height) => {
  return class BlockСhooseOptionHoc extends React.Component {
    render() {
      return (
        <div className={classes.block}>
          <p className={classes.optionName}>{name}</p>
          <div className={classes.options}>{items}</div>
        </div>
      );
    }
  };
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, null)(MakeOptions);
