
import React from "react";
import "./Love.css";

const loveItems = [
  {
    icon: "☺",
    title: "Your smile",
    description: "It lights up\neverything around you.",
    color: "peach",
  },
  {
    icon: "♡",
    title: "Your kindness",
    description: "The way you care\nabout everyone.",
    color: "pink",
  },
  {
    icon: "☆",
    title: "Your strength",
    description: "You never give up,\neven when it's hard.",
    color: "lavender",
  },
  {
    icon: "❀",
    title: "Your little habits",
    description: "They are so cute\nand special.",
    color: "blue",
  },
  {
    icon: "✧",
    title: "The way you support me",
    description: "You always believe\nin me.",
    color: "rose",
  },
  {
    icon: "♡",
    title: "Your beautiful heart",
    description: "It makes the world\na better place.",
    color: "purple",
  },
  {
    icon: "♧",
    title: "Your laughter",
    description: "It's my favorite\nsound.",
    color: "peach",
  },
  {
    icon: "∞",
    title: "Everything about you",
    description: "Because you're you\nand that's perfect.",
    color: "pink",
  },
];

export default function Love() {
  return (
    <section className="love-section" id="love">
      <div className="love-container">
        <div className="love-heading">
          <span className="love-top-heart heart-one">♥</span>
          <span className="love-top-heart heart-two">♡</span>
          <span className="love-top-heart heart-three">♥</span>

          <div className="love-main-heart">♡</div>

          <h2>Things I Love About You</h2>
          <p>(And there are so many!)</p>
        </div>

        <div className="love-grid">
          {loveItems.map((item, index) => (
            <article
              className={`love-card ${item.color}`}
              key={item.title}
              style={{ "--card-index": index }}
            >
              <div className="love-card-icon">{item.icon}</div>

              <h3>{item.title}</h3>

              <p>
                {item.description.split("\n").map((line, i) => (
                  <React.Fragment key={i}>
                    {i > 0 && <br />}
                    {line}
                  </React.Fragment>
                ))}
              </p>
            </article>
          ))}

          <div className="love-note">
            I love you
            <span>♡</span>
          </div>
        </div>

        <span className="love-flower flower-left" aria-hidden="true">
          ❀
        </span>
        <span className="love-flower flower-right" aria-hidden="true">
          ❀
        </span>
      </div>
    </section>
  );
}
