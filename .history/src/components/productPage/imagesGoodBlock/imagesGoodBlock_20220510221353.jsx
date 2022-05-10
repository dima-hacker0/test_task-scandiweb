import React from "react";
import classes from "imagesGoodBlock.module.css";
import { client } from "../../../query/query";

class ImagesGoodBlock extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const data = client.query({
      query: GET_GOODS("id", "name", "brand"),
      variables: createObjectGetGoods("tech"),
    });
  }
  render() {
    return <div></div>;
  }
}

export default ImagesGoodBlock;
