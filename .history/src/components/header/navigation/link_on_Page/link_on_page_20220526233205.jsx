import React from "react";
import classes from "./link_on_page.module.css";
import { NavLink } from "react-router-dom";
class LinkOnPage extends React.Component {
  render() {
    const { category, changeCategory } = this.props;
    return (
      <NavLink>
        <div
          onClick={changeCategory}
          data-category={category}
          className={classes.pageTitle}
        >
          {category}
        </div>
      </NavLink>
    );
  }
}

export default LinkOnPage;
