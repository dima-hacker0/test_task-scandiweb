import React from "react";
import classes from "./block_choose_option_hoc.module.css";
import { connect } from "react-redux";
import {
  clearOptionsGoodCreator,
  setOptionsGoodCreator,
} from "../../redux/good_reducer/good_creator";

export const MakeOptions = (width, height) => {
  return class BlockŠ”hooseOptionHoc extends React.Component {
    render() {
      const { itemsFromProps } = this.props;
      const items = itemsFromProps.map((data, i) => {
        return (
          <div
            key={i}
            data-value={data.value}
            onClick={this.chooseOption}
            className={
              optionsCurrentGood[name] === data.value
                ? `${className} ${selectedClass}`
                : className
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
  };
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, null)(MakeOptions);
