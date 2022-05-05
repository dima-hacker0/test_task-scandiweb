import React from "react";
import IconsSVG from "./icons.svg";

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
        className={`icon icon-${this.className} `}
        width={this.width}
        height={this.height}
      >
        <use xlinkHref={`${IconsSVG}#icon-${this.className}`} />
      </svg>
    );
  }
}
export default Icons;
