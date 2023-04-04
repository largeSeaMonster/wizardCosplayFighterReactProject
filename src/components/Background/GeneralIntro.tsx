import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { blueGameActions } from "../../store/blueGame-slice";

import introImage_0 from "../../assets/introImage_0.png";
import introImage_1 from "../../assets/introImage_1.png";
import introImage_2 from "../../assets/introImage_2.png";
import room_0Default from "../../assets/room_0Default.png";
import introPieces_0 from "../../assets/introPieces_0.png";
import introPieces_1 from "../../assets/introPieces_1.png";
import introPieces_2 from "../../assets/introPieces_2.png";

import classes from "./GeneralIntro.module.css";

function GeneralIntro() {
  const dispatch = useDispatch();

  const [image0, setImage0] = useState(false);
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);
  const [image5, setImage5] = useState(false);
  const [image6, setImage6] = useState(false);

  useEffect(() => {
    setImage0(true);

    const timer0 = setTimeout(() => {
      setImage0(false);
      setImage1(true);
    }, 1000);

    return () => {
      clearTimeout(timer0);
    };
  }, []);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setImage1(false);
      setImage2(true);
    }, 2000);

    return () => {
      clearTimeout(timer1);
    };
  }, []);

  useEffect(() => {
    const timer2 = setTimeout(() => {
      setImage2(false);
      setImage3(true);
      setImage4(true);
    }, 3000);

    return () => {
      clearTimeout(timer2);
    };
  }, []);

  useEffect(() => {
    const timer3 = setTimeout(() => {
      setImage4(false);
      setImage5(true);
    }, 4000);

    return () => {
      clearTimeout(timer3);
    };
  }, []);

  useEffect(() => {
    const timer4 = setTimeout(() => {
      setImage5(false);
      setImage6(true);
    }, 5000);

    return () => {
      clearTimeout(timer4);
    };
  }, []);

  useEffect(() => {
    const timer5 = setTimeout(() => {
      setImage6(false);
      dispatch(blueGameActions.greyIntro());
    }, 6000);

    return () => {
      clearTimeout(timer5);
    };
  }, [dispatch]);

  return (
    <div className={classes.generalIntro}>
      {image0 && <img src={introImage_0} alt="" />}
      {image1 && <img src={introImage_1} alt="" />}
      {image2 && <img src={introImage_2} alt="" />}
      {image3 && (
        <img className={classes.room_0Default} src={room_0Default} alt="" />
      )}
      {image4 && (
        <img className={classes.introPieces_0} src={introPieces_0} alt="" />
      )}
      {image5 && (
        <img className={classes.introPieces_1} src={introPieces_1} alt="" />
      )}
      {image6 && (
        <img className={classes.introPieces_2} src={introPieces_2} alt="" />
      )}
    </div>
  );
}

export default GeneralIntro;
