import React from "react";
class Good extends React.Component {
  componentDidUpdate() {
    console.log("update");
  }
  render() {
    return <div></div>;
  }
}

export default Good;
