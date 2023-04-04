import React, { useState, useEffect } from "react";
import room_0Default from "../../assets/room_0Default.png";
import introPieces_0Grey from "../../assets/introPieces_0Grey.png";
import introPieces_1Grey from "../../assets/introPieces_1Grey.png";
import introPieces_2Grey from "../../assets/introPieces_2Grey.png";
import mat_3Grey from "../../assets/mat_3Grey.png";
import introPieces_3Grey from "../../assets/introPieces_3Grey.png";
import introPieces_4Grey from "../../assets/introPieces_4Grey.png";
import introPieces_5Grey from "../../assets/introPieces_5Grey.png";
import backgroundGrey from "../../assets/backgroundGrey.png";

import classes from "./GreyIntro.module.css";

function GreyIntro() {
  const [image0, setImage0] = useState(false);
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);
  const [image5, setImage5] = useState(false);
  const [image6, setImage6] = useState(false);
  const [image7, setImage7] = useState(false);
  const [image8, setImage8] = useState(false);

  useEffect(() => {
    setImage0(true);

    const timer0 = setTimeout(() => {
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
    }, 3000);

    return () => {
      clearTimeout(timer2);
    };
  }, []);

  useEffect(() => {
    const timer3 = setTimeout(() => {
      setImage3(false);
      setImage4(true);
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
      setImage7(true);
    }, 6000);

    return () => {
      clearTimeout(timer5);
    };
  }, []);

  useEffect(() => {
    const timer6 = setTimeout(() => {
      setImage4(false);
      setImage7(false);
      setImage8(true);
    }, 7000);

    return () => {
      clearTimeout(timer6);
    };
  }, []);

  return (
    <div className={classes.greyIntro}>
      {image0 && (
        <img className={classes.room_0Default} src={room_0Default} alt="" />
      )}
      {image1 && (
        <img
          className={classes.introPieces_0Grey}
          src={introPieces_0Grey}
          alt=""
        />
      )}
      {image2 && (
        <img
          className={classes.introPieces_1Grey}
          src={introPieces_1Grey}
          alt=""
        />
      )}
      {image3 && (
        <img
          className={classes.introPieces_2Grey}
          src={introPieces_2Grey}
          alt=""
        />
      )}
      {image4 && <img className={classes.mat_3Grey} src={mat_3Grey} alt="" />}
      {image5 && (
        <img
          className={classes.introPieces_3Grey}
          src={introPieces_3Grey}
          alt=""
        />
      )}
      {image6 && (
        <img
          className={classes.introPieces_4Grey}
          src={introPieces_4Grey}
          alt=""
        />
      )}
      {image7 && (
        <img
          className={classes.introPieces_5Grey}
          src={introPieces_5Grey}
          alt=""
        />
      )}
      {image8 && (
        <img className={classes.backgroundGrey} src={backgroundGrey} alt="" />
      )}
    </div>
  );
}

export default GreyIntro;
