import React from "react";
import { Link } from "react-router-dom";

import classes from "./SideDrawer.module.css";

const SideDrawer = (props) => {
  return (
    <div
      className={
        props.open
          ? [classes.SideDrawer, classes.Open].join(" ")
          : [classes.SideDrawer, classes.Close].join(" ")
      }
    >
      <div className={classes.SideDrawer__title}>
        <h2>
          <Link to="/" onClick={props.hideSideDrawer}>
            SciQuiz
          </Link>
        </h2>
        <ul className={classes.SideDrawer__items}>
          <li className={classes.SideDrawer__item}>
            <Link to="/about" onClick={props.hideSideDrawer}>
              About
            </Link>{" "}
          </li>
          <li className={classes.SideDrawer__item}>
            <Link to="/explore" onClick={props.hideSideDrawer}>
              Explore
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideDrawer;
