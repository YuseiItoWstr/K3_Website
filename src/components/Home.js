import React, { useRef } from "react";
import Slideshow from "./Slideshow";

const Home = () => {
  const constraintsRef = useRef(null);

  return (
    <div>
      <div className="slideshow" ref={constraintsRef}>
        <Slideshow />
      </div>
      <div class="scrolldown-container">
        <div class="scrolldown4">
          <span>Scroll</span>
        </div>
      </div>
      <div className="intro-text">
        <h2>Bet Like a Professional</h2>
        <p>プロ顔負けのベッティング戦術</p>
      </div>
    </div>
  );
};

export default Home;
