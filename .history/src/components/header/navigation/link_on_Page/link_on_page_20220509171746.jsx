import React from "react";
import classes from "./link_on_page.module.css";

class LinkOnPage extends React.Component {
  render() {
    const { category } = this.props;
    return (
      <div data-category={category} className={classes.pageTitle}>
        {category}
      </div>
    );
  }
}

export default LinkOnPage;
