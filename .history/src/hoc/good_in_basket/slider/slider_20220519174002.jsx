import React from "react";

class Slider extends React.Component {
  render() {
    const { classesCurrentGood, gallery } = this.props;
    const images = gallery.map((src) => (
      <div>
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
