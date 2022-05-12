import React from "react";
import classes from "./product_page.module.css";
import ImagesGoodBlock from "./images_good_block/images_good_block";
import { client } from "../../query/query";
import { GET_GOOD_ID } from "../../query/query";
import { connect } from "react-redux";
import BlockOptions from "./block_options/block_options";
import { setDataCurrentGoodCreator } from "../../redux/good_reducer/good_creator";

class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentGoodImg: null,
      isLoading: false,
    };
    this.changeCurrentImg = this.changeCurrentImg.bind(this);
  }

  componentDidMount() {
    const {
      dispatch,
      good: { idCurrentGood },
    } = this.props;
    const id =
      idCurrentGood === null
        ? localStorage.getItem("idCurrentGood")
        : idCurrentGood;

    this.setState({ isLoading: true });
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
        localStorage.setItem("idCurrentGood", id);
        dispatch(setDataCurrentGoodCreator(data));
        this.setState({ currentGoodImg: data.data.product.gallery[0] });
        this.setState({ isLoading: false });
      });
  }

  changeCurrentImg(e) {
    this.setState({ currentGoodImg: e.target.src });
  }

  render() {
    const { isLoading } = this.state;
    if (isLoading) {
      return <div>isLoading</div>;
    } else {
      return (
        <section className={classes.sectionProductPage}>
          <div className={classes.container}>
            <div className={classes.content}>
              <ImagesGoodBlock changeCurrentImg={this.changeCurrentImg} />
              <img
                className={classes.mainImg}
                src={this.state.currentGoodImg}
                alt="good"
              />
              <BlockOptions />
            </div>
          </div>
        </section>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return { category: state.category, good: state.good };
};

export default connect(mapStateToProps, null)(ProductPage);
