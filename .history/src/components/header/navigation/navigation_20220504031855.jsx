import React from "react";
import LinkOnPage from "./link_on_Page/link_on_page";
import classes from "./navigation.module.css";
class Navigation extends React.Component {
  render() {
    return (
      <div className={classes.navigation}>
        <LinkOnPage title="women" />
        <LinkOnPage title="man" />
        <LinkOnPage title="kids" />
        <div className={classes.borderCurrentLink}></div>
      </div>
    );
  }
}

export default Navigation;
