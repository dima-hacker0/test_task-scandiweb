import React from "react";
import classes from "./header.module.css";
import Navigation from "./navigation/navigation";
import Icons from "../../icons/icons";
class Header extends React.Component {
  render() {
    return (
      <section className={classes.sectionNavigation}>
        <div className={classes.sectionContainer}>
          <Navigation />
          <Icons width="31" height="31" name="logo" />
        </div>
      </section>
    );
  }
}

export default Header;
