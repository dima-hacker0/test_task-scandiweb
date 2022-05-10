import React from "react";
import classes from "./link_on_page.module.css";
class LinkOnPage extends React.Component {
  constructor(props) {
    super(props);
    // this.clickLink = this.clickLink.bind(this);
  }

  clickLink(e) {
    console.log(this.props);
  }
  render() {
    const { title } = this.props;
    return <div className={classes.pageTitle}>{title}</div>;
  }
}

export default LinkOnPage;
