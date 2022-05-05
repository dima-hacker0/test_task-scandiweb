import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./link_on_page.module.css";
class LinkOnPage extends React.Component {
  constructor(props) {
    super(props);
    this.title = props.title;
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
        {this.title}
      </NavLink>
    );
  }
}

export default LinkOnPage;
