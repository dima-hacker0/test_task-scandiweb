import React from "react";
import classes from "./product_page.module.css";
import ImagesGoodBlock from "./images_good_block/images_good_block";
import { client } from "../../query/query";
import { GET_GOOD_ID } from "../../query/query";
import { connect } from "react-redux";
import { setDataCurrentGoodCreator } from "../../redux/main_page_reducer/main_page_creator";

class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentGoodImg: null,
    };
  }
  componentDidMount() {
    const { idCurrentGood, dispatch } = this.props;
    const id =
      idCurrentGood === null
        ? localStorage.getItem("idCurrentGood")
        : idCurrentGood;

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
          id: id,
        },
      })
      .then((data) => {
        dispatch(setDataCurrentGoodCreator(data));
      });
  }

  componentWillUnmount() {
    const { idCurrentGood } = this.props;
    localStorage.setItem("idCurrentGood", idCurrentGood);
  }

  changeCurrentImg() {
    console.log(111);
  }

  render() {
    return (
      <section className={classes.sectionProductPage}>
        <div className={classes.container}>
          <div className={classes.content}>
            <ImagesGoodBlock changeCurrentImg={this.changeCurrentImg} />
            <img className={classes.mainImg} src="" alt="good" />
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return state.mainPage;
};

export default connect(mapStateToProps, null)(ProductPage);
