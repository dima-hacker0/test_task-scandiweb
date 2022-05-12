import React from "react";
import { client } from "../../../query/query";
import { GET_GOODS } from "../../../query/query";
import { createObjectGetGoods } from "../../../query/query";
import Good from "./good/good";
import { connect } from "react-redux";
import classes from "./block_goods.module.css";
import { calculatePrice } from "../../../functions/functions";

class BlockGoods extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      goods: [],
    };
    this.setGoods = this.setGoods.bind(this);
  }

  setGoods() {
    const { currentCategory } = this.props.mainPage;
    if (currentCategory === null) return;
    client
      .query({
        query: GET_GOODS(
          "name",
          "gallery",
          "inStock",
          "id",
          "prices {amount, currency { symbol, label } }"
        ),
        variables: createObjectGetGoods(currentCategory),
      })
      .then((result) =>
        this.setState({ goods: result.data.category.products })
      );
    debugger;
  }

  componentDidUpdate(prevProps) {
    const { currentCategory } = this.props.mainPage;
    if (prevProps.mainPage.currentCategory === currentCategory) return;
    this.setGoods();
  }

  componentDidMount() {
    this.setGoods();
  }

  render() {
    const { goods } = this.state;
    const { label, symbol } = this.props.currency;

    if (!goods.length) return;
    const items = goods.map((data) => {
      const price = calculatePrice(data.prices, label);
      return (
        <Good
          img={data.gallery[0]}
          title={data.name}
          price={price}
          symbol={symbol}
          inStock={data.inStock}
          id={data.id}
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
