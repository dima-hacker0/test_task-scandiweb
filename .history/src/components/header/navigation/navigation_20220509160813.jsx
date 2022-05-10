import React from "react";
import { client } from "../../../query/query";
import LinkOnPage from "./link_on_Page/link_on_page";
import classes from "./navigation.module.css";
import { GET_CATEGORIES } from "../../../query/query";
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
      navigation: { current: navigation },
      borderLine: { current },
    } = this;
    const distanceLinkLeft = e.target.getBoundingClientRect().left;
    const distanceNavigationLeft = current.getBoundingClientRect().left;
    const distance = distanceLinkLeft - distanceNavigationLeft;

    this.borderLine.current.style.marginLeft = `${
      distance - MARGIN_LEFT_ITEM
    }px`;
  }

  componentDidMount() {
    this.response = client
      .query({
        query: GET_CATEGORIES,
      })
      .then((result) => {
        this.setState({ categories: result.data.categories });
      });
  }

  render() {
    const {
      state: { categories },
      navigation,
      borderLine,
      changeCategory,
    } = this;

    const items = categories.map((data, i) => (
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

export default Navigation;
