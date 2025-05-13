import React, { useEffect, useState } from "react";

const initializeState = () => {
  const saved = JSON.parse(localStorage.getItem("new-score")) ?? 0;
  return typeof saved === "number" && !isNaN(saved) ? saved : 0;
};

const Bestscore = ({ score }) => {
  const [newScore, setNewScore] = useState(initializeState());

  useEffect(() => {
    if (score > newScore) {
      console.log("in IF");
      setNewScore(score);
    }
  }, [score, newScore]);

  useEffect(() => {
    localStorage.setItem("new-score", JSON.stringify(newScore));
  }, [newScore]);

  return <div>Bestscore: {newScore}</div>;
};

export default Bestscore;
