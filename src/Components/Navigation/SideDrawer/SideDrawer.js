import React from "react";
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
        <h2>SciQuiz</h2>
      </div>
    </div>
  );
};

export default SideDrawer;
