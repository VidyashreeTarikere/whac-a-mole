import React, { useEffect, useState } from "react";
import "./Moles.css";
import moleImg from "../assets/mole.png";
import malletImg from "../assets/mallet.png";
import malletRotatedImg from "../assets/malletRotate.png";
// import malletMP3 from "../assets/malletMP3.mp3";
import Yourscore from "./Yourscore";
import Timer from "./Timer";
import Bestscore from "./Bestscore";

const Moles = () => {
  const [moleIndex, setMoleIndex] = useState();
  const [yourScore, setYourScore] = useState(0);
  const [counter, setCounter] = useState(30);
  // eslint-disable-next-line no-unused-vars
  const [gamebtn, setGameBtn] = useState(false);
  const [gameEnd, setGameEnd] = useState(false);
  const [rotateCursor, setRotateCursor] = useState(false);

  let audio = new Audio("src/assets/malletHit.mp3");

  const handleStartBtn = () => {
    setCounter(30);
    setYourScore(0);

    setGameBtn(true);
  };

  const handleModalStartBtn = () => {
    setCounter(30);
    setYourScore(0);

    setGameBtn(true);
    setGameEnd(false);
  };

  useEffect(() => {
    const moleInterval = setInterval(() => {
      const randomnumber = Math.floor(Math.random() * 9);
      setMoleIndex(randomnumber);
    }, 1000);
    return () => clearInterval(moleInterval);
  }, []);

  useEffect(() => {
    const countDown = setInterval(() => {
      setCounter((prev) => {
        if (prev === 0) {
          clearInterval(countDown);
          setGameBtn(false);
          setGameEnd(true);
          return 0;
        } else return prev - 1;
      });
    }, 1000);

    return () => clearInterval(countDown);
  }, [counter]);

  const moleCatched = () => {
    setYourScore(yourScore + 1);
  };

  const handleSound = () => {
    audio.play();
    setRotateCursor(!rotateCursor);
  };

  const handleClose = () => {
    setGameEnd(false);
  };

  return (
    <>
      <div className="gameBody">
        <div className="gameInfo">
          <Bestscore score={yourScore} />
          <Timer time={counter} />
          <Yourscore score={yourScore} />
        </div>
        <div
          className="moles"
          style={{ cursor: `url(${malletImg}) 16 16, auto` }}
        >
          {Array.from({ length: 9 }).map((_, index) => (
            <div className="mole" key={index}>
              {index === moleIndex && counter > 0 ? (
                <button
                  className="moleBtn"
                  style={{
                    cursor: `url(${
                      rotateCursor ? malletImg : malletRotatedImg
                    }) 16 16, auto`,
                  }}
                  onClick={handleSound}
                >
                  <img
                    className="moleImg"
                    src={moleImg}
                    alt="Mole"
                    onClick={moleCatched}
                  />
                </button>
              ) : (
                <div className="hole"></div>
              )}
            </div>
          ))}
        </div>
        {gameEnd && (
          <div className="modal">
            <div className="modal-content">
              <h2>Time's Up!</h2>
              <p>Game over!!</p>
              <div className="btns">
                <button onClick={handleClose} className="modalRestart">
                  Close
                </button>
                <button className="modalRestart" onClick={handleModalStartBtn}>
                  Restart
                </button>
              </div>
            </div>
          </div>
        )}
        <div className="gameBtn">
          <button className="startBtn" onClick={handleStartBtn}>
            Restart
          </button>
        </div>
      </div>
    </>
  );
};

export default Moles;
