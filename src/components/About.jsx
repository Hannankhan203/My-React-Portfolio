import React from "react";
import profileImage from "../assets/My Picture.jpg";

function About({ darkMode }) {
  return (
    <div className={`about-container ${darkMode ? "dark-mode" : "light-mode"}`}>
      <div className="about-content">
        <h2
          className={`about-heading ${darkMode ? "dark-mode" : "light-mode"}`}
        >
          About Me
        </h2>
        <div className="about-grid">
          <img src={profileImage} alt="Profile" className="profile-image" />
          <div className="about-text">
            <p className={`about-p ${darkMode ? "dark-mode" : "light-mode"}`}>
              Hello! I'm <strong>Abdul Hannan Khan</strong>, a passionate and
              dedicated Computer Science student at the{" "}
              <strong>National University of Modern Languages (NUML)</strong>. I
              have a strong interest in{" "}
              <strong>Front-End Web Development</strong> and modern software
              practices.
            </p>

            <p className={`about-p ${darkMode ? "dark-mode" : "light-mode"}`}>
              I enjoy bringing ideas to life through <strong>clean</strong>,{" "}
              <strong>responsive</strong>, and{" "}
              <strong>interactive websites</strong>. My learning journey is
              currently focused on becoming a{" "}
              <strong>MERN Stack Developer</strong>, and I actively work on
              enhancing my <strong>problem-solving</strong>,{" "}
              <strong>logical thinking</strong>, and{" "}
              <strong>collaboration skills</strong>.
            </p>

            <h3
              className={`about-sub-heading ${
                darkMode ? "dark-mode" : "light-mode"
              }`}
            >
              🚀 Current Focus:
            </h3>

            <ul
              className={`about-focus ${darkMode ? "dark-mode" : "light-mode"}`}
            >
              <li className="about-focus-list">
                Mastering <strong>React.js</strong> and the{" "}
                <strong>MERN Stack</strong>.
              </li>
              <li className="about-focus-list">
                Strengthening <strong>problem-solving</strong> and{" "}
                <strong>algorithmic thinking</strong>.
              </li>
              <li className="about-focus-list">
                Building <strong>real-world web projects</strong>.
              </li>
              <li className="about-focus-list">
                Writing <strong>clean</strong>, <strong>efficient</strong>, and{" "}
                <strong>scalable code</strong>.
              </li>
            </ul>

            <p className={`about-p ${darkMode ? "dark-mode" : "light-mode"}`}>
              💡 Whether it's <strong>coding</strong>,{" "}
              <strong>collaborating</strong>, or{" "}
              <strong>continuous learning</strong> - I'm always ready to grow!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
