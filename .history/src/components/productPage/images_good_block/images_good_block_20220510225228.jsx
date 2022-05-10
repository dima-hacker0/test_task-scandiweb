import React from "react";
import classes from "./images_good_block.module.css";
import { client } from "../../../query/query";
import { GET_GOOD_ID } from "../../../query/query";

class ImagesGoodBlock extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const data = client
      .query({
        query: GET_GOOD_ID("name", "brand"),
        variables: {
          id: "apple-iphone-12-pro",
        },
      })
      .then((data) => console.log(data));
  }
  render() {
    return <div></div>;
  }
}

export default ImagesGoodBlock;
