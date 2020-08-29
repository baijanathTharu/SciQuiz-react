import React from "react";
import classes from "./Question.module.css";
import Options from "../../Options/Options";

const Question = (props) => {
  return (
    <div
      className={
        props.skip
          ? [classes.Question, classes.Question__animatepos].join(" ")
          : [classes.Question, classes.Question__animateneg].join(" ")
      }
    >
      <div className={classes.Question__name}>
        <p>{props.questionName}</p>
      </div>
      <Options clicked={props.optionClicked} options={props.options} />
      <div className={classes.Question__buttons}>
        {/* <button className={classes.Question__button}>Previous</button> */}
        <button
          className={classes.Question__button}
          onClick={props.skipClicked}
        >
          Skip
        </button>
        {/* <button className={classes.Question__button}>Confirm</button> */}
        {/* <button className={classes.Question__button}>Submit</button> */}
      </div>
    </div>
  );
};

export default Question;
