import React from "react";
import { client } from "../../../query/query";
import LinkOnPage from "./link_on_Page/link_on_page";
import classes from "./navigation.module.css";
import { GET_CATEGORIES } from "../../../query/query";
import { connect } from "react-redux";
import { changeCategoryCreator } from "../../../redux/mainPageReducer/mainPageCreator";
const MARGIN_LEFT_ITEM = 16;

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.changeCategory = this.changeCategory.bind(this);

    this.borderLine = React.createRef();
    this.navigation = React.createRef();
  }

  changeCategory(e) {
    const {
      props: { dispatch },
      navigation: { current: navigation },
      borderLine: { current: borderLine },
    } = this;

    const distanceLinkLeft = e.target.getBoundingClientRect().left;
    const distanceNavigationLeft = navigation.getBoundingClientRect().left;
    const distance = distanceLinkLeft - distanceNavigationLeft;

    const widthLink = e.target.getBoundingClientRect().width;

    borderLine.style.marginLeft = `${distance - MARGIN_LEFT_ITEM}px`;
    borderLine.style.width = `${widthLink + 2 * MARGIN_LEFT_ITEM}px`;

    const category = e.target.getAttribute("data-category");
    dispatch(changeCategoryCreator(category));
  }

  componentDidMount() {
    const { dispatch } = this.props;
    client
      .query({
        query: GET_CATEGORIES,
      })
      .then((result) => {
        this.setState({ categories: result.data.categories });
        dispatch(changeCategoryCreator(result.data.categories[0].name));
        const link = this.navigation.current.querySelector(
          `[data-category="${this.props.currentCategory}"]`
        );
        debugger;
        console.log(link);
      });
  }

  componentDidUpdate() {
    console.log(this.props.currentCategory);
    const link = this.navigation.current.querySelector(
      `[data-category="${this.props.currentCategory}"]`
    );
    console.log(link);
    console.log(this.props.currentCategory);
  }

  render() {
    const {
      state: { categories },
      navigation,
      borderLine,
      changeCategory,
    } = this;

    const items = categories.map((data) => (
      <LinkOnPage category={data.name} changeCategory={changeCategory} />
    ));

    return (
      <nav ref={navigation} className={classes.navigation}>
        {items}
        <div ref={borderLine} className={classes.borderCurrentLink}></div>
      </nav>
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
)(Navigation);
