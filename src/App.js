import React, { Fragment, Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import classes from "./App.module.css";

import Navigation from "./Components/Navigation/Navigation";
import QuizLogic from "./Containers/QuizLogic/QuizLogic";
import Backdrop from "./Components/UI/Backdrop/Backdrop";
import ExploreLogic from "./Containers/ExploreLogic/ExploreLogic";
import About from "./Components/About/About";

class App extends Component {
  state = {
    menuExpanded: false,
  };

  mobileNavHandler = () => {
    // console.log("Show back drop now!");
    this.setState((prevState) => {
      return {
        menuExpanded: !prevState.menuExpanded,
      };
    });
  };

  render() {
    return (
      <Fragment>
        <BrowserRouter>
          {this.state.menuExpanded ? (
            <Backdrop clicked={this.mobileNavHandler} />
          ) : null}
          <div className={classes.App}>
            <Navigation
              barsClicked={this.mobileNavHandler}
              expanded={this.state.menuExpanded}
              linkClicked={this.mobileNavHandler}
            />
            <Route path="/" exact component={QuizLogic} />
            <Route path="/about" exact component={About} />
            <Route path="/explore" exact component={ExploreLogic} />
          </div>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;
