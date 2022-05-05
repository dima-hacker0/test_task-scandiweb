import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./link_on_page.module.css";
class LinkOnPage extends React.Component {
  constructor(props) {
    super(props);
    // this.title = props.title;
    // this.id = props.id;
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
      props: { title, id },
    } = this;
    return (
      <NavLink className={this.clickLink} to={`${this.title}-page`}>
        {this.title}
      </NavLink>
    );
  }
}

export default LinkOnPage;
