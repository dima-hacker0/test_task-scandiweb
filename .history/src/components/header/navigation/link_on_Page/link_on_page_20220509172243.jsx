import React from "react";
import classes from "./link_on_page.module.css";

class LinkOnPage extends React.Component {
  render() {
    const { category, changeCategory } = this.props;
    return (
      <div
        onClick={changeCategory}
        data-category={category}
        className={classes.pageTitle}
      >
        {category}
      </div>
    );
  }
}

export default LinkOnPage;
