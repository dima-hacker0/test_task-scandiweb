import React from "react";
import classes from "./good.module.css";
class Good extends React.Component {
  render() {
    return (
      <div className={classes.good}>
        <img
          className={classes.img}
          src="https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087"
          alt=""
        />
      </div>
    );
  }
}

export default Good;
