import React from "react";
import classes from "./navigation.module.css";
class Navigation extends React.Component {
  render() {
    return (
      <section className={classes.sectionNavigation}>
        <div className={classes.sectionContainer}>
          <ul className={classes.listPageTitle}>
            <li className={classes.pageTitle}>WOMEN</li>
            <li className={classes.pageTitle}>KIDS</li>
            <li className={classes.pageTitle}>MEN</li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Navigation;
