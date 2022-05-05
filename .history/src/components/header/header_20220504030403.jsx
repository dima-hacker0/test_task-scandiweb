import React from "react";
import classes from "./header.module.css";
class Header extends React.Component {
  render() {
    return (
      <section className={classes.sectionNavigation}>
        <div className={classes.sectionContainer}>
          <Navigation />
        </div>
      </section>
    );
  }
}

export default Navigatio;
