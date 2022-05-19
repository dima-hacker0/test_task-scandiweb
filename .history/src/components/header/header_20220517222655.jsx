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
      basketIsOpened: false,
    };
    this.hideContent = this.hideContent.bind(this);
    this.aaa = this.aaa.bind(this)
    this.heightPage = document.documentElement.scrollHeight;
  }

  hideContent(openOrClose) {
    this.heightPage = document.documentElement.scrollHeight;
    this.setState({ basketIsOpened: openOrClose });
  }

  aaa {

  }

  render() {
    const {
      state: { basketIsOpened },
      heightPage,
    } = this;

    return (
      <header className={classes.header}>
        <div className={classes.container}>
          <Navigation />
          <Icons className={classes.logo} width="31" height="31" name="logo" />
          <div className={classes.currencyAndBasket}>
            <CurrencySelect />
            <Basket
              basketIsOpened={basketIsOpened}
              hideContent={this.hideContent}
            />
          </div>
        </div>
        <div
          style={
            basketIsOpened
              ? { height: heightPage - 80 + "px" }
              : { height: 0 + "px" }
          }
          onClick={this.setState({ basketIsOpened: false })}
          className={
            basketIsOpened
              ? `${classes.hideContent} ${classes.hideContentOn}`
              : classes.hideContent
          }
        ></div>
      </header>
    );
  }
}

export default Header;
