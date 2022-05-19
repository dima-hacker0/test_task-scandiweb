import React from "react";
import classes from "./slider.module.css";

class Slider extends React.Component {
  render() {
    const { gallery } = this.props;
    const images = gallery.map((src) => (
      <div className={classesCurrentGood.imagesBlock}>
        <img className={classesCurrentGood.img} src={src} alt="img" />
      </div>
    ));
    return (
      <div className={classesCurrentGood.sloder}>
        <div className={classesCurrentGood.sliderContent}>{images}</div>
      </div>
    );
  }
}

export default Slider;
