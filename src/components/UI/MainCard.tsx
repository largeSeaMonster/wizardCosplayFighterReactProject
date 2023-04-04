import React from "react";

import classes from "./MainCard.module.css";

const MainCard = (props) => {
  return <div className={classes.mainCard}>{props.children}</div>
};

export default MainCard;
