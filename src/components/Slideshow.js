import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import "./Slideshow.css";

const images = ["keibazyo.png", "dura.png", "keiba1.png", "keibazyo2.jpg"];
const Slideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    controls.start("visible");
  }, [currentImageIndex, controls]);

  return (
    <div className="slideshow">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === currentImageIndex ? "active" : ""}`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
      <motion.div
        className="image-text"
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: -100 },
        }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <div>Data Science Meets Keiba</div>
        <div className="animated">
          <span style={{ "--char-index": 0 }}>B</span>
          <span style={{ "--char-index": 1 }}>e</span>
          <span style={{ "--char-index": 2 }}>t</span>
          <span style={{ "--char-index": 3 }}>&nbsp;</span>
          <span style={{ "--char-index": 4 }}>S</span>
          <span style={{ "--char-index": 5 }}>m</span>
          <span style={{ "--char-index": 6 }}>a</span>
          <span style={{ "--char-index": 7 }}>r</span>
          <span style={{ "--char-index": 8 }}>t</span>
          <span style={{ "--char-index": 9 }}>e</span>
          <span style={{ "--char-index": 10 }}>r</span>
          <span style={{ "--char-index": 11 }}>&nbsp;</span>
          <span style={{ "--char-index": 12 }}>!</span>
        </div>
      </motion.div>
    </div>
  );
};

export default Slideshow;
