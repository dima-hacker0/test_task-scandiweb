import React from "react";
import classes from "./images_good_block.module.css";
import { client } from "../../../query/query";
import { GET_GOOD_ID } from "../../../query/query";
import { connect } from "react-redux";

class ImagesGoodBlock extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  // id: String!
  // name: String!
  // inStock: Boolean
  // gallery: [String]
  // description: String!
  // category: String!
  // attributes: [AttributeSet]
  // prices: [Price!]!
  // brand: String!
  componentDidMount() {
    const { idCurrentGood } = this.props;
    if (idCurrentGood === "") return;
    client.query({
      query: GET_GOOD_ID(
        "name",
        "brand",
        "prices {amount, currency { symbol, label } }",
        "description",
        "gallery"
      ),
      variables: {
        id: idCurrentGood,
      },
    });
  }
  render() {
    return <div></div>;
  }
}

const mapStateToProps = (state) => {
  return state.mainPage;
};

export default connect(mapStateToProps, null)(ImagesGoodBlock);
