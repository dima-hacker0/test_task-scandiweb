import React from "react";
import classes from "./productPage.module.css";
import ImagesGoodBlock from "./imagesGoodBlock/imagesGoodBlock";
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
