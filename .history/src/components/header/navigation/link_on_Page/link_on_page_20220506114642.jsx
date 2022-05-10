import React from "react";
import classes from "./link_on_page.module.css";
import { connect } from "react-redux";
class LinkOnPage extends React.Component {
  constructor(props) {
    super(props);
    this.clickLink = this.clickLink.bind(this);
  }

  clickLink(e) {
    const category = e.target.getAttribute("data-category");
    console.log(this.props.category);
  }

  render() {
    const { title, category, currentCategory } = this.props;
    return (
      <div
        onClick={this.clickLink}
        data-category={category}
        className={
          currentCategory === category
            ? classes.pageTitle
            : `${classes.pageTitle} ${classes.activePageTitle}`
        }
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
