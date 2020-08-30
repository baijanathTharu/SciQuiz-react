import React from "react";
import { Link } from "react-router-dom";

import Bars from "../UI/Bars/Bars";
import SideDrawer from "./SideDrawer/SideDrawer";

import classes from "./Navigation.module.css";

const Navigation = (props) => {
  return (
    <div className={classes.Navigation}>
      <SideDrawer open={props.expanded} hideSideDrawer={props.linkClicked} />
      <h1>
        <a href="/">SciQuiz</a>
      </h1>
      <ul className={classes.Navigation__list}>
        <li className={classes.Navigation__items}>
          {" "}
          <Link to="/about">About</Link>{" "}
        </li>
        <li className={classes.Navigation__items}>
          <Link to="/explore" style={{ color: "white" }}>
            Explore
          </Link>
        </li>
      </ul>
      <Bars clicked={props.barsClicked} display={props.expanded} />
    </div>
  );
};

export default Navigation;
