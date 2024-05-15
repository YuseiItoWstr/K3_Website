import React from "react";
import { Link } from "react-router-dom";
import { triggerAnimation } from "./Footer";
import imageSrcK from "./KKKlogo.png";

const Header = () => {
  const scrollToFooter = () => {
    const footer = document.querySelector("footer");
    footer.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToBottom = () => {
    scrollToFooter();
    window.history.pushState(
      {},
      document.title,
      window.location.pathname + "#"
    );
    triggerAnimation();
  };

  return (
    <header>
      <div className="logo">
        <img src={imageSrcK} alt="KKK Logo" className="logo-image" />
        <h2>K K K Website</h2>
      </div>
      <nav>
        <ul className="nav-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/simulation">Simulation</Link>
          </li>
          <li>
            <Link to="/plan">Plan</Link>
          </li>
          <a href="#" onClick={handleScrollToBottom}>
            Contact
          </a>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
