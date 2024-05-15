import React, { useState } from "react";

const Plan = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const correctId = process.env.REACT_APP_CORRECT_ID;
    const correctPassword = process.env.REACT_APP_CORRECT_PASSWORD;

    if (id === correctId && password === correctPassword) {
      setAuthenticated(true);
    } else {
      alert(`IDまたはパスワードが間違っています。`);
    }
  };

  const handleLogout = () => {
    setAuthenticated(false);
    setId("");
    setPassword("");
  };

  const analectsList = process.env.REACT_APP_ANALECTS_LIST
    ? process.env.REACT_APP_ANALECTS_LIST.split(",")
    : [];

  function generateRandomAnalect() {
    const randomIndex = Math.floor(Math.random() * analectsList.length);
    const randomAnalect = analectsList[randomIndex];
    document.getElementById("randomAnalect").innerText = randomAnalect;
  }

  return (
    <div className="secret-container">
      {authenticated ? (
        <div className="loginT"></div>
      ) : (
        <div className="loginF">
          <div>
            <h2>Please Login</h2>
            <input
              type="text"
              placeholder="ID"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Plan;
