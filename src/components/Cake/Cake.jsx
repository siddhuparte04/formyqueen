import React, { useState } from "react";
import "./cake.css";

export default function Cake() {
  const [wishMade, setWishMade] = useState(false);

  const makeWish = () => {
    setWishMade(true);
  };

  return (
    <section className="cake-section" id="cake">
      <div className="cake-overlay" />

      <div className="cake-content">
        <div className="cake-icon">♕</div>

        <h1>Make a Wish</h1>

        <p className="cake-description">
          Close your eyes, make a wish...
          <br />
          and blow out the candles ♡
        </p>

        <div className="birthday-cake">
          <div className="candles">
            {[1, 2, 3, 4].map((candle) => (
              <div className="candle" key={candle}>
                <div
                  className={`flame ${wishMade ? "flame-out" : ""}`}
                />
                <div className="candle-stick" />
              </div>
            ))}
          </div>

          <div className="cake-top">
            <div className="frosting-decoration">
              {Array.from({ length: 13 }, (_, i) => (
                <span key={i}>✿</span>
              ))}
            </div>
          </div>

          <div className="cake-body">
            <div className="cake-sprinkles">
              {Array.from({ length: 28 }, (_, i) => (
                <span key={i} />
              ))}
            </div>

            <div className="cake-message">
              Happy
              <br />
              Birthday
              <br />
              <span>♡</span>
            </div>
          </div>

          <div className="cake-bottom-frosting" />
          <div className="cake-plate" />
        </div>

        <button className="wish-button" onClick={makeWish}>
          {wishMade ? "Wish Made" : "Make a Wish"}
          <span>{wishMade ? "♡" : "✧"}</span>
        </button>

        <p className="cake-footer">
          {wishMade
            ? "May your beautiful wish come true ♡"
            : "May all your dreams come true ♡"}
        </p>
      </div>
    </section>
  );
}
