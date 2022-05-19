import React from "react";

class Slider extends React.Component {
  render() {
    const { classesCurrentGood } = this.props;

    return (
      <div className={classesCurrentGood.sloder}>
        <div className={classesCurrentGood.sliderContent}></div>
      </div>
    );
  }
}

export default Slider;
