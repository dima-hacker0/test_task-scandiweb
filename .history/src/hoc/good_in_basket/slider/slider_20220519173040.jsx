import React from "react";

class Slider extends React.Component {
  render() {
    const { classesCurrentGood, gallery } = this.props;
    const images = gallery.map((src) => <img src={src} alt="img" />);
    return (
      <div className={classesCurrentGood.sloder}>
        <div className={classesCurrentGood.sliderContent}>{images}</div>
      </div>
    );
  }
}

export default Slider;
