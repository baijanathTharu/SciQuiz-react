import React from "react";
import classes from "./Categories.module.css";

import Select from "../../UI/Select/Select";

const Categories = (props) => {
  return (
    <div className={classes.Categories}>
      <Select
        optionsArr={props.userOpt.categories}
        title="Category"
        changed={props.changed}
      />
      <Select
        optionsArr={props.userOpt.difficulties}
        title="Difficulty"
        changed={props.changed}
      />
    </div>
  );
};

export default Categories;
