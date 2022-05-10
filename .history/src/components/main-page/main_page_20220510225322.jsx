import React from "react";
import classes from "./main-page.module.css";
import { connect } from "react-redux";
import block_goods from "./blockGoods/block_goods";

class MainPage extends React.Component {
  render() {
    const { currentCategory } = this.props;
    return (
      <section className={classes.pageGoods}>
        <div className={classes.container}>
          <h1 className={classes.currentCategor}>{currentCategory}</h1>
          <BlockGoods />
        </div>
      </section>
    );
  }
}
const mapStateToProps = (state) => {
  return state.mainPage;
};
export default connect(mapStateToProps, null)(MainPage);
