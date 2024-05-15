import React, { useRef } from "react";
import Slideshow from "./Slideshow";

const Body = () => {
  const constraintsRef = useRef(null);

  return (
    <div className="slideshow" ref={constraintsRef}>
      <Slideshow />
    </div>
  );
};

export default Body;
