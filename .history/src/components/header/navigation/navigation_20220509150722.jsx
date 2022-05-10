import React from "react";
import { client } from "../../../query/query";
import LinkOnPage from "./link_on_Page/link_on_page";
import classes from "./navigation.module.css";
import { GET_CATEGORIES } from "../../../query/query";
class Navigation extends React.Component {
  constructor(props) {
    super(props);
    // this.borderLine = React.createRef();
  }

  componentDidMount() {
    this.response = client
      .query({
        query: GET_CURRENCIES,
      })
      .then((result) => {
        this.setState({ currencies: result.data.currencies });
      });
  }

  render() {
    return (
      <nav className={classes.navigation}>
        <LinkOnPage category="clothes" title="clothes" id={1} />
        <LinkOnPage category="tech" title="technology" id={2} />
        <LinkOnPage category="all" title="all" id={3} />
        {/* <div ref={this.borderLine} className={classes.borderCurrentLink}></div> */}
      </nav>
    );
  }
}

export default Navigation;
