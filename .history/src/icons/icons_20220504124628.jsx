import React from "react";
import IconsSVG from "./logo_market.svg";

class Icons extends React.Component {
  constructor(props) {
    super(props);
    this.width = props.width;
    this.height = props.height;
    this.className = props.className;
  }
  render() {
    return (
      <svg
        className={`icon icon-${name} ${className}`}
        width={this.width}
        height={this.height}
      >
        <use xlinkHref={`${IconsSVG}#icon-${this.className}`} />
      </svg>
    );
  }
}
export default Icons;
