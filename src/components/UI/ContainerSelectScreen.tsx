import React from "react";

import classes from "./ContainerSelectScreen.module.css";

const ContainerSelectScreen = (props) => {
  return <div className={classes.ContainerSelectScreen}>{props.children}</div>
};

export default ContainerSelectScreen;