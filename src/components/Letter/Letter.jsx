
import React from "react";
import "./Letter.css";

export default function Letter() {
  return (
    <section className="letter-section" id="about">
      <div className="birthday-letter">
        <div className="flower flower-top-left">🌸</div>
        <div className="flower flower-bottom-left">🌷</div>
        <div className="flower flower-bottom-right">🌸</div>

        <div className="letter-heart">♡</div>

        <h2>Happy Birthday, My Love</h2>

        <div className="heart-underline">
          <span />
          <span className="underline-heart">♥</span>
        </div>

        <div className="letter-message">
          <p>
            Today is a special day, because the world
            <br />
            got a little more beautiful when you were born.
          </p>

          <p>
            You are kind, strong, beautiful, and so, so loved.
          </p>

          <p>
            I'm really lucky to have you in my life.
          </p>

          <p>
            May your day be filled with happiness,
            <br />
            all the dreams you hold in your heart,
            <br />
            and everything that makes you smile.
          </p>

          <p>Keep being the amazing you,</p>

          <p className="letter-signature">
            Happy Birthday! <span>♡</span>
          </p>
        </div>

        <div className="always-yours">
          Always yours
          <span>♡</span>
        </div>
      </div>
    </section>
  );
}
