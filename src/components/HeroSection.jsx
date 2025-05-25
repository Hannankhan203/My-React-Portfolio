import React, { useRef, useEffect } from "react";
import { gsap } from 'gsap';
import { Link } from "react-router-dom";

function HeroSection({ darkMode }) {
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.set([headingRef.current, paraRef.current, buttonRef.current], {
      opacity: 0,
    });

    const t1 = gsap.timeline({ defaults: { ease: "power3.out" } });

    t1.fromTo(headingRef.current, 
      {
        y: -200,
      }, 
      {
        y: 0,
        opacity: 1,
        duration: 1.5
      }
    )
    .fromTo(paraRef.current, 
      {
        x: -200,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.5
      },
      "-=0"
    )
    .fromTo(buttonRef.current, 
      {
        y: 200,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.5
      },
      "-=0"
    )
  }, []);
  return (
    <section
      id="Hero-Section"
      className={darkMode ? "dark-mode" : "light-mode"}
    >
      <h1 style={{ opacity: 0 }} ref={headingRef} className={`hero-heading ${darkMode ? "dark-mode" : "light-mode"}`}>
        Hi, I'm{" "}
        <span id="my-name" className={darkMode ? "dark-mode" : "light-mode"}>
          Abdul Hannan Khan
        </span>
      </h1>
      <p style={{ opacity: 0 }} ref={paraRef} className={`hero-p ${darkMode ? "dark-mode" : "light-mode"}`}>
        Front-End Developer | Creative Thinker | Responsive UI Builder | Growth
        Mindset
      </p>
      <button style={{ opacity: 0 }} ref={buttonRef}
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
