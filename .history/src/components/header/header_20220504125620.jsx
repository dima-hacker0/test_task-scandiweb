import React from "react";
import classes from "./header.module.css";
import Navigation from "./navigation/navigation";
class Header extends React.Component {
  render() {
    return (
      <section className={classes.sectionNavigation}>
        <div className={classes.sectionContainer}>
          <Navigation />
          <Icons width="50" height="50" name="logo" />
        </div>
      </section>
    );
  }
}

export default Header;
