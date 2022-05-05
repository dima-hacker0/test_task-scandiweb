import React from "react";
import classes from "./header.module.css";
import { NavLink } from "react-router-dom";
class Navigation extends React.Component {
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

export default Navigation;
