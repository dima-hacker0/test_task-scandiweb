import React from "react";
import classes from "./block_choose_option_hoc.module.css";
import { connect } from "react-redux";
import {
  clearOptionsGoodCreator,
  setOptionsGoodCreator,
} from "../../redux/good_reducer/good_creator";

const makeOptions = () => {
  // constructor(props) {
  //   super(props);
  //   this.chooseOption = this.chooseOption.bind(this);
  // }

  // chooseOption(e) {
  //   const {
  //     data: { name },
  //     dispatch,
  //   } = this.props;
  //   const value = e.target.getAttribute("data-value");
  //   dispatch(setOptionsGoodCreator(name, value));
  // }

  // componentDidMount() {
  //   const {
  //     dispatch,
  //     data: { name, items },
  //   } = this.props;
  //   const defaultValue = items[0].value;
  //   dispatch(setOptionsGoodCreator(name, defaultValue));
  // }

  // componentWillUnmount() {
  //   const { dispatch } = this.props;
  //   dispatch(clearOptionsGoodCreator());
  // }

  // render() {
  //   const {
  //     data: { name, type, items: itemsFromProps },
  //     good: { optionsCurrentGood },
  //   } = this.props;
  //   const className =
  //     type === "swatch" ? classes.itemOptionSwatch : classes.itemOption;
  //   const selectedClass =
  //     type === "swatch" ? classes.selectedItemSwatch : classes.selectedItem;

  //   const items = itemsFromProps.map((data, i) => {
  //     return (
  //       <div
  //         key={i}
  //         data-value={data.value}
  //         onClick={this.chooseOption}
  //         className={
  //           optionsCurrentGood[name] === data.value
  //             ? `${className} ${selectedClass}`
  //             : className
  //         }
  //         style={type === "swatch" ? { backgroundColor: data.value } : null}
  //       >
  //         {type === "swatch" ? "" : data.value}
  //       </div>
  //     );
  //   });

  return class BlockChouseOptionHoc extends React.Component {
    render() {
      return <div></div>;
    }
  };
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, null)(makeOptions);
