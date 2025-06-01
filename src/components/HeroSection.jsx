import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import resumePDF from "../assets/Abdul_Hannan_Khan_Resume.pdf";

gsap.registerPlugin(ScrollTrigger);

function HeroSection({ darkMode }) {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const greetingRef = useRef(null);
  const nameRef = useRef(null);
  const roleRef = useRef(null);
  const descRef = useRef(null);
  const buttonRef = useRef(null);
  const downloadButtonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: {
        ease: "power4.out",
        duration: 1,
      },
    });

    // Initial states
    gsap.set(
      [
        greetingRef.current,
        nameRef.current,
        roleRef.current,
        descRef.current,
        buttonRef.current,
        downloadButtonRef.current,
      ],
      {
        y: 50,
        opacity: 0,
      }
    );

    // Animate content
    tl.to(greetingRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
    })
      .to(
        nameRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
        },
        "-=0.4"
      )
      .to(
        roleRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
        },
        "-=0.4"
      )
      .to(
        descRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
        },
        "-=0.4"
      )
      .to(
        [buttonRef.current, downloadButtonRef.current],
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
        },
        "-=0.4"
      );

    // Parallax effect on scroll
    gsap.to(contentRef.current, {
      yPercent: 50,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
    // Button hover animations
  const hoverHandlers = [buttonRef.current, downloadButtonRef.current].map((button) => {
    const hover = gsap.to(button, {
      scale: 1.05,
      duration: 0.3,
      paused: true,
      ease: "power2.out",
    });

    const onEnter = () => hover.play();
    const onLeave = () => hover.reverse();

    button.addEventListener("mouseenter", onEnter);
    button.addEventListener("mouseleave", onLeave);

    return { button, onEnter, onLeave };
  });

  return () => {
    tl.kill();
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    hoverHandlers.forEach(({ button, onEnter, onLeave }) => {
      button.removeEventListener("mouseenter", onEnter);
      button.removeEventListener("mouseleave", onLeave);
    }, []);
  };
});

  return (
    <section
      ref={sectionRef}
      className={`hero-section ${darkMode ? "dark-mode" : "light-mode"}`}
    >
      <div className="hero-background">
        <div className="hero-gradient"></div>
      </div>

      <div ref={contentRef} className="hero-content">
        <div className="hero-text-container">
          <span ref={greetingRef} className="hero-greeting">
            Hi there! I'm
          </span>

          <h1 ref={nameRef} className="hero-name">
            Abdul Hannan Khan
          </h1>

          <h2 ref={roleRef} className="hero-role">
            Front-End Developer
          </h2>

          <p ref={descRef} className="hero-description">
            I craft responsive websites where technology meets creativity.
            Creative thinker, minimalist design enthusiast, and a developer
            focused on building exceptional digital experiences.
          </p>

          <div className="hero-cta">
            <button
              ref={buttonRef}
              className={`cta-button ${darkMode ? "dark-mode" : "light-mode"}`}
              aria-label="Explore my projects"
            >
              <Link to="/projects" className="cta-link">
                View My Work
              </Link>
            </button>

            <a
              href={resumePDF}
              download="Abdul_Hannan_Khan_Resume.pdf"
              className="download-resume-link"
            >
              <button
                ref={downloadButtonRef}
                className={`cta-button download-resume ${
                  darkMode ? "dark-mode" : "light-mode"
                }`}
                aria-label="Download Resume"
              >
                Download Resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
