import React from "react";
import { FaCode, FaPalette, FaServer, FaTools } from "react-icons/fa";

function Skills({ darkMode }) {
  const skillsCategories = [
    {
      title: "Frontend Development",
      icon: <FaCode className="skill-icon" />,
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Responsive Design"],
    },
    {
      title: "Backend & Databases",
      icon: <FaServer className="skill-icon" />,
      skills: ["Firebase Authentication", "Firebase Database", "REST APIs"],
    },
    {
      title: "Tools & Version Control",
      icon: <FaTools className="skill-icon" />,
      skills: ["Git", "GitHub", "VS Code", "Netlify"],
    },
    {
      title: "UI/UX Design",
      icon: <FaPalette className="skill-icon" />,
      skills: ["Figma Basics", "CSS Animations", "User-Centered Design"],
    },
  ];

  return (
    <div
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
