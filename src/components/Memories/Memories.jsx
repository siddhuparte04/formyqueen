
import React from "react";
import "./Memories.css";
import img1 from './Our Little Moments/1.jpg'
import img2 from './Our Little Moments/2.jpg'
import img3 from './Our Little Moments/3.jpg'
import img4 from './Our Little Moments/4.jpg'
import img5 from './Our Little Moments/5.jpg'
import img6 from './Our Little Moments/6.jpg'
import img7 from './Our Little Moments/7.jpg'
import img8 from './Our Little Moments/8.jpg'
import img9 from './Our Little Moments/9.jpg'

const memories = [
  {
    title: "selfie together",
    image:
      img1,
  },
  {
    title: "Love vibes",
    image:
     img2,
  },
  {
    title: "Your cute smile",
    image:
      img3,
  },
  {
    title: "Special Meet",
    image:
      img4,
  },
  {
    title: "New adventures",
    date: "14 Feb 2025",
    image:
      img5,
  },
   {
    title: "My favorite person",
    date: "Forever",
    image:
      img7,
  },
   {
    title: "Always together",
    date: "Forever",
    image:
      img8,
  },
   {
    title: "Cute Talk",
    date: "Forever",
    image:
      img9,
  },
];

export default function Memories() {
  return (
    <section className="memories-section" id="memories">
      <div className="memories-container">
        <div className="memories-camera" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            width="27"
            height="27"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14 4h-4L8 6H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-3z" />
            <circle cx="12" cy="12" r="4" />
          </svg>
        </div>

        <h2 className="memories-title">Our Little Moments</h2>

        <p className="memories-subtitle">
          Some of my favorite memories with you <span>♡</span>
        </p>

        <div className="memories-grid">
          {memories.map((memory, index) => (
            <article className="memory-card" key={memory.title}>
              <div className="memory-image-wrapper">
                <img
                  src={memory.image}
                  alt={memory.title}
                  className="memory-image"
                  loading="lazy"
                />
              </div>

              <div className="memory-caption">
                <p className="memory-name">{memory.title}</p>
                <span className="memory-heart" aria-hidden="true">
                  ♡
                </span>
              </div>

              
            </article>
          ))}
        </div>

        <div className="memories-footer">
          <p>
            So many moments...
            <br />
            and still, the best is yet to come <span>♡</span>
          </p>
        </div>

        <span className="memories-flower flower-left" aria-hidden="true">
          ❀
        </span>
        <span className="memories-flower flower-right" aria-hidden="true">
          ❀
        </span>
      </div>
    </section>
  );
}
