import React from "react";
import classes from "./header.module.css";
import Navigation from "./navigation/navigation";
import Icons from "../../icons/icons";
import CurrencySelect from "./currency_select/currency_select";
import Basket from "./basket/basket";
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      basketIsOpened: true,
    };
    this.hideContent = this.hideContent.bind(this);
    this.heightPage = document.documentElement.scrollHeight;
  }

  hideContent(openOrClose) {
    // debugger;
    this.heightPage = document.documentElement.scrollHeight;
    this.setState({ basketIsOpened: openOrClose });
  }

  render() {
    const {
      state: { basketIsOpened },
      pageHeight,
    } = this;
    // debugger;
    console.log(basketIsOpened);
    return (
      <section className={classes.header}>
        <div className={classes.container}>
          <Navigation />
          <Icons className={classes.logo} width="31" height="31" name="logo" />
          <div className={classes.currencyAndBasket}>
            <CurrencySelect />
            <Basket hideContent={this.hideContent} />
          </div>
        </div>
        {basketIsOpened ? (
          <div
            style={{ height: pageHeight - 80 + "px" }}
            className={classes.hideContent}
          ></div>
        ) : null}
      </section>
    );
  }
}

export default Header;