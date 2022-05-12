import React from "react";
import classes from "./block_options.module.css";
import { connect } from "react-redux";
import BlockChooseOption from "./block_choose_option/block_choose_option";

class BlockOptions extends React.Component {
  render() {
    if (this.props.product === undefined) return;
    // console.log(this.props.product);
    const { name, brand, attributes } = this.props.product;
    console.log(attributes);

    const options = attributes.map((data) => {
      return <BlockChooseOption data={data} />;
    });

    return (
      <div>
        <p className={classes.name}>{name}</p>
        <p className={classes.brand}>{brand}</p>
        {options}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state?.mainPage?.dataCurrentGood?.data;
};

export default connect(mapStateToProps, null)(BlockOptions);
