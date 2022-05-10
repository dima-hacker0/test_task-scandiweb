import React from "react";
import classes from "./main-page.module.css";
import { connect } from "react-redux";
import BlockGoods from "./blockGoods/blockGoods";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { currentCategory } = this.props;
    return (
      <section className={classes.pageGoods}>
        <div className={classes.container}>
          <h1 className={classes.currentPage}>{currentCategory}</h1>
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
