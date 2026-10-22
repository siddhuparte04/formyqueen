import React, { useState } from "react";
import "./App.css";

import Login from "./components/Login/Login";

import Home from "./components/Home/Home";
import Letter from "./components/Letter/Letter";
import Memory from "./components/Memories/Memories";
import Love from "./components/Love/Love";
import Cake from "./components/Cake/Cake";
import SecretGift from "./components/SecretGift/SecretGift";

import AboutYou from "./components/About/AboutYou";
import BirthdayMessage from "./components/BirthdayMessage/BirthdayMessage";
import Countdown from "./components/Countdown/Countdown";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  // Show login page before opening the birthday website
  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <>
      {/* Navigation */}
      <nav className="navbar">
        <a href="#home" className="logo" onClick={closeMenu}>
          A Special Day ♡
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <a href="#home" onClick={closeMenu}>
              Home
            </a>
          </li>

          <li>
            <a href="#memories" onClick={closeMenu}>
              Memories
            </a>
          </li>

          <li>
            <a href="#about" onClick={closeMenu}>
              About You
            </a>
          </li>

          <li>
            <a href="#cake" onClick={closeMenu}>
              Cake
            </a>
          </li>

          <li>
            <a href="#surprise" onClick={closeMenu}>
              Surprise
            </a>
          </li>

          <li>
            <a href="#love" className="heart" onClick={closeMenu}>
              ♡
            </a>
          </li>
        </ul>
      </nav>

      {/* Birthday Website Sections */}
      <Home />
      <Letter />
      <Memory />
      <Love />
      <Cake />
      <SecretGift />

      <AboutYou />
      <BirthdayMessage />
      <Countdown />
    </>
  );
}
