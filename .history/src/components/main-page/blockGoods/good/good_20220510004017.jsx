import React from "react";
class Good extends React.Component {
  componentDidUpdate(prevProps) {
    console.log(prevProps);
  }
  render() {
    return <div></div>;
  }
}

export default Good;
