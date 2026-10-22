import React, { useState } from "react";
import "./Login.css";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "Srush2326" && password === "28022026") {
      onLogin();
    } else {
      setError("Oops! Incorrect username or password ♡");
    }
  };

  return (
    <div className="login-page">
      <form className="login-card" onSubmit={handleLogin}>
        <div className="login-heart">♡</div>

        <p className="login-tag">A LITTLE BIRTHDAY SURPRISE</p>

        <h1>For Someone</h1>
        <h2>Truly Special ♡</h2>

        <p className="login-description">
          This little world is just for you.
          <br />
          Enter your details to continue.
        </p>

        <input
          type="text"
          placeholder="Your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p className="login-error">{error}</p>}

        <button type="submit">Open Your Gift →</button>

        <p className="login-footer">Made with love ♡</p>
      </form>
    </div>
  );
}