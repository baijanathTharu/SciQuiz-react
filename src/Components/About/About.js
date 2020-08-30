import React from "react";
import classes from "./About.module.css";

const About = () => {
  return (
    <div className={classes.About}>
      <h1>SciQuiz</h1>
      <p>
        SciQuiz is a simple quiz app made with ReactJs. It uses Trivia Api to
        fetch the quiz questions. If you want to see the codes, you can go{" "}
        <a href="https://github.com/baijanathTharu/SciQuiz-react">here</a>
      </p>
    </div>
  );
};

export default About;
