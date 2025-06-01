import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import WeatherAppImg from "../assets/Weather app.PNG";
import ScientificCalculator from "../assets/Scientific Calculator.PNG";
import Notes from "../assets/Notes.PNG";
import CurrencyConverter from "../assets/Currency Converter.PNG";
import CoursingSite from "../assets/Coursing Site.PNG";
import AuthenticationForm from "../assets/Authentication Form.PNG";
import TypingSpeedTest from "../assets/Typing Speed Test.png";
import ScrollMagic from "../assets/Scroll Magic.png";

gsap.registerPlugin(ScrollTrigger);

function Projects({ darkMode }) {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const projectRefs = useRef([]);
  const projectImagesRef = useRef([]);
  const projectContentRef = useRef([]);

  useEffect(() => {
    // Initial states
    gsap.set(headingRef.current, {
      opacity: 0,
      y: 50,
    });

    gsap.set(projectRefs.current, {
      opacity: 0,
      y: 100,
    });

    // Heading animation
    gsap.to(headingRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center+=100",
        toggleActions: "play none none reverse",
      },
    });

    // Project cards animation
    const hoverHandlers = [];

    projectRefs.current.forEach((project, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: project,
          start: "top center+=100",
          toggleActions: "play none none reverse",
        },
      });

      tl.to(projectImagesRef.current[index], {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        duration: 1.2,
        ease: "power4.out",
      })
        .to(
          project,
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.8"
        )
        .to(
          projectContentRef.current[index],
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.6"
        );

      // Hover animation
      const hoverTl = gsap.timeline({ paused: true });
      hoverTl
        .to(project, {
          y: -10,
          duration: 0.3,
          ease: "power2.out",
        })
        .to(
          projectImagesRef.current[index],
          {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out",
          },
          0
        );

      const onEnter = () => hoverTl.play();
      const onLeave = () => hoverTl.reverse();

      project.addEventListener("mouseenter", onEnter);
      project.addEventListener("mouseleave", onLeave);

      hoverHandlers.push({ project, onEnter, onLeave });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      hoverHandlers.forEach(({ project, onEnter, onLeave }) => {
        project.removeEventListener("mouseenter", onEnter);
        project.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  const projectsArray = [
    {
      id: 1,
      title: "Weather App",
      src: WeatherAppImg,
      alt: "Weather App",
      tech: "HTML, CSS, JavaScript, OpenWeather API",
      href: "https://hannankhan203.github.io/Weather-App/",
    },
    {
      id: 2,
      title: "Scientific Calculator",
      src: ScientificCalculator,
      alt: "Scientific Calculator",
      tech: "HTML, CSS, JavaScript",
      href: "https://hannankhan203.github.io/Scientific-Calculator/",
    },
    {
      id: 3,
      title: "Notes App",
      src: Notes,
      alt: "Notes App",
      tech: "HTML, CSS, JavaScript",
      href: "https://hannankhan203.github.io/Notes/",
    },
    {
      id: 4,
      title: "Currency Converter",
      src: CurrencyConverter,
      alt: "Currency Converter",
      tech: "HTML, CSS, JavaScript, Open Exchange API",
      href: "https://hannankhan203.github.io/Currency-Converter/",
    },
    {
      id: 5,
      title: "Coursing Site",
      src: CoursingSite,
      alt: "Coursing Site",
      tech: "HTML, CSS, JavaScript",
      href: "https://hannankhan203.github.io/Coursing-Site/",
    },
    {
      id: 6,
      title: "Authentication Form",
      src: AuthenticationForm,
      alt: "Authentication Form",
      tech: "HTML, CSS, JavaScript, Firebase",
      href: "https://authentication-form-203.netlify.app/",
    },
    {
      id: 7,
      title: "Typing Speed Test",
      src: TypingSpeedTest,
      alt: "Typing Speed Test",
      tech: "HTML, CSS, JavaScript, TypeScript",
      href: "https://hannankhan203.github.io/Typing-Speed-Test/",
    },
    {
      id: 8,
      title: "Scroll Magic (GSAP Integration)",
      src: ScrollMagic,
      alt: "Scroll Magic (GSAP Integration)",
      tech: "HTML, CSS, JavaScript, GSAP",
      href: "https://scroll-magic-gsap.netlify.app/",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className={`projects-section ${darkMode ? "dark-mode" : "light-mode"}`}
    >
      <div className="projects-container">
        <h2 ref={headingRef} className="projects-heading">
          Featured Projects
        </h2>

        <div className="projects-grid">
          {projectsArray.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (projectRefs.current[index] = el)}
              className="project-card"
            >
              <div className="project-image-container">
                <img
                  ref={(el) => (projectImagesRef.current[index] = el)}
                  src={project.src}
                  alt={project.alt}
                  className="project-image"
                />
                <div className="project-overlay">
                  <Link to={project.href} className="view-project">
                    View Project
                  </Link>
                </div>
              </div>

              <div
                ref={(el) => (projectContentRef.current[index] = el)}
                className="project-content"
              >
                <h3 className="project-title">{project.title}</h3>
                <p className="project-tech">{project.tech}</p>
                <Link to={project.href} className="project-link">
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="more-projects">
          <Link
            to="/contact"
            className={`contact-link ${darkMode ? "dark-mode" : "light-mode"}`}
          >
            Let's work together! Contact me →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Projects;
