import React from "react";
import classes from "./Explore.module.css";

import Questions from "../Questions/Questions";
import Categories from "../Explore/Categories/Categories";

const Explore = (props) => {
  return (
    <div className={classes.Explore}>
      <Categories userOpt={props.userOpt} changed={props.changed} />
      <Questions questionsArr={props.questionsArr} />
    </div>
  );
};

export default Explore;
