import React from "react";

class Slider extends React.Component {
  render() {
    const { classesCurrentGood, gallery } = this.props;
    const images = gallery.map((src) => <img src={src} />);
    return (
      <div className={classesCurrentGood.sloder}>
        <div className={classesCurrentGood.sliderContent}></div>
      </div>
    );
  }
}

export default Slider;
