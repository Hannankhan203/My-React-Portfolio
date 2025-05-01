import React from "react";

function HeroSection({ darkMode }) {

  return (
    <section
      id="Hero-Section"
      className={darkMode ? "dark-mode" : "light-mode"}
    >
      <h1 className={`hero-heading ${darkMode ? "dark-mode" : "light-mode"}`}>
        Hi, I'm{" "}
        <span id="my-name" className={darkMode ? "dark-mode" : "light-mode"}>
          Abdul Hannan Khan
        </span>
      </h1>
      <p className={`hero-p ${darkMode ? "dark-mode" : "light-mode"}`}>
        Front-End Developer | Creative Thinker | Responsive UI Builder | Growth
        Mindset
      </p>
      <button
        className={`explore-btn ${darkMode ? "dark-mode" : "light-mode"}`}
      >
        <a href="#Projects" className={darkMode ? "dark-mode" : "light-mode"}>
          Explore My Work
        </a>
      </button>
    </section>
  );
}

export default HeroSection;
