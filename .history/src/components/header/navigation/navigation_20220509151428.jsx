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
    // this.borderLine = React.createRef();
  }

  componentDidMount() {
    debugger;
    this.response = client
      .query({
        query: GET_CATEGORIES,
      })
      .then((result) => {
        this.setState({ categories: result.data.categories });
      });
    debugger;
  }

  render() {
    debugger;
    const items = this.categories.map((data) =>
      // <LinkOnPage category="clothes" title="clothes" id={1} />
      console.log(data)
    );
    return (
      <nav className={classes.navigation}>
        {/* <LinkOnPage category="clothes" title="clothes" id={1} />
        <LinkOnPage category="tech" title="technology" id={2} />
        <LinkOnPage category="all" title="all" id={3} /> */}
        {/* <div ref={this.borderLine} className={classes.borderCurrentLink}></div> */}
      </nav>
    );
  }
}

export default Navigation;
