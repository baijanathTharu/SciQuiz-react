import React, { Component } from "react";

// import Questions from "../../Components/Questions/Questions";
import Question from "../../Components/Questions/Question/Question";

class QuizLogic extends Component {
  state = {
    questions: [
      {
        category: "Science & Nature",
        type: "multiple",
        difficulty: "easy",
        question: "What is the largest animal currently on Earth?",
        correct_answer: "Blue Whale",
        incorrect_answers: ["Orca", "Colossal Squid", "Giraffe"],
      },
      {
        category: "Science & Nature",
        type: "multiple",
        difficulty: "easy",
        question:
          "What does the letter &#039;S&#039; stand for in &#039;NASA&#039;?",
        correct_answer: "Space",
        incorrect_answers: ["Science", "Society", "Star"],
      },
      {
        category: "Science & Nature",
        type: "multiple",
        difficulty: "easy",
        question: "Which element has the chemical symbol &#039;Fe&#039;?",
        correct_answer: "Iron",
        incorrect_answers: ["Gold", "Silver", "Tin"],
      },
      {
        category: "Science & Nature",
        type: "multiple",
        difficulty: "easy",
        question:
          "What is the &quot;powerhouse&quot; of the Eukaryotic animal cell?",
        correct_answer: "Mitochondria",
        incorrect_answers: ["Nucleus", "Chloroplast", "Endoplasmic Reticulum"],
      },
      {
        category: "Science & Nature",
        type: "multiple",
        difficulty: "easy",
        question: "What is the first element on the periodic table?",
        correct_answer: "Hydrogen",
        incorrect_answers: ["Helium", "Oxygen", "Lithium"],
      },
    ],
    currentQuestion: {
      category: "Science & Nature",
      type: "multiple",
      difficulty: "easy",
      question: "What is the largest animal currently on Earth?",
      correct_answer: "Blue Whale",
      incorrect_answers: ["Orca", "Colossal Squid", "Giraffe"],
    },
    prevQuestion: null,
    skipped: true,
  };

  skipHandler = () => {
    console.log("clicked");
    this.setState((prevState) => {
      return {
        skipped: !prevState.skipped,
      };
    });
  };

  render() {
    // const questionsList = this.state.questions.map((que, idx) => {
    //   return <Question key={idx} name={que.question} />;
    // });
    return <Question clicked={this.skipHandler} skip={this.state.skipped} />;
  }
}

export default QuizLogic;
