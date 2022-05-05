import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./link_on_page.module.css";
class LinkOnPage extends React.Component {
  constructor(props) {
    console.log(props);
  }
  render() {
    return (
      <NavLink
        className={(data) =>
          data.isActive
            ? `${classes.activePageTitle} ${classes.pageTitle}`
            : classes.pageTitle
        }
        to="women-page"
      >
        ssssssss
      </NavLink>
    );
  }
}

export default LinkOnPage;
