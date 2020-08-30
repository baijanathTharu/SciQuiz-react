import React, { Fragment } from "react";
import classes from "./Select.module.css";

const Select = (props) => {
  const options = props.optionsArr.map((opt, idx) => {
    return (
      <option key={`opt_${idx}`} value={opt.val}>
        {opt.name}
      </option>
    );
  });

  return (
    <Fragment>
      <label>{props.title}</label>
      <select
        className={classes.Select}
        data-name={props.title}
        onChange={props.changed}
      >
        {options}
      </select>
    </Fragment>
  );
};

export default Select;
