import React from "react";

class Icons extends React.Component {
  constructor(props) {
    this.width = props.width;
    this.height = props.height;
    this.name = props.name;
  }
  render() {
    return (
      <svg
        className={`icon icon-${name} ${className}`}
        width={this.width}
        height={this.height}
      >
        >
        <use xlinkHref={`${IconsSVG}#icon-${name}`} />
      </svg>
    );
  }
}
export default Icons;
