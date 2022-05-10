import React from "react";
import { client } from "../../../query/query";
import { GET_GOODS } from "../../../query/query";
import { createObjectGetGoods } from "../../../query/query";
import Good from "./good/good";
import { connect } from "react-redux";
import classes from "./blockGoods.module.css";

class BlockGoods extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      goods: [],
    };
  }

  componentDidUpdate(prevProps) {
    const { currentCategory } = this.props.mainPage;
    if (prevProps.mainPage.currentCategory === currentCategory) return;
    client
      .query({
        query: GET_GOODS(
          "name",
          "gallery",
          "inStock",
          "prices {amount, currency { symbol, label } }"
        ),
        variables: createObjectGetGoods(currentCategory),
      })
      .then((result) =>
        this.setState({ goods: result.data.category.products })
      );
  }

  render() {
    const { goods } = this.state;
    const { label, symbol } = this.props.currency;

    if (!goods.length) return;
    console.log(goods);
    const items = goods.map((data) => {
      let price = "";
      data.prices.forEach((item) => {
        if (item.currency.label === label) {
          price = item.amount;
        }
      });
      return (
        <Good
          img={data.gallery[0]}
          title={data.name}
          price={price}
          symbol={symbol}
          inStock={data.inStock}
        />
      );
    });

    return <div className={classes.blockGoods}>{items}</div>;
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, null)(BlockGoods);
