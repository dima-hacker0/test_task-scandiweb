import React from "react";
import classes from "./product_page.module.css";
import ImagesGoodBlock from "./images_good_block/images_good_block";
import { client } from "../../query/query";
import { GET_GOOD_ID } from "../../query/query";
import { connect } from "react-redux";
import { setDataCurrentGood } from "../../redux/main_page_reducer/main_page_creator";

class ProductPage extends React.Component {
  componentDidMount() {
    const { idCurrentGood, dispatch } = this.props;
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
      .then((data) => dispatch(setDataCurrentGood(data)));
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

const mapStateToProps = (state) => {
  return state.mainPage;
};

export default connect(mapStateToProps, null)(ProductPage);
