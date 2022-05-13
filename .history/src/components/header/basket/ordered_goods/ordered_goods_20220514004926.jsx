import React from "react";
import classes from "./ordered_goods.module.css";

class OrderedGoods extends React.Component {
  render() {
    console.log(this.props);
    const { basketIsOpened } = this.props;
    return (
      <div>
        <div className={classes.OrderedGoods}></div>
        {/* <div className={Classes.hide}></div> */}
        {basketIsOpened ? <div className={classes.hideContent}></div> : null}
      </div>
    );
  }
}
export default OrderedGoods;
