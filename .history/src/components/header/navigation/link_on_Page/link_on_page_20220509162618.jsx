import React from "react";
import classes from "./link_on_page.module.css";
import { connect } from "react-redux";

class LinkOnPage extends React.Component {
  // constructor(props) {
  //   super(props);
  //   // debugger;
  //   // this.clickLink = this.clickLink.bind(this);
  // }

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
