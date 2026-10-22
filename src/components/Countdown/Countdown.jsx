
import React, { useEffect, useState } from "react";
import "./Countdown.css";

function getNextBirthday(month, day) {
  const now = new Date();
  let year = now.getFullYear();

  let birthday = new Date(year, month - 1, day, 0, 0, 0);

  if (birthday <= now) {
    birthday = new Date(year + 1, month - 1, day, 0, 0, 0);
  }

  return birthday;
}

function calculateTime(target) {
  const difference = Math.max(0, target.getTime() - Date.now());

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

export default function Countdown() {
  // Change these values to the birthday month and day.
  // Example: October 25 = getNextBirthday(10, 25)
  const nextBirthday = getNextBirthday(10, 23);

  const [time, setTime] = useState(() => calculateTime(nextBirthday));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculateTime(nextBirthday));
    }, 1000);

    return () => clearInterval(timer);
  }, [nextBirthday.getTime()]);

  const items = [
    { label: "Days", value: time.days },
    { label: "Hours", value: time.hours },
    { label: "Minutes", value: time.minutes },
    { label: "Seconds", value: time.seconds },
  ];

  return (
    <section className="countdown-section" id="countdown">
      <div className="countdown-content">
        <div className="countdown-calendar" aria-hidden="true">
          <svg
            viewBox="0 0 48 48"
            width="46"
            height="46"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="6" y="10" width="36" height="32" rx="3" />
            <path d="M15 5v10M33 5v10M6 19h36M17 29l5 5 10-10" />
          </svg>
        </div>

        <h1>Next Birthday Countdown</h1>
        <p className="countdown-subtitle">
          Until the next time we celebrate you...
        </p>

        <div className="countdown-grid">
          {items.map((item) => (
            <div className="countdown-card" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        <div className="countdown-message">
          <p>Because one day</p>
          <p>is not enough to celebrate you ♡</p>
        </div>

        <div className="countdown-heart">♡</div>
      </div>

      <div className="countdown-hills">
        <div className="countdown-hill hill-back" />
        <div className="countdown-hill hill-front" />
      </div>

      <span className="countdown-flower flower-a">❀</span>
      <span className="countdown-flower flower-b">❀</span>
      <span className="countdown-flower flower-c">❀</span>
      <span className="countdown-flower flower-d">❀</span>
    </section>
  );
}
