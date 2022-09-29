import React from "react";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="main-content">
      <h1>
        Imagine if <span>Snapchat</span> had events.
      </h1>
      <p>
        Easily host and share events with your friends across any social media.
      </p>
      <img src="/assets/hero.svg" alt="hero" />
      <button onClick={() => navigate("/create")}>Create my event</button>
    </div>
  );
};

export { HomePage };
