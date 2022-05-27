import React from "react";
import classes from "./main_page.module.css";
import { connect } from "react-redux";
import BlockGoods from "./blockGoods/block_goods";

class MainPage extends React.Component {
  render() {
    const { currentCategory } = this.props;
    debugger;
    const result =
      currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1);

    return (
      <section className={classes.pageGoods}>
        <div className={classes.container}>
          <h1 className={classes.currentCategor}>{result}</h1>
          <BlockGoods />
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return state.category;
};

export default connect(mapStateToProps, null)(MainPage);
