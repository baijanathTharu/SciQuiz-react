import React from "react";

import classes from "./Questions.module.css";

const Questions = (props) => {
  const questionsArr = props.questionsArr.map((que, idx) => {
    return (
      <div className={classes.Questions__question} key={`que_${idx}`}>
        {que.question
          .replace(/&#039;/g, "'")
          .replace(/&quot;/g, '"')
          .replace(/&rsquo;/g, "'")}
        <div className={classes.Questions__correct}>
          {" "}
          {`-${que.correct_answer}`}{" "}
        </div>
      </div>
    );
  });
  return <div className={classes.Questions}>{questionsArr}</div>;
};

export default Questions;
