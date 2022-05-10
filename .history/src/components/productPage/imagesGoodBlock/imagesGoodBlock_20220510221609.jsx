import React from "react";
import classes from "imagesGoodBlock.module.css";
import { client } from "../../../query/query";
import { GET_GOOD_ID } from "../../../query/query";

class ImagesGoodBlock extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const data = client
      .query({
        query: GET_GOOD_ID("id", "name", "brand"),
        variables: {
          id: {
            title: "apple-iphone-12-pro",
          },
        },
      })
      .then((data) => console.log(data));
  }
  render() {
    return <div></div>;
  }
}

export default ImagesGoodBlock;
