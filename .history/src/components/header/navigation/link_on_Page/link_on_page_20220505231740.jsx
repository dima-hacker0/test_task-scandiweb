import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./link_on_page.module.css";
class LinkOnPage extends React.Component {
  constructor(props) {
    super(props);
    this.clickLink = this.clickLink.bind(this);
  }

  clickLink(e) {
    return e.isActive
      ? `${classes.activePageTitle} ${classes.pageTitle}`
      : classes.pageTitle;
  }

  render() {
    const {
      clickLink,
      props: { title },
    } = this;
    return (
      <NavLink className={clickLink} to={`${title}-page`}>
        {this.title}
      </NavLink>
    );
  }
}

export default LinkOnPage;
