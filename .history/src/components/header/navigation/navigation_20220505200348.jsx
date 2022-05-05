import React from "react";
import LinkOnPage from "./link_on_Page/link_on_page";
import classes from "./navigation.module.css";
class Navigation extends React.Component {
  constructor(props) {
    super(props);
    // this.borderLine = React.createRef();
  }

  render() {
    return (
      <nav className={classes.navigation}>
        <LinkOnPage title="clothes" id={1} />
        <LinkOnPage title="man" id={2} />
        <LinkOnPage title="kids" id={3} />
        {/* <div ref={this.borderLine} className={classes.borderCurrentLink}></div> */}
      </nav>
    );
  }
}

export default Navigation;
