import React from "react";
import classes from "./good.module.css";
class Good extends React.Component {
  constructor() {}
  render() {
    return (
      <div className={classes.card}>
        <img
          className={classes.img}
          src="https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087"
          alt=""
        />
        <p className={classes.describe}>describe</p>
        <p className={classes.price}>price</p>
      </div>
    );
  }
}

export default Good;
