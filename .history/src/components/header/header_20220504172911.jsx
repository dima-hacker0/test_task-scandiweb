import React from "react";
import classes from "./header.module.css";
import Navigation from "./navigation/navigation";
import Icons from "../../icons/icons";
import CurrencySelect from "./currency_select/currency_select";
class Header extends React.Component {
  render() {
    return (
      <section className={classes.sectionNavigation}>
        <div className={classes.sectionContainer}>
          <Navigation />
          <Icons className={classes.logo} width="31" height="31" name="logo" />
          <div>
            <CurrencySelect />
          </div>
        </div>
      </section>
    );
  }
}

export default Header;
