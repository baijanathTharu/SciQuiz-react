import React from "react";
import classes from "./Question.module.css";

const Question = (props) => {
  return (
    <div
      className={
        props.skip
          ? [classes.Question, classes.Question__animate].join(" ")
          : classes.Question
      }
    >
      <div className={classes.Question__name}>
        <p>What is the first element on the periodic table?</p>
      </div>
      <div className={classes.Question__options}>
        <div className={classes.Question__option}>
          <p>A. Helium</p>
        </div>
        <div className={classes.Question__option}>
          <p>B. Lithium</p>
        </div>
        <div className={classes.Question__option}>
          <p>C. Hydrogen</p>
        </div>
        <div className={classes.Question__option}>
          <p>D. Oxygen</p>
        </div>
      </div>
      <div className={classes.Question__buttons}>
        {/* <button className={classes.Question__button}>Previous</button> */}
        <button className={classes.Question__button} onClick={props.clicked}>
          Skip
        </button>
        <button className={classes.Question__button}>Submit</button>
      </div>
    </div>
  );
};

export default Question;
