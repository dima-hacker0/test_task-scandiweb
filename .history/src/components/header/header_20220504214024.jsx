import React from "react";
import classes from "./header.module.css";
import Navigation from "./navigation/navigation";
import Icons from "../../icons/icons";
import CurrencySelect from "./currency_select/currency_select";
import Basket from "./basket/basket";
class Header extends React.Component {
  render() {
    return (
      <section className={classes.header}>
        <div className={classes.container}>
          <Navigation />
          <Icons className={classes.logo} width="31" height="31" name="logo" />
          <div>
            <CurrencySelect />
            <Basket />
          </div>
        </div>
      </section>
    );
  }
}

export default Header;