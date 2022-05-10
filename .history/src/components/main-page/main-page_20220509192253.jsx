import React from "react";
import classes from "./main-page.module.css";
import { connect } from "react-redux";

class MainPage extends React.Component {
  constructor(props) {
    console.log(props);
    super(props);
  }
  render() {
    return (
      <section className={classes.pageGoods}>
        <div className={classes.container}>
          <h1 className={classes.currentPage}>Current page</h1>
        </div>
      </section>
    );
  }
}
const mapStateToProps = (state) => {
  return state.mainPage;
};
export default connect(mapStateToProps, null)(MainPage);
