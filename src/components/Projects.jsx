import React, { useRef, useEffect } from "react";
import { gsap } from 'gsap';
import { Link } from "react-router-dom";
import WeatherAppImg from "../assets/Weather app.PNG";
import ScientificCalculator from "../assets/Scientific Calculator.PNG";
import Notes from "../assets/Notes.PNG";
import CurrencyConverter from "../assets/Currency Converter.PNG";
import CoursingSite from "../assets/Coursing Site.PNG";
import AuthenticationForm from "../assets/Authentication Form.PNG";

function Projects({ darkMode }) {
  const projectCardRef = useRef([]);

  useEffect(() => {
    projectCardRef.current.forEach((card, index) => {
      gsap.fromTo(card, 
      {
        y: 1000,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        delay: index * 0.2,
      }
    )
    })
  }, [])

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
  ];

  return (
    <div
      className={`projects-container ${darkMode ? "dark-mode" : "light-mode"}`}
    >
      <div className="projects-content">
        <h2
          className={`projects-heading ${
            darkMode ? "dark-mode" : "light-mode"
          }`}
        >
          My Projects
        </h2>

        <div className="projects-grid">
          {projectsArray.map((project, index) => (
            <div
            ref={(el) => (projectCardRef.current[index] = el)}
              key={project.id}
              className={`project-card ${
                darkMode ? "dark-mode" : "light-mode"
              }`}
            >
              <h3 className="project-title">{project.title}</h3>
              <img
                className="project-image"
                src={project.src}
                alt={project.alt}
                loading="lazy"
              />
              <p className="project-tech">
                <strong>Technologies:</strong> {project.tech}
              </p>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`project-link ${
                  darkMode ? "dark-mode" : "light-mode"
                }`}
                aria-label={`View ${project.title} project`}
              >
                View Project
              </a>
            </div>
          ))}
        </div>

        <div className="more-projects">
          <Link
            to="/contact"
            className={`contact-link ${darkMode ? "dark-mode" : "light-mode"}`}
          >
            Interested in my work? Let's talk!
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Projects;
