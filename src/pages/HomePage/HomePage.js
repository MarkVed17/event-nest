import React from "react";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="main-content">
      <div className="heading-wrapper">
        <h1 className="heading__title">
          Imagine if <span className="heading__title-highlight">Snapchat</span> had events.
        </h1>
        <p className="heading__subtitle">
          Easily host and share events with your friends across any social
          media.
        </p>
      </div>
      <img src="/assets/hero.svg" alt="hero" className="hero-img" />
      <button onClick={() => navigate("/create")} className="create-btn">
        <span role="img" aria-label="celebrate">🎉</span> <span>Create my event</span>
      </button>
    </div>
  );
};

export { HomePage };
