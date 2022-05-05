import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./link_on_page.module.css";
class LinkOnPage extends React.Component {
  constructor(props) {
    super(props);
    this.title = props.title;
    this.id = props.id;
    this.clickLink.bind(this);
  }

  clickLink(e) {
    console.log(e);
    debugger;
    console.log(this.id);
    return e.isActive
      ? `${classes.activePageTitle} ${classes.pageTitle}`
      : classes.pageTitle;
  }

  render() {
    return (
      <NavLink className={this.clickLink} to={`${this.title}-page`}>
        {this.title}
      </NavLink>
    );
  }
}

export default LinkOnPage;
