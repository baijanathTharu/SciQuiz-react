import React from "react";
import classes from "./Options.module.css";
import Option from "./Option/Option";

const Options = (props) => {
  const optionsList = props.options.map((option, idx) => {
    return <Option key={`opt_${idx}`} clicked={props.clicked} opt={option} />;
  });
  return <div className={classes.Options}>{optionsList}</div>;
};

export default Options;
