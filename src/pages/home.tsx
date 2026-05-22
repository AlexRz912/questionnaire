import { useState } from "react";
import { Link } from "react-router-dom";
import "./home.css";

export default function Home() {
  const [pressed, setPressed] = useState(false);

  return (
    <main className="home">
      <h1 className="home__title">
        À quel point <span className="home__nowrap">es&#8209;tu</span> un{" "}
        <span className="home__highlight">politicien</span> ?
      </h1>

      <Link
        to="/questions"
        className={`home__cta ${pressed ? "is-pressed" : ""}`}
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
        onMouseLeave={() => setPressed(false)}
        onTouchStart={() => setPressed(true)}
        onTouchEnd={() => setPressed(false)}
      >
        <span className="home__cta-shadow" aria-hidden="true" />
        <span className="home__cta-face">
          <span className="home__cta-label">Fais le test&nbsp;!</span>
          <svg
            className="home__cta-arrow"
            width="44"
            height="32"
            viewBox="0 0 44 32"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M4 16 H36 M26 6 L38 16 L26 26"
              stroke="currentColor"
              strokeWidth="4.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </Link>
    </main>
  );
}
