import React from "react";
import Icons from "../../../icons/icons";
import classes from "./slider.module.css";
const WIDTH_IMG = 200;

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImg: 0,
    };
  }

  render() {
    const { gallery } = this.props;
    const amountImages = gallery.length;
    const images = gallery.map((src) => (
      <img
        style={{ transform: `translateX(100px)` }}
        className={classes.img}
        src={src}
        alt="img"
      />
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
