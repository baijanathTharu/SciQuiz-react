import React, { Fragment, Component } from "react";
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
    const backdrop = this.state.menuExpanded ? (
      <Backdrop clicked={this.mobileNavHandler} />
    ) : null;
    return (
      <Fragment>
        {backdrop}
        <Navigation
          barsClicked={this.mobileNavHandler}
          expanded={this.state.menuExpanded}
        />
        <div className={classes.App}>
          <QuizLogic />
        </div>
      </Fragment>
    );
  }
}

export default App;
