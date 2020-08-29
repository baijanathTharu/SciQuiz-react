import React, { Component, Fragment } from "react";
import axiosQuiz from "../../AxiosQuiz";

import Question from "../../Components/Questions/Question/Question";
import QuizOver from "../../Components/QuizOver/QuizOver";

class QuizLogic extends Component {
  state = {
    questions: null,
    currentQuestion: {
      // category: "Science & Nature",
      // type: "multiple",
      // difficulty: "easy",
      // question: "What is the largest animal currently on Earth?",
      // correct_answer: "Blue Whale",
      // incorrect_answers: ["Orca", "Colossal Squid", "Giraffe"],
    },
    prevQuestion: null,
    skipped: false,
    q_number: 0,
    Error: null,
    isQuizOver: false,
    numberOfCorrectAnswers: null,
    numberOfIncorrectAnswers: null,
  };

  componentDidMount = () => {
    axiosQuiz
      .get("/api.php?amount=10&category=17&difficulty=easy&type=multiple")
      .then((response) => {
        console.log(response);
        this.setState({
          questions: response.data.results,
          currentQuestion: response.data.results[0],
          numberOfCorrectAnswers: 0,
          numberOfIncorrectAnswers: 0,
        });
      })
      .catch((error) => {
        this.setState({
          Error: "Error fetching Quizes. Sorry for inconvenience!",
        });
        console.log(error);
      });
    console.log("Component has mounted");
  };

  skipHandler = () => {
    console.log("clicked");
    this.setState((prevState) => {
      return {
        currentQuestion:
          prevState.q_number === this.state.questions.length - 1
            ? this.state.questions[0]
            : this.state.questions[prevState.q_number + 1],
        q_number:
          prevState.q_number === this.state.questions.length - 1
            ? 0
            : prevState.q_number + 1,
        isQuizOver:
          prevState.q_number === this.state.questions.length - 1 ? true : false,
        skipped: !prevState.skipped,
      };
    });
  };

  optionClickHandler = (event) => {
    // console.log(event.target.innerText);
    if (event.target.innerText === this.state.currentQuestion.correct_answer) {
      this.setState((prevState) => {
        return {
          numberOfCorrectAnswers: prevState.numberOfCorrectAnswers + 1,
          numberOfIncorrectAnswers: prevState.numberOfIncorrectAnswers,
        };
      });
      console.log(
        "Your answer is correct: ",
        this.state.numberOfCorrectAnswers
      );
    } else {
      this.setState((prevState) => {
        return {
          numberOfCorrectAnswers: prevState.numberOfCorrectAnswers,
          numberOfIncorrectAnswers: prevState.numberOfIncorrectAnswers + 1,
        };
      });
      console.log("Wrong answer!: ", this.state.numberOfIncorrectAnswers);
    }
    this.skipHandler();
  };

  render() {
    const Error = this.state.Error ? this.state.Error : <h2>Loading...</h2>;
    return (
      <Fragment>
        {this.state.isQuizOver ? (
          <QuizOver
            correctSummary={this.state.numberOfCorrectAnswers}
            incorrectSummary={this.state.numberOfIncorrectAnswers}
          />
        ) : this.state.questions ? (
          <Question
            questionName={this.state.currentQuestion.question
              .replace(/&#039;/g, "'")
              .replace(/&quot;/g, '"')
              .replace(/&rsquo;/g, "'")}
            options={[
              ...this.state.currentQuestion.incorrect_answers,
              this.state.currentQuestion.correct_answer,
            ]}
            skipClicked={this.skipHandler}
            skip={this.state.skipped}
            optionClicked={(event) => this.optionClickHandler(event)}
          />
        ) : (
          Error
        )}
      </Fragment>
    );
  }
}

export default QuizLogic;
