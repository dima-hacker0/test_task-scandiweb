import React from "react";

class Icons extends React.Component {
  constructor(props) {
    this.width = props.width;
  }
  render() {
    return (
      <svg
        className={`icon icon-${name} ${className}`}
        fill={color}
        stroke={color}
        width={size}
        height={size}
      >
        >
        <use xlinkHref={`${IconsSVG}#icon-${name}`} />
      </svg>
    );
  }
}
export default Icons;
