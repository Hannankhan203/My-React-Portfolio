import React, { useRef, useEffect } from "react";
import { gsap } from 'gsap';
import { Link } from "react-router-dom";

function HeroSection({ darkMode }) {
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(headingRef.current, 
      {
        y: -400,
        opacity: 0,
      }, 
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      }
    )

    gsap.fromTo(paraRef.current, 
      {
        x: -400,
        opacity: 0,
      }, 
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      }
    )

    gsap.fromTo(buttonRef.current, 
      {
        y: 500,
        opacity: 0,
      }, 
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "expo.out",
      }
    )
  }, []);
  return (
    <section
      id="Hero-Section"
      className={darkMode ? "dark-mode" : "light-mode"}
    >
      <h1 ref={headingRef} className={`hero-heading ${darkMode ? "dark-mode" : "light-mode"}`}>
        Hi, I'm{" "}
        <span id="my-name" className={darkMode ? "dark-mode" : "light-mode"}>
          Abdul Hannan Khan
        </span>
      </h1>
      <p ref={paraRef} className={`hero-p ${darkMode ? "dark-mode" : "light-mode"}`}>
        Front-End Developer | Creative Thinker | Responsive UI Builder | Growth
        Mindset
      </p>
      <button ref={buttonRef}
        className={`explore-btn ${darkMode ? "dark-mode" : "light-mode"}`}
        aria-label="Explore my projects"
      >
        <Link to="/projects" className={`explore-link ${darkMode ? "dark-mode" : "light-mode"}`}>
          Explore My Work
        </Link>
      </button>
    </section>
  );
}

export default HeroSection;
