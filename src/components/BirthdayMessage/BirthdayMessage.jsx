
import React from "react";
import "./BirthdayMessage.css";

export default function BirthdayMessage() {
  return (
    <section className="birthday-message-section" id="birthday-message">
      <div className="birthday-message-sky" />

      <div className="birthday-message-content">
        <h1>
          Happy Birthday
          <br />
          My Love ♡
        </h1>

        <div className="birthday-message-text">
          <p>You make my world brighter,</p>
          <p>my days happier and my heart fuller.</p>

          <p className="birthday-thanks">Thank you for being you.</p>

          <p>
            I hope this year brings you everything
            <br />
            you've ever wished for.
          </p>
        </div>

        <div className="birthday-message-heart">♡</div>

        <div className="birthday-brush">
          <p>
            Here's to many more beautiful years
            <br />
            of us ♡
          </p>
        </div>

        <p className="birthday-message-footer">
          With all my love ♡
        </p>
      </div>
    </section>
  );
}
