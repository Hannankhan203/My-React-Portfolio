import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import profileImage from "../assets/My Picture.jpg";

gsap.registerPlugin(ScrollTrigger);

function About({ darkMode }) {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const imageRef = useRef(null);
  const textContainerRef = useRef(null);
  const paragraphRefs = useRef([]);
  const skillsRef = useRef(null);
  const skillItemRefs = useRef([]);

  useEffect(() => {
    // Initial states
    gsap.set([headingRef.current, imageRef.current, textContainerRef.current], {
      opacity: 0,
      y: 50,
    });

    gsap.set(skillItemRefs.current, {
      opacity: 0,
      x: -30,
    });

    // Main timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "center center",
        toggleActions: "play none none reverse",
      },
    });

    // Animate main elements
    tl.to(headingRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
    })
      .to(
        imageRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.4"
      )
      .to(
        textContainerRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.4"
      );

    // Animate paragraphs with stagger
    gsap.to(paragraphRefs.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: textContainerRef.current,
        start: "top center+=100",
        toggleActions: "play none none reverse",
      },
    });

    // Skills section animation
    const skillsTl = gsap.timeline({
      scrollTrigger: {
        trigger: skillsRef.current,
        start: "top center+=100",
        toggleActions: "play none none reverse",
      },
    });

    skillsTl.to(skillItemRefs.current, {
      opacity: 1,
      x: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power3.out",
    });

    // Image hover effect
    const imageHover = gsap.to(imageRef.current, {
      scale: 1.05,
      duration: 0.3,
      paused: true,
      ease: "power2.out",
    });

    const imageElement = imageRef.current;

    const handleMouseEnter = () => imageHover.play();
    const handleMouseLeave = () => imageHover.reverse();

    imageElement.addEventListener("mouseenter", handleMouseEnter);
    imageElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      imageElement?.removeEventListener("mouseenter", handleMouseEnter);
      imageElement?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`about-section ${darkMode ? "dark-mode" : "light-mode"}`}
    >
      <div className="about-container">
        <h2 ref={headingRef} className="about-heading">
          About Me
        </h2>

        <div className="about-content">
          <div className="about-image-container">
            <img
              ref={imageRef}
              src={profileImage}
              alt="Abdul Hannan Khan"
              className="about-image"
            />
            <div className="image-overlay"></div>
          </div>

          <div ref={textContainerRef} className="about-text-container">
            <p
              ref={(el) => (paragraphRefs.current[0] = el)}
              className="about-paragraph"
            >
              Hello! I'm <strong>Abdul Hannan Khan</strong>, a passionate and
              dedicated Computer Science student at the{" "}
              <strong>National University of Modern Languages (NUML)</strong>. I
              have a strong interest in{" "}
              <strong>Front-End Web Development</strong> and modern software
              practices.
            </p>

            <p
              ref={(el) => (paragraphRefs.current[1] = el)}
              className="about-paragraph"
            >
              I enjoy bringing ideas to life through <strong>clean</strong>,{" "}
              <strong>responsive</strong>, and{" "}
              <strong>interactive websites</strong>. My learning journey is
              currently focused on becoming a{" "}
              <strong>MERN Stack Developer</strong>, and I actively work on
              enhancing my
              <strong>problem-solving</strong>,{" "}
              <strong>logical thinking</strong>, and
              <strong>collaboration skills</strong>.
            </p>

            <div ref={skillsRef} className="skills-highlight">
              <h3 className="skills-heading">🚀 Current Focus:</h3>
              <ul className="skills-list">
                {[
                  "Mastering React.js and the MERN Stack",
                  "Strengthening problem-solving and algorithmic thinking",
                  "Building real-world web projects",
                  "Writing clean, efficient, and scalable code",
                  "Continuous learning and growth",
                  "Collaborative development",
                ].map((skill, index) => (
                  <li
                    key={skill}
                    ref={(el) => (skillItemRefs.current[index] = el)}
                    className="skill-item"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <p
              ref={(el) => (paragraphRefs.current[2] = el)}
              className="about-paragraph highlight-text"
            >
              💡 Whether it's <strong>coding</strong>,{" "}
              <strong>collaborating</strong>, or
              <strong>continuous learning</strong> - I'm always ready to grow!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
