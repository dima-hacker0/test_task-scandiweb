import React from "react";
import Icons from "../../../icons/icons";
import classes from "./slider.module.css";

class Slider extends React.Component {
  render() {
    const { gallery } = this.props;
    const images = gallery.map((src) => (
      <div className={classes.imagesBlock}>
        <img className={classes.img} src={src} alt="img" />
      </div>
    ));
    return (
      <div className={classes.slider}>
        <div className={classes.sliderContent}>
          {images}
          <div className={classes.arrows}>
            <div className={classes.arrowLeft}>
              <Icons name="arrow-slider" />
            </div>
            <div className={classes.arrowRight}>
              <Icons name="arrow-slider" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;
