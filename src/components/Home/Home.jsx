import React, { useState } from "react";
import { Heart, Menu, X, ArrowRight, Sparkles } from "lucide-react";
import './home.css'
import img from './1789741353508.jpg'

function Floral({ className = "" }) {
  return (
    <svg className={`floral ${className}`} viewBox="0 0 100 170" fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 165C34 130 28 99 46 64C53 50 61 36 65 12" />
        <path d="M31 137C16 131 10 119 12 107C25 111 32 121 31 137Z" />
        <path d="M36 119C51 117 61 108 64 96C50 97 40 105 36 119Z" />
        <path d="M43 91C29 84 24 72 28 61C40 68 45 78 43 91Z" />
        <path d="M51 67C64 65 73 56 74 45C62 48 54 56 51 67Z" />
        <path d="M64 31C52 27 47 17 51 7C61 13 66 21 64 31Z" />
        <path d="M65 12C74 8 82 11 85 20C76 23 69 19 65 12Z" />
        <path d="M31 145C45 147 55 155 58 166C45 166 35 158 31 145Z" />
        <path d="M12 107C3 100 4 89 11 82C19 91 19 100 12 107Z" />
        <path d="M74 45C80 35 91 34 97 40C91 49 82 51 74 45Z" />
        <path d="M11 82C17 72 16 63 10 58C3 66 4 75 11 82Z" />
      </g>
    </svg>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [giftOpen, setGiftOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const links = ["Home", "Memories", "Surprises", "For You"];

  function navigateTo(label) {
    setActive(label);
    setMenuOpen(false);
    if (label !== "Home") {
      document.getElementById(label.toLowerCase().replaceAll(" ", "-"))?.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <main className="page-shell" id="home">
      <div className="paper-texture" />

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <span className="eyebrow">A little birthday surprise</span>
          <h1 id="hero-title">
            <span className="serif-line">For Someone</span>
            <span className="script-line">Truly Special <Heart className="title-heart" /></span>
          </h1>
          <p className="intro">A little corner of the internet,<br className="desktop-break" /> made just for you.</p>
          <button className="gift-button" onClick={() => setGiftOpen(true)}>
            Open Your Gift <ArrowRight size={19} strokeWidth={1.7} />
          </button>

          <div className="love-note" id="for-you">
            <span className="note-rule" />
            <Heart size={16} strokeWidth={1.8} />
            <span className="note-rule" />
            <p>Made with love</p>
            <Heart className="tiny-heart" size={12} />
          </div>
        </div>

        <div className="portrait-column" id="memories">
          <div className="portrait-frame">
          
            <img
              className="portrait"
              src={img}
              alt="A favorite portrait"
              onError={(event) => {
                event.currentTarget.style.display = "none";
                event.currentTarget.nextElementSibling.style.display = "flex";
              }}
            />
            <div className="portrait-fallback">
              <Heart size={40} strokeWidth={1.2} />
              <span>Add your favorite photo</span>
              <small>Save your image as <code>public/portrait.jpg</code></small>
            </div>
          </div>
          <Floral className="flower flower-top" />
          <Floral className="flower flower-bottom" />
          <Heart className="floating-heart heart-one" />
          <Heart className="floating-heart heart-two" />
        </div>
        <Floral className="flower corner-flower" />
        <span className="corner-wash wash-left" />
        <span className="corner-wash wash-bottom" />
      </section>

      <section className="surprise-section" id="surprises">
        <Sparkles size={18} />
        <p>A little reminder: you make the world more beautiful.</p>
      </section>

      {giftOpen && (
        <div className="modal-backdrop" role="presentation" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setGiftOpen(false);
        }}>
          <section className="gift-modal" role="dialog" aria-modal="true" aria-labelledby="gift-title">
            <button className="modal-close" aria-label="Close gift" onClick={() => setGiftOpen(false)}>
              <X size={20} />
            </button>
            <div className="modal-heart"><Heart size={30} /></div>
            <span className="eyebrow">Just for you</span>
            <h2 id="gift-title">You are truly special.</h2>
            <p>May your day be filled with soft moments, unexpected joy, and all the love your heart can hold.</p>
            <p className="modal-signoff">With love, always ♡</p>
            <button className="gift-button modal-button" onClick={() => setGiftOpen(false)}>Keep this close <Heart size={16} /></button>
          </section>
        </div>
      )}
    </main>
  );
}