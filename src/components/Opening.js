import React, { useState, useEffect } from "react";
import imageSrcJ from "./crisis_jorge.png";

const Opening = ({ onAnimationComplete }) => {
  const [progress, setProgress] = useState(0);
  const [count, setCount] = useState(0);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount((prevCount) => prevCount + 1);
      setProgress((prevProgress) => prevProgress + 10);
      if (count === 9) {
        clearTimeout(timer);
        setAnimationComplete(true);
        setTimeout(() => {
          onAnimationComplete();
        }, 100);
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [count, onAnimationComplete]);

  return (
    <div className="opening-background">
      <div
        className={`opening-container ${animationComplete ? "animate" : ""}`}
      >
        <img src={imageSrcJ} alt="Crisis_Jorge" className="crisis_jorge" />
        <h1>Now Loading...</h1>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>
        <p>{count * 10}%</p>
      </div>
    </div>
  );
};

export default Opening;
