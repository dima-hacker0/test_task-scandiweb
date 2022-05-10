import React from "react";
import classes from "./link_on_page.module.css";
import { connect } from "react-redux";
class LinkOnPage extends React.Component {
  constructor(props) {
    super(props);
    this.clickLink = this.clickLink.bind(this);
  }

  class() {}

  clickLink(e) {
    const category = e.target.getAttribute("data-category");
    console.log(this.props.number);
  }

  render() {
    const { title, category } = this.props;
    return (
      <div
        onClick={this.clickLink}
        data-category={category}
        // className={
        //   currentCategory === category
        //     ? `${classes.pageTitle} ${classes.activePageTitle}`
        //     : classes.pageTitle
        // }
      >
        {title}
      </div>
    );
  }
}

const mapPropsToState = (state) => {
  return state.mainPage;
};

const mapDispatchToProps = (dispatch) => {
  return { dispatch };
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return { ...stateProps, ...dispatchProps, ...ownProps };
};

export default connect(
  mapPropsToState,
  mapDispatchToProps,
  mergeProps
)(LinkOnPage);