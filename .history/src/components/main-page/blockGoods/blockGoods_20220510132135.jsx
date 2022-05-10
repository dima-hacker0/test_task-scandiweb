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
  }

  render() {
    const { goods } = this.state;
    const { label } = this.props.currency;

    if (!goods.length) return;

    const items = goods.map((data) => {
      let price = "";
      data.currencies.forEach((item) => {
        if (item.currency.label === label) {
          price = item.amount;
        }
      });
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
