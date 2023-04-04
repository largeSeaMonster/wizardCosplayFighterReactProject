import React, { Fragment } from "react";
import { useSelector } from "react-redux";

import GeneralIntro from "../Background/GeneralIntro";
import GreyIntro from "../Background/GreyIntro";

import classes from "./BlueGame.module.css";


function BlueGame() {
  const generalIntro = useSelector((state) => state.blueGame.generalIntro);
  const greyIntro = useSelector((state) => state.blueGame.greyIntro);

  return (
    <div className={classes.blueContainer}>
      {generalIntro && <GeneralIntro />}
      {greyIntro && <GreyIntro />}
    </div>
  );
}

export default BlueGame;
