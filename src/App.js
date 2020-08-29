import React, { Fragment, Component } from "react";
import { BrowserRouter } from "react-router-dom";
import classes from "./App.module.css";

import Navigation from "./Components/Navigation/Navigation";
import QuizLogic from "./Containers/QuizLogic/QuizLogic";
import Backdrop from "./Components/UI/Backdrop/Backdrop";

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
          <Navigation
            barsClicked={this.mobileNavHandler}
            expanded={this.state.menuExpanded}
          />

          <div className={classes.App}>
            <QuizLogic />
          </div>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;
