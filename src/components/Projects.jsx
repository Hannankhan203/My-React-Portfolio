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
import AttendanceManagementSystem from "../assets/Attendance Management System.png";
import PersonalFinanceTracker from "../assets/Personal Finance Tracker.png";
import SuperchatApp from '../assets/Superchat.PNG'

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
        duration: 0.8,
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
      desc: "Responsive web app showing real-time forecasts with dark/light mode, built using WeatherAPI.",
      tech: "HTML, CSS, JavaScript, OpenWeather API",
      href: "https://hannankhan203.github.io/Weather-App/",
      github: "https://github.com/Hannankhan203/Weather-App",
    },
    {
      id: 2,
      title: "Scientific Calculator",
      src: ScientificCalculator,
      desc: "Responsive web app with basic & advanced functions, featuring dark/light mode toggle.",
      alt: "Scientific Calculator",
      tech: "HTML, CSS, JavaScript",
      href: "https://hannankhan203.github.io/Scientific-Calculator/",
      github: "https://github.com/Hannankhan203/Scientific-Calculator",
    },
    {
      id: 3,
      title: "Notes App",
      src: Notes,
      desc: "TypeScript-powered task manager with CRUD operations, animations, and localStorage persistence.",
      alt: "Notes App",
      tech: "HTML, CSS, JavaScript, Local Storage, TypeScript",
      href: "https://hannankhan203.github.io/Notes-App-TypeScript/",
      github: "https://github.com/Hannankhan203/Notes-App-TypeScript",
    },
    {
      id: 4,
      title: "Currency Converter",
      src: CurrencyConverter,
      desc: "Real-time exchange tool with 160+ currencies, flags, and dark/light mode.",
      alt: "Currency Converter",
      tech: "HTML, CSS, JavaScript, Open Exchange API",
      href: "https://hannankhan203.github.io/Currency-Converter/",
      github: "https://github.com/Hannankhan203/Currency-Converter",
    },
    {
      id: 5,
      title: "Coursing Site",
      src: CoursingSite,
      desc: "Responsive e-learning platform for full-stack development with dark/light mode toggle.",
      alt: "Coursing Site",
      tech: "HTML, CSS, JavaScript",
      href: "https://hannankhan203.github.io/Coursing-Site/",
      github: "https://github.com/Hannankhan203/Coursing-Site",
    },
    {
      id: 6,
      title: "Authentication Form",
      src: AuthenticationForm,
      desc: "Firebase-powered application with authentication, CRUD operations, and password recovery.",
      alt: "Authentication Form",
      tech: "HTML, CSS, JavaScript, Firebase Authentication, Firebase Database",
      href: "https://authentication-form-203.netlify.app/",
      github: "https://github.com/Hannankhan203/Authentication-Form",
    },
    {
      id: 7,
      title: "Typing Speed Test",
      src: TypingSpeedTest,
      desc: "Interactive app measuring WPM and accuracy with real-time feedback",
      alt: "Typing Speed Test",
      tech: "HTML, CSS, JavaScript, TypeScript",
      href: "https://hannankhan203.github.io/Typing-Speed-Test/",
      github: "https://github.com/Hannankhan203/Typing-Speed-Test",
    },
    {
      id: 8,
      title: "Scroll Magic (GSAP Integration)",
      src: ScrollMagic,
      desc: "Interactive landing page with GSAP animations, parallax effects, and cursor tracking.",
      alt: "Scroll Magic (GSAP Integration)",
      tech: "HTML, CSS, JavaScript, GSAP",
      href: "https://scroll-magic-gsap.netlify.app/",
      github: "https://github.com/Hannankhan203/Scroll-Magic",
    },
    {
      id: 9,
      title: "Attendance Management System",
      src: AttendanceManagementSystem,
      desc: "Feature-rich web app with dark mode, PDF export, and responsive design.",
      alt: "Attendance Management System",
      tech: "HTML, CSS, JavaScript, Local Storage",
      href: "https://hannankhan203.github.io/Attendance-Management-System/",
      github: "https://github.com/Hannankhan203/Attendance-Management-System",
    },
    {
      id: 10,
      title: "Personal Finance Tracker",
      src: PersonalFinanceTracker,
      desc: "A responsive web app for managing income, expenses, and visualizing spending with interactive charts.",
      alt: "Personal Finance Tracker",
      tech: "HTML, CSS, JavaScript, Local Storage",
      href: "https://hannankhan203.github.io/Personal-Expense-Tracker/",
      github: "https://github.com/Hannankhan203/Personal-Expense-Tracker",
    },
    {
      id: 11,
      title: "Superchat - Realtime Chat App",
      src: SuperchatApp,
      desc: "A responsive chat application with real-time messaging, user authentication, and message history. Built with React and Firebase for instant updates across all connected clients.",
      alt: "Superchat App",
      tech: "React, Firebase Auth, Firestore, Context API, React Router, CSS Modules",
      href: "https://super-chat-gamma.vercel.app/",
      github: "https://github.com/Hannankhan203/SuperChat.git",
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
                  <Link
                    to={project.href}
                    className="view-project"
                    target="_blank"
                  >
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
                <p className="project-desc">{project.desc}</p>
                <div className="btns">
                  <Link
                  to={project.github}
                  className="project-link"
                  target="_blank"
                >
                  View Code
                </Link>
                <Link
                  to={project.href}
                  className="view-project-res hide"
                  target="_blank"
                >
                  View Project
                </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="more-projects">
          <Link
            to="/contact"
            className={`contact-link ${darkMode ? "dark-mode" : "light-mode"}`}
          >
            Contact me →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Projects;
