import React from "react";
import classes from "./link_on_page.module.css";
class LinkOnPage extends React.Component {
  constructor(props) {
    super(props);
    this.clickLink = this.clickLink.bind(this);
  }

  clickLink(e) {
    const category = e.target.getAttribute("data-category");
    console.log(category);
  }

  render() {
    const { title, category } = this.props;
    return (
      <div
        onClick={this.clickLink}
        data-category={category}
        className={classes.pageTitle}
      >
        {title}
      </div>
    );
  }
}

export default LinkOnPage;
