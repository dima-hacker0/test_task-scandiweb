import React from "react";

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
        className={`icon icon-${name} `}
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
