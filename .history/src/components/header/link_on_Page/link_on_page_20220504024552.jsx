import React from "react";

class LinkOnPage extends React.Component {
  render() {
    <NavLink
      className={(data) =>
        data.isActive
          ? `${classes.activePageTitle} ${classes.pageTitle}`
          : classes.pageTitle
      }
      to="women-page"
    ></NavLink>;
  }
}

export default LinkOnPage;
