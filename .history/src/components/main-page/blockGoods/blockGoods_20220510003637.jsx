import React from "react";
import { client } from "../../../query/query";
import { GET_GOODS } from "../../../query/query";
import { createObjectGetGoods } from "../../../query/query";

class BlockGoods extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      goods: [],
    };
  }
  //   componentDidUpdate() {
  //     console.log("update");
  //   }

  componentDidMount() {
    client
      .query({
        query: GET_GOODS("id", "name", "brand"),
        variables: createObjectGetGoods("tech"),
      })
      .then((result) => console.log(result.data.category.products));
  }
  render() {
    return <div></div>;
  }
}

export default BlockGoods;
