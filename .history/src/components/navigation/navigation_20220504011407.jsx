import React from "react";
import classes from "./navigation.module.css";
class Navigation extends React.Component {
  render() {
    return (
      <section className={classes.sectionNavigation}>
        <div className={classes.sectionContainer}>
          <ul className={classes.listPageTitle}>
            <li className={classes.PageTitle}>WOMEN</li>
            <li className={classes.PageTitle}>KIDS</li>
            <li className={classes.PageTitle}>MEN</li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Navigation;
