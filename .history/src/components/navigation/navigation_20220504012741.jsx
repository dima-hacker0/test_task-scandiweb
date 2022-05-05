import React from "react";
import classes from "./navigation.module.css";
import { NavLink } from "react-router-dom";
class Navigation extends React.Component {
  render() {
    return (
      <section className={classes.sectionNavigation}>
        <div className={classes.sectionContainer}>
          <div className={classes.listPageTitle}>
            <NavLink className={classes.pageTitle}>WOMEN</NavLink>
            <NavLink className={classes.pageTitle}>KIDS</NavLink>
            <NavLink className={classes.pageTitle}>MEN</NavLink>
          </div>
        </div>
      </section>
    );
  }
}

export default Navigation;
