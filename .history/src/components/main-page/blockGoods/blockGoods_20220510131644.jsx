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
    this.calculatePrice = this.calculatePrice.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { currentCategory } = this.props.mainPage;
    if (prevProps.mainPage.currentCategory === currentCategory) return;
    client
      .query({
        query: GET_GOODS(
          "name",
          "gallery",
          "prices {amount, currency { symbol, label } }"
        ),
        variables: createObjectGetGoods(currentCategory),
      })
      .then((result) =>
        this.setState({ goods: result.data.category.products })
      );
  }

  calculatePrice(currenciesArr) {
    const { label } = this.props.currency;
    currenciesArr.forEach((item) => {
      if (item.currency.label === label) {
        console.log(item.amount);
        return item.amount;
      }
    });
  }

  render() {
    const { goods } = this.state;
    if (!goods.length) return;
    const items = goods.map((data) => {
      const price = this.calculatePrice(data.prices);
      console.log(price);
      return <Good img={data.gallery[0]} title={data.name} />;
    });

    return (
      <div>
        <Good />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, null)(BlockGoods);
