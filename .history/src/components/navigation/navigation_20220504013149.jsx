import React from "react";
import classes from "./navigation.module.css";
import { NavLink } from "react-router-dom";
class Navigation extends React.Component {
  render() {
    return (
      <section className={classes.sectionNavigation}>
        <div className={classes.sectionContainer}>
          <div className={classes.listPageTitle}>
            <NavLink className={classes.pageTitle} to="women-page">
              WOMEN
            </NavLink>
            <NavLink className={classes.pageTitle} to="kids-page">
              KIDS
            </NavLink>
            <NavLink className={classes.pageTitle} to="men-page">
              MEN
            </NavLink>
          </div>
        </div>
      </section>
    );
  }
}

export default Navigation;
