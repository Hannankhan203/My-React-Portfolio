import React from "react";

function Skills({ darkMode }) {
  const skillsList = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Git & GitHub",
    "Responsive Design",
    "React (Basics)",
    "Firebase (Web) Authentication, Database"
  ];

  return (
    <section id="Skills">
      <div className={`skills-section ${darkMode ? "dark-mode" : "light-mode"}`}>
        <h2 className="skills-heading">My Skills</h2>
        {skillsList.map((skill, index) => (
            <ul className="skill-list">
                <li className="skill">{skillsList[index]}</li>
            </ul>
        ))}
      </div>
    </section>
  );
}

export default Skills;
