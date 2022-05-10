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
    this.borderLine = React.createRef();
    this.navigation = React.createRef();
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
    const { categories } = this.state;
    const items = categories.map((data, i) => (
      <LinkOnPage category={data.name} title={data.name} number={i} />
    ));

    return (
      <nav ref={navigation} className={classes.navigation}>
        {items}
        <div ref={this.borderLine} className={classes.borderCurrentLink}></div>
      </nav>
    );
  }
}

export default Navigation;
