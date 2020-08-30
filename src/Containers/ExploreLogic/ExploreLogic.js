import React, { Component, Fragment } from "react";
import Explore from "../../Components/Explore/Explore";
import axios from "../../AxiosQuiz";

class ExploreLogic extends Component {
  state = {
    fetch: "amount=10",
    questions: null,
    Error: null,
    userOptions: {
      categories: [
        {
          name: "All",
          val: "",
        },
        { name: "Science & Nature", val: 17 },
        { name: "Science: Computers", val: 18 },
        { name: "Science: Mathematics", val: 19 },
      ],
      difficulties: [
        { name: "All", val: "" },
        { name: "Easy", val: "easy" },
        { name: "Medium", val: "medium" },
        { name: "Hard", val: "hard" },
      ],
    },
    loading: false,
  };

  componentDidMount = () => {
    axios
      .get(`/api.php?${this.state.fetch}`)
      .then((response) => {
        this.setState({
          questions: response.data.results,
        });
      })
      .catch((error) => {
        this.setState({
          Error: true,
        });
      });
    // console.log("Explore has mounted");
  };

  componentDidUpdate = (_, prevState) => {
    // console.log(prevState.fetch);
    if (prevState.fetch !== this.state.fetch) {
      axios
        .get(`/api.php?${this.state.fetch}`)
        .then((response) => {
          this.setState({
            questions: response.data.results,
            loading: false,
          });
        })
        .catch((error) => {
          this.setState({
            Error: true,
          });
        });
      // console.log("Explore has updated");
      // console.log("Now: ", this.state.fetch);
    }
  };

  userInputHandler = (event) => {
    // console.log(event.target.dataset.name);
    if (event.target.dataset.name === "Category") {
      this.setState({
        fetch: this.state.fetch + "&category=" + event.target.value,
        loading: true,
      });
    }
    if (event.target.dataset.name === "Difficulty") {
      this.setState({
        fetch: this.state.fetch + "&difficulty=" + event.target.value,
        loading: true,
      });
    }
    // console.log(event.target);
  };

  render() {
    return (
      <Fragment>
        {this.state.loading ? <h2>Loading...</h2> : null}
        {this.state.questions ? (
          <Explore
            questionsArr={this.state.questions}
            userOpt={this.state.userOptions}
            changed={(event) => this.userInputHandler(event)}
          />
        ) : (
          <h2>Loading...</h2>
        )}
      </Fragment>
    );
  }
}

export default ExploreLogic;
