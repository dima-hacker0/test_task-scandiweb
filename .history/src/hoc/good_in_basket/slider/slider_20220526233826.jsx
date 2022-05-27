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
    const {
      props: { gallery },
      state: { currentImg },
    } = this;
    const amountImages = gallery.length;
    const images = gallery.map((src, i) => (
      <img
        key={i}
        style={{ transform: `translateX(${-1 * WIDTH_IMG * currentImg}px)` }}
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
            <div
              onClick={() => {
                this.setState({ currentImg: currentImg - 1 });
              }}
              className={
                currentImg === 0
                  ? `${classes.stopSlider} ${classes.arrowLeft}`
                  : classes.arrowLeft
              }
            >
              <Icons name="arrow-slider" />
            </div>
            <div
              onClick={() => {
                this.setState({ currentImg: currentImg + 1 });
              }}
              class
              className={
                currentImg === amountImages - 1
                  ? `${classes.stopSlider} ${classes.arrowRight}`
                  : classes.arrowRight
              }
            >
              <Icons name="arrow-slider" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;
