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

  componentDidMount() {
    const { idCurrentGood } = this.props;
    if (idCurrentGood === "") return;
    client
      .query({
        query: GET_GOOD_ID(
\          "brand",
          "prices {amount, currency { symbol, label } }",
          "description",
          "gallery"
          // "attributes { id, name, type, items { displayValue, value, id}}"
        ),
        variables: {
          id: idCurrentGood,
        },
      })
      .then((data) => console.log(data));
  }
  render() {
    return <div></div>;
  }
}

const mapStateToProps = (state) => {
  return state.mainPage;
};

export default connect(mapStateToProps, null)(ImagesGoodBlock);
