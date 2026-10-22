
import React, { useState } from "react";
import "./SecretGift.css";

export default function SecretGift() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="secret-gift-section" id="surprise">
      <div className="secret-gift-overlay" />

      <div className="secret-gift-content">
        <div className="secret-gift-icon">
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="9" width="18" height="12" rx="1" />
            <path d="M12 9v12M3 13h18M12 9H7.5a2.5 2.5 0 1 1 2.5-2.5V9Zm0 0h4.5a2.5 2.5 0 1 0-2.5-2.5V9Z" />
          </svg>
        </div>

        <h1>
          {isOpen ? "A Gift for You" : "A Special Surprise"}
        </h1>

        <p className="secret-gift-description">
          {isOpen ? (
            <>
              You make my world more beautiful.
              <br />
              You deserve all the happiness ♡
            </>
          ) : (
            <>
              This is a little something
              <br />
              I made just for you...
            </>
          )}
        </p>

        <div className={`gift-box ${isOpen ? "gift-box-open" : ""}`}>
          <span className="gift-heart gift-heart-left">♡</span>
          <span className="gift-heart gift-heart-right">♡</span>

          <div className="gift-lid">
            <div className="gift-bow">
              <span className="bow-loop bow-left" />
              <span className="bow-loop bow-right" />
              <span className="bow-center" />
              <span className="bow-tail bow-tail-left" />
              <span className="bow-tail bow-tail-right" />
            </div>
          </div>

          <div className="gift-body">
            <div className="gift-ribbon" />

            <div className="gift-lock">
              {isOpen ? (
                <span className="unlock-heart">♡</span>
              ) : (
                <svg
                  width="29"
                  height="29"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="5" y="10" width="14" height="11" rx="2" />
                  <path d="M8 10V7a4 4 0 0 1 8 0v3" />
                  <circle cx="12" cy="15" r="1" fill="white" />
                </svg>
              )}
            </div>

            {isOpen && (
              <div className="gift-reveal">
                <span>♡</span>
                <p>Made with love</p>
              </div>
            )}
          </div>

          <div className="gift-table-shadow" />
        </div>

        <button
          className="secret-gift-button"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "Close Your Gift" : "Open when you're ready..."}
          <span>{isOpen ? "♡" : "♡"}</span>
        </button>

        <p className="secret-gift-footer">
          {isOpen
            ? "You are my favorite person ♡"
            : "(It's worth the wait!)"}
        </p>
      </div>
    </section>
  );
}
