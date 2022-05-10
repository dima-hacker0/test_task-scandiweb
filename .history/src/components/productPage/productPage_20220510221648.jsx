import React from "react";
import ImagesGoodBlock from "./imagesGoodBlock/imagesGoodBlock";
import classes from "./productPage.module.css";

class ProductPage extends React.Component {
  render() {
    return (
      <section className={classes.sectionProductPage}>
        <div className={classes.container}>
          <ImagesGoodBlock />
        </div>
      </section>
    );
  }
}

export default ProductPage;
