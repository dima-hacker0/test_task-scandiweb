import React from "react";
import { client } from "../../../query/query";
import { GET_GOODS } from "../../../query/query";
import { createObjectGetGoods } from "../../../query/query";
import Good from "./good/good";
import { connect } from "react-redux";

class BlockGoods extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      goods: [],
    };
  }

  componentDidMount() {
    client
      .query({
        query: GET_GOODS(
          "name",
          "brand",
          "prices {amount, currency { symbol, label } }"
        ),
        variables: createObjectGetGoods("tech"),
      })
      .then((result) => console.log(result.data.category.products));
  }
  render() {
    return (
      <div>
        <Good />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state.mainPage;
};

export default connect(mapStateToProps, null)(BlockGoods);
