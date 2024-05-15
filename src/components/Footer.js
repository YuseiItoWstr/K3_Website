import React from "react";
import { FaLinkedin, FaGithub, FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoMailOutline } from "react-icons/io5";
import { BsTelephoneOutbound } from "react-icons/bs";

const Footer = () => {
  const scrollToHeader = () => {
    const header = document.querySelector("header");
    header.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToTop = () => {
    setTimeout(() => {
      scrollToHeader();
      window.history.pushState(
        {},
        document.title,
        window.location.pathname + "#"
      );
    }, 1);
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:ys110wstr@gmail.com";
  };

  const handleTelClick = () => {
    window.location.href = "tel:080-2673-3062";
  };

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-links">
          <h3>Links</h3>
          <ul>
            <li>
              <Link to="/" onClick={handleScrollToTop}>
                About
              </Link>
            </li>
            <li>
              <Link to="/Works" onClick={handleScrollToTop}>
                Simulation
              </Link>
            </li>
            <li>
              <a href="https://www.jra.go.jp/" target="_blank">
                JRA Official
              </a>
            </li>
            <li>
              <a href="https://www.netkeiba.com/" target="_blank">
                netkeiba
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" onClick={handleScrollToTop}>
                Go Top
              </a>
            </li>
          </ul>
        </div>
        <div className="social-media">
          <h3>Connect with Us</h3>
          <ul className="social-icons">
            <li>
              <a
                href="https://www.linkedin.com/in/ys110wstr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="Linkedin-icon" size={40} />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/YuseiItoWstr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="Github-icon" size={40} />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/Anizya110wstr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter className="Twitter-icon" size={40} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/yusei110wstr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagramSquare className="Instagram-icon" size={40} />
              </a>
            </li>
            <li onClick={handleEmailClick}>
              <a href="mailto:ys110wstr@gmail.com">
                <IoMailOutline className="email-icon" size={40} />
              </a>
            </li>
            <li onClick={handleTelClick}>
              <a href="tel:080-2673-306" onClick={handleTelClick}>
                <BsTelephoneOutbound className="tel-icon" size={40} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} KKK All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

const triggerAnimation = () => {
  const socialIcons = document.querySelectorAll(".social-icons li");
  socialIcons.forEach((icon) => {
    icon.classList.add("animate-spin");
    setTimeout(() => {
      icon.classList.remove("animate-spin");
    }, 2100);
  });
};

export { triggerAnimation };
