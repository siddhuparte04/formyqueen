
import React from "react";
import "./AboutYou.css";
import img1 from './1789741353508.jpg'

const reasons = [
  { icon: "♡", title: "Always" },
  { icon: "∞", title: "Together" },
  { icon: "☆", title: "Forever" },
];

export default function AboutYou() {
  return (
    <section className="about-you-section" id="about">
      <div className="about-you-container">
        <div className="about-you-hearts" aria-hidden="true">
          <span>♡</span><span>❧</span><span>♥</span>
          <span>♡</span><span>✧</span><span>♥</span>
          <span>❀</span><span>♡</span>
        </div>

        <div className="about-you-heading">
          <div className="about-you-heart">♡</div>
          <h2>You're Really Special</h2>
          <p>Here's a little message just for you...</p>
        </div>

        <div className="about-you-content">
          <div className="love-letter">
            <p>
              I may not be perfect,
              <br />
              but I'm so grateful
              <br />
              that you're mine.
            </p>

            <p>Thank you for being you.</p>

            <p className="letter-signature">
              Happy Birthday, My Love! <span>♡</span>
            </p>
          </div>

          <div className="about-photo-card">
            <img
              src={img1}
              alt="A romantic memory together"
            />
            <span>♡</span>
          </div>
        </div>

        <div className="about-reasons">
          {reasons.map((reason) => (
            <div className="about-reason" key={reason.title}>
              <span>{reason.icon}</span>
              <p>{reason.title}</p>
            </div>
          ))}
        </div>

        <span className="about-flower about-flower-left">❧</span>
        <span className="about-flower about-flower-right">❧</span>
      </div>
    </section>
  );
}
