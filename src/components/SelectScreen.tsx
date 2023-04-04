import React from "react";
import { useDispatch } from "react-redux";
import { selectActions } from "../store/select-slice";

import homeScreen from "../assets/inBetweenCurtain_2.png";
import classes from "./SelectScreen.module.css";

function SelectScreen() {
  const dispatch = useDispatch();

  const submitBlueHandler = (event) => {
    event.preventDefault();
    dispatch(selectActions.selectBlue());
  };

  const submitGreyHandler = (event) => {
    event.preventDefault();
    dispatch(selectActions.selectGrey());
  };

  const submitRedHandler = (event) => {
    event.preventDefault();
    dispatch(selectActions.selectRed());
  };

  return (
    <div className={classes.container}>
      <div className={classes.buttonRow}>
        <button onClick={submitBlueHandler} className={classes.blueButton} />
        <button onClick={submitGreyHandler} className={classes.greyButton} />
        <button onClick={submitRedHandler} className={classes.redButton} />
      </div>
      <img src={homeScreen} />
    </div>
  );
}

export default SelectScreen;
