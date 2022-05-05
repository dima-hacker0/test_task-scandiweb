import React from "react";
import { NavLink } from "react-router-dom";

class LinkOnPage extends React.Component {
  render() {
    return (
      <NavLink
        className={(data) =>
          data.isActive
            ? `${classes.activePageTitle} ${classes.pageTitle}`
            : classes.pageTitle
        }
        to="women-page"
      ></NavLink>
    );
  }
}

export default LinkOnPage;
