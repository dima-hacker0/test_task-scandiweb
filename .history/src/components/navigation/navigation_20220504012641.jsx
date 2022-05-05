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
            <NavLink></NavLink>
          </div>
        </div>
      </section>
    );
  }
}

export default Navigation;
