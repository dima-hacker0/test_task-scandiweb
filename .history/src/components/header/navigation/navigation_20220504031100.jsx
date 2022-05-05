import React from "react";
import LinkOnPage from "./link_on_Page/link_on_page";

class Navigation extends React.Component {
  render() {
    return (
      <div>
        <LinkOnPage title="women" />
        <LinkOnPage title="man" />
        <LinkOnPage title="man" />
      </div>
    );
  }
}

export default Navigation;
