import React, { useRef, useEffect } from "react";
import { FaCode, FaPalette, FaServer, FaTools } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Skills({ darkMode }) {
  const skillCategoryRef = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.killTweensOf(skillCategoryRef.current);

    gsap.set(skillCategoryRef.current, {
      opacity: 0,
      y: 50,
    });

    skillCategoryRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
          },
        }
      );
    });
  }, []);

  const skillsCategories = [
    {
      title: "Frontend Development",
      icon: <FaCode className="skill-icon" />,
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Responsive Design",
        "React Router DOM",
      ],
    },
    {
      title: "Backend & Databases",
      icon: <FaServer className="skill-icon" />,
      skills: ["Firebase Authentication", "Firebase Database"],
    },
    {
      title: "Tools & Version Control",
      icon: <FaTools className="skill-icon" />,
      skills: ["Git", "GitHub", "VS Code", "Netlify"],
    },
    {
      title: "UI/UX Design",
      icon: <FaPalette className="skill-icon" />,
      skills: ["CSS Animations", "Animate.style (Library)", "GSAP"],
    },
  ];

  return (
    <div
      ref={containerRef}
      className={`skills-container ${darkMode ? "dark-mode" : "light-mode"}`}
    >
      <div className="skills-content">
        <h2
          className={`skills-heading ${darkMode ? "dark-mode" : "light-mode"}`}
        >
          My Skills & Expertise
        </h2>

        <div className="skills-grid">
          {skillsCategories.map((category, index) => (
            <div
              ref={(el) => (skillCategoryRef.current[index] = el)}
              key={index}
              className={`skill-category ${
                darkMode ? "dark-mode" : "light-mode"
              }`}
            >
              <div className="category-header">
                {category.icon}
                <h3 className="category-title">{category.title}</h3>
              </div>
              <ul className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className={`skill-item ${
                      darkMode ? "dark-mode" : "light-mode"
                    }`}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
