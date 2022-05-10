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

  componentDidUpdate() {
    console.log(this.props);
    client
      .query({
        query: GET_GOODS(
          "name",
          "gallery",
          "prices {amount, currency { symbol, label } }"
        ),
        variables: createObjectGetGoods("tech"),
      })
      .then((result) => this.setState(result.data.category.products));
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
