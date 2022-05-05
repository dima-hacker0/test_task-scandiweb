import React from "react";
import classes from "./navigation.module.css";
import { NavLink } from "react-router-dom";
class Navigation extends React.Component {
  render() {
    return (
      <section className={classes.sectionNavigation}>
        <div className={classes.sectionContainer}>
          <div className={classes.listPageTitle}>
            {/* <li className={classes.pageTitle}>WOMEN</li>
            <li className={classes.pageTitle}>KIDS</li>
            <li className={classes.pageTitle}>MEN</li> */}
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
