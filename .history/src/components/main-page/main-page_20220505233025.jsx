import React from "react";
import classes from "./main-page.module.css";
class MainPage extends React.Component {
  render() {
    return (
      <section className={classes.pageGoods}>
        <div className={classes.container}>
          <h1>Current page</h1>
        </div>
      </section>
    );
  }
}

export default MainPage;
