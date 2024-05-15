import React, { useState, useEffect } from "react";
import "./App.css";
import "./Opening.css";
import "./Header.css";
import "./Home.css";
import "./About.css";
import "./Simulation.css";
import "./Plan.css";
import "./Footer.css";
import Opening from "./components/Opening";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import Simulation from "./components/Simulation";
import Plan from "./components/Plan";
import {
  BrowserRouter as Router,
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";

const isLocalhost =
  window.location.hostname === "localhost" ||
  window.location.hostname === "127.0.0.1";

const RouterComponent = isLocalhost ? HashRouter : Router;

const PageLink = {
  Top: "/",
};

function App() {
  const [showMainPage, setShowMainPage] = useState(false);

  const handleAnimationComplete = () => {
    setShowMainPage(true);
  };

  return (
    <RouterComponent>
      <div className="App">
        {!showMainPage && (
          <div className="opening-container">
            <Opening onAnimationComplete={handleAnimationComplete} />
          </div>
        )}
        {showMainPage && (
          <>
            <Header></Header>
            <Routes>
              <Route path={PageLink.Top} element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/simulation" element={<Simulation />} />
              <Route path="/plan" element={<Plan />} />
            </Routes>
            <Footer />
          </>
        )}
      </div>
    </RouterComponent>
  );
}

export default App;
