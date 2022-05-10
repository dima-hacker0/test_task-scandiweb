import React from "react";
import classes from "./link_on_page.module.css";
import { connect } from "react-redux";
class LinkOnPage extends React.Component {
  constructor(props) {
    super(props);
    debugger;
    // this.clickLink = this.clickLink.bind(this);
  }

  // class() {}

  // clickLink(e) {
  //   const category = e.target.getAttribute("data-category");
  //   console.log(e.target);
  // }

  render() {
    const { title, category, changeCategory } = this.props;
    // debugger;
    return (
      <div
        onClick={changeCategory}
        data-category={category}
        className={classes.pageTitle}
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
