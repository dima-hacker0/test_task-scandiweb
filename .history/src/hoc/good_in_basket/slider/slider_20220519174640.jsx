import React from "react";
import classes from "./slider.module.css";

class Slider extends React.Component {
  render() {
    const { gallery } = this.props;
    const images = gallery.map((src) => (
      <div className={classes.imagesBlock}>
        <img className={classes.img} src={src} alt="img" />
        <div className={classes.arrows}></div>
      </div>
    ));
    return (
      <div className={classes.sloder}>
        <div className={classes.sliderContent}>{images}</div>
      </div>
    );
  }
}

export default Slider;
