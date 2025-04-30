import React from "react";

function Skills() {
  const skillsList = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Git & GitHub",
    "Responsive Design",
    "React.js",
  ];

  return (
    <section id="Skills">
      <div className="skills-section">
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
