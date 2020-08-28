import React from "react";

import Bars from "../UI/Bars/Bars";
import SideDrawer from "./SideDrawer/SideDrawer";

import classes from "./Navigation.module.css";

const Navigation = (props) => {
  return (
    <div className={classes.Navigation}>
      <SideDrawer open={props.expanded} />
      <h1>SciQuiz</h1>
      <ul className={classes.Navigation__list}>
        <li className={classes.Navigation__items}>About</li>
        <li className={classes.Navigation__items}>Explore</li>
      </ul>
      <Bars clicked={props.barsClicked} display={props.expanded} />
    </div>
  );
};

export default Navigation;
