import React from "react";
import { client } from "../../../query/query";
import { GET_GOODS } from "../../../query/query";
import { createObjectGetGoods } from "../../../query/query";
class BlockGoods extends React.Component {
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

export default BlockGoods;
