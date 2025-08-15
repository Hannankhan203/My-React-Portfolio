import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaCode, FaDatabase, FaTools, FaPalette } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

function Skills({ darkMode }) {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const categoryRefs = useRef([]);

  useEffect(() => {
    // Heading animation
    gsap.fromTo(
      headingRef.current,
      { y: 50, opacity: 0 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center+=100",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Categories animation
    categoryRefs.current.forEach((category, index) => {
      gsap.fromTo(
        category,
        { y: 50, opacity: 0 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: category,
            start: "top center+=150",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const skillCategories = [
    {
      title: "Front-End Development",
      icon: <FaCode className="skill-icon" />,
      skills: ["HTML5", "CSS3", "JavaScript", "React.js", "TypeScript"],
    },
    {
      title: "Back-End Development",
      icon: <FaDatabase className="skill-icon" />,
      skills: ["Firebase Authentication", "Firebase Database", "Firebase Hosting"],
    },
    {
      title: "Development Tools",
      icon: <FaTools className="skill-icon" />,
      skills: ["VS Code", "Git", "GitHub", "Netlify", "Vercel"],
    },
    {
      title: "UI/UX & Design",
      icon: <FaPalette className="skill-icon" />,
      skills: [
        "CSS Flexbox",
        "CSS Grid Layout",
        "Responsive Design",
        "Mobile-First Approach",
        "CSS Animations",
        "Bootstrap",
        "Animate.style (library)",
        "GSAP",
      ],
    },
  ];

  return (
    <section
      ref={sectionRef}
      className={`skills-section ${darkMode ? "dark-mode" : "light-mode"}`}
    >
      <div className="skills-container">
        <h2 ref={headingRef} className="skills-heading">
          My Skills
        </h2>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              ref={(el) => (categoryRefs.current[categoryIndex] = el)}
              className="skill-category"
            >
              <div className="category-header">
                {category.icon}
                <h3 className="category-title">{category.title}</h3>
              </div>

              <ul className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skill} className="skill-item">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
