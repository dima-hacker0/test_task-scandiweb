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

  render() {
    const { currency } = this.props;
    console.log(currency);
    // console.log(this.props.currency);
    const { goods } = this.state;
    if (!goods.length) return;
    // console.log(goods);
    // const prices = goods[0].prices;
    // console.log(prices);
    const items = goods.map((data) => {
      //   console.log(data.prices);
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
