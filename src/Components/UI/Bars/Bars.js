import React, { Fragment } from "react";
import classes from "./Bars.module.css";

const Bars = (props) => {
  return (
    <Fragment>
      <div
        className={
          props.display
            ? [classes.Bars, classes.Hide].join(" ")
            : [classes.Bars, classes.Show].join(" ")
        }
        onClick={props.clicked}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div
        className={
          props.display
            ? [classes.CrossBars, classes.Show].join(" ")
            : [classes.CrossBars, classes.Hide].join(" ")
        }
        onClick={props.clicked}
      >
        <div></div>
        <div></div>
      </div>
    </Fragment>
  );
};

export default Bars;
