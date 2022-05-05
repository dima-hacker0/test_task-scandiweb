import React from "react";
import classes from "./navigation.module.css";
class Navigation extends React.Component {
  render() {
    return (
      <section className={classes.sectionNavigation}>
        <div className={classes.sectionContainer}>
          <ul>
            <li>WOMEN</li>
            <li>KIDS</li>
            <li>MEN</li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Navigation;
