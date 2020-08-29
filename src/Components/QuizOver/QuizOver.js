import React from "react";
import classes from "./QuizOver.module.css";

const QuizOver = (props) => {
  return (
    <div className={classes.QuizOver}>
      <h2>Quiz Over</h2>
      <div className={classes.QuizOver__flex}>
        <div className={classes.QuizOver__summary}>
          Total Correct: {props.correctSummary}
        </div>
        <div className={classes.QuizOver__summary}>
          Total Incorrect: {props.incorrectSummary}
        </div>
      </div>
    </div>
  );
};
export default QuizOver;
