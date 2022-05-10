import React from "react";
import classes from "./product_page.module.css";
import ImagesGoodBlock from "./images_good_block/images_good_block";
import { client } from "../../query/query";
import { GET_GOOD_ID } from "../../query/query";
import { connect } from "react-redux";

class ProductPage extends React.Component {
  componentDidMount() {
    const { idCurrentGood } = this.props;
    if (idCurrentGood === "") return;
    client
      .query({
        query: GET_GOOD_ID(
          "name",
          "brand",
          "prices {amount, currency { symbol, label } }",
          "description",
          "gallery",
          "attributes { id, name, type, items { displayValue, value, id}}"
        ),
        variables: {
          id: idCurrentGood,
        },
      })
      .then((data) => console.log(data));
  }

  render() {
    return (
      <section className={classes.sectionProductPage}>
        <div className={classes.container}>
          <ImagesGoodBlock />
        </div>
      </section>
    );
  }
}

export default connect()(ProductPage);
