import React from "react";
import { client } from "../../../query/query";
import LinkOnPage from "./link_on_Page/link_on_page";
import classes from "./navigation.module.css";
import { GET_CATEGORIES } from "../../../query/query";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.changeCategory = this.changeCategory.bind();
    this.borderLine = React.createRef();
    this.navigation = React.createRef();
  }

  changeCategory() {}

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
      <LinkOnPage category={data.name} title={data.name} number={i} />
    ));

    return (
      <nav ref={navigation} className={classes.navigation}>
        {items}
        <div
          ref={borderLine}
          className={classes.borderCurrentLink}
          changeCategory={this.changeCategory}
        ></div>
      </nav>
    );
  }
}

export default Navigation;
