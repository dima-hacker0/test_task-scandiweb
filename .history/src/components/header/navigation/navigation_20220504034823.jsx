import React from "react";
import LinkOnPage from "./link_on_Page/link_on_page";
import classes from "./navigation.module.css";
class Navigation extends React.Component {
  dimas(e) {
    console.log(e);
  }
  render() {
    return (
      <div className={classes.navigation}>
        <LinkOnPage title="women" id={1} />
        <LinkOnPage title="man" id={2} />
        <LinkOnPage title="kids" id={3} />
        <div className={classes.borderCurrentLink}></div>
      </div>
    );
  }
}

export default Navigation;
